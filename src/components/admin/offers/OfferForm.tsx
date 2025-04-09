'use client';

import { useState, useEffect } from 'react';

type Vehicle = {
  id: number;
  name: string;
  price: number;
};

type Offer = {
  id: number;
  title: string;
  vehicleId: number;
  vehicleName: string;
  price: number;
  discountPrice?: number;
  startDate: string;
  endDate: string;
  status: 'active' | 'expired' | 'upcoming';
  description: string;
  featured: boolean;
};

type OfferFormProps = {
  offer?: Offer;
  onSave: (offerData: Omit<Offer, 'id' | 'status'>) => void;
  onCancel: () => void;
};

// Données fictives pour simuler une liste de véhicules
const mockVehicles: Vehicle[] = [
  { id: 1, name: 'Renault Clio 2020', price: 15000 },
  { id: 2, name: 'Peugeot 308 2019', price: 18000 },
  { id: 3, name: 'Citroën C3 2021', price: 16500 },
  { id: 4, name: 'Volkswagen Golf 2018', price: 17000 },
  { id: 5, name: 'Toyota Yaris 2022', price: 19000 },
];

export default function OfferForm({ offer, onSave, onCancel }: OfferFormProps) {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [formData, setFormData] = useState({
    title: '',
    vehicleId: 0,
    vehicleName: '',
    price: 0,
    discountPrice: 0,
    startDate: '',
    endDate: '',
    description: '',
    featured: false
  });

  useEffect(() => {
    // Simuler le chargement des véhicules
    const fetchVehicles = async () => {
      try {
        // Dans une application réelle, vous feriez un appel API ici
        // const response = await fetch('/api/vehicles');
        // const data = await response.json();
        
        // Simulation d'un délai de chargement
        await new Promise(resolve => setTimeout(resolve, 300));
        
        // Utiliser les données fictives pour la démonstration
        setVehicles(mockVehicles);
        setLoading(false);
      } catch (err) {
        console.error('Erreur lors du chargement des véhicules:', err);
        setLoading(false);
      }
    };

    fetchVehicles();
  }, []);

  useEffect(() => {
    if (offer) {
      setFormData({
        title: offer.title,
        vehicleId: offer.vehicleId,
        vehicleName: offer.vehicleName,
        price: offer.price,
        discountPrice: offer.discountPrice || 0,
        startDate: offer.startDate,
        endDate: offer.endDate,
        description: offer.description,
        featured: offer.featured
      });
    }
  }, [offer]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else if (name === 'vehicleId') {
      const vehicleId = parseInt(value);
      const selectedVehicle = vehicles.find(v => v.id === vehicleId);
      
      if (selectedVehicle) {
        setFormData(prev => ({ 
          ...prev, 
          vehicleId, 
          vehicleName: selectedVehicle.name,
          price: selectedVehicle.price,
          discountPrice: prev.discountPrice || Math.round(selectedVehicle.price * 0.9) // 10% de réduction par défaut
        }));
      } else {
        setFormData(prev => ({ ...prev, vehicleId: parseInt(value) }));
      }
    } else if (name === 'price' || name === 'discountPrice') {
      setFormData(prev => ({ ...prev, [name]: value ? parseInt(value) : 0 }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation de base
    if (!formData.title || !formData.vehicleId || !formData.startDate || !formData.endDate) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }
    
    if (formData.discountPrice >= formData.price) {
      alert('Le prix remisé doit être inférieur au prix normal');
      return;
    }
    
    if (new Date(formData.endDate) <= new Date(formData.startDate)) {
      alert('La date de fin doit être postérieure à la date de début');
      return;
    }
    
    onSave(formData);
  };

  if (loading) {
    return (
      <div className="p-6">
        <p>Chargement des données...</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Titre de l'offre
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        
        <div>
          <label htmlFor="vehicleId" className="block text-sm font-medium text-gray-700">
            Véhicule
          </label>
          <select
            id="vehicleId"
            name="vehicleId"
            value={formData.vehicleId}
            onChange={handleChange}
            required
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          >
            <option value="">Sélectionnez un véhicule</option>
            {vehicles.map(vehicle => (
              <option key={vehicle.id} value={vehicle.id}>
                {vehicle.name} - {vehicle.price.toLocaleString()} €
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            Prix normal (€)
          </label>
          <input
            type="number"
            name="price"
            id="price"
            value={formData.price}
            onChange={handleChange}
            required
            min="0"
            step="100"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        
        <div>
          <label htmlFor="discountPrice" className="block text-sm font-medium text-gray-700">
            Prix remisé (€)
          </label>
          <input
            type="number"
            name="discountPrice"
            id="discountPrice"
            value={formData.discountPrice}
            onChange={handleChange}
            min="0"
            step="100"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          {formData.price > 0 && formData.discountPrice > 0 && (
            <p className="mt-1 text-sm text-green-600">
              Remise: {Math.round((1 - formData.discountPrice / formData.price) * 100)}%
            </p>
          )}
        </div>
        
        <div>
          <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
            Date de début
          </label>
          <input
            type="date"
            name="startDate"
            id="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        
        <div>
          <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
            Date de fin
          </label>
          <input
            type="date"
            name="endDate"
            id="endDate"
            value={formData.endDate}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          value={formData.description}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        ></textarea>
      </div>
      
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id="featured"
            name="featured"
            type="checkbox"
            checked={formData.featured}
            onChange={handleChange}
            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="featured" className="font-medium text-gray-700">
            Offre mise en avant
          </label>
          <p className="text-gray-500">Les offres mises en avant apparaissent en premier sur la page d'accueil.</p>
        </div>
      </div>
      
      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onCancel}
          className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Annuler
        </button>
        <button
          type="submit"
          className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Enregistrer
        </button>
      </div>
    </form>
  );
}
