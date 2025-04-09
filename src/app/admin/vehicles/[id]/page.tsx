'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import VehicleForm from '@/components/admin/vehicles/VehicleForm';

type Vehicle = {
  id: number;
  brand: string;
  model: string;
  year: number;
  category: string;
  price: number;
  status: 'available' | 'sold' | 'reserved';
  description: string;
  features: string[];
  images: string[];
};

// Données fictives pour simuler un véhicule
const mockVehicle: Vehicle = {
  id: 1,
  brand: 'Renault',
  model: 'Clio',
  year: 2020,
  category: 'Citadine',
  price: 15000,
  status: 'available',
  description: 'Voiture en excellent état, faible kilométrage, entretien régulier.',
  features: ['Climatisation', 'GPS', 'Bluetooth', 'Caméra de recul'],
  images: ['/images/vehicle1.jpg', '/images/vehicle2.jpg']
};

export default function VehicleDetailPage() {
  const params = useParams();
  const router = useRouter();
  const vehicleId = params.id as string;
  
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Simuler le chargement des données du véhicule
    const fetchVehicle = async () => {
      try {
        // Dans une application réelle, vous feriez un appel API ici
        // const response = await fetch(`/api/vehicles/${vehicleId}`);
        // const data = await response.json();
        
        // Simulation d'un délai de chargement
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Utiliser les données fictives pour la démonstration
        setVehicle({...mockVehicle, id: parseInt(vehicleId)});
        setLoading(false);
      } catch (err) {
        setError('Erreur lors du chargement des données du véhicule');
        setLoading(false);
      }
    };

    fetchVehicle();
  }, [vehicleId]);

  const handleSaveVehicle = async (vehicleData: Omit<Vehicle, 'id'>) => {
    try {
      // Dans une application réelle, vous feriez un appel API ici
      // await fetch(`/api/vehicles/${vehicleId}`, {
      //   method: 'PUT',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(vehicleData)
      // });
      
      // Simulation d'un délai de mise à jour
      await new Promise(resolve => setTimeout(resolve, 500));
      
      alert('Véhicule mis à jour avec succès');
      router.push('/admin/vehicles');
    } catch (err) {
      alert('Erreur lors de la mise à jour du véhicule');
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-lg">Chargement...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-50 border-l-4 border-red-400 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        {vehicle ? `Modifier: ${vehicle.brand} ${vehicle.model}` : 'Détail du véhicule'}
      </h1>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {vehicle ? (
          <VehicleForm 
            vehicle={vehicle} 
            onSave={handleSaveVehicle} 
            onCancel={() => router.push('/admin/vehicles')} 
          />
        ) : (
          <div className="p-6">
            <p className="text-red-500">Véhicule non trouvé</p>
          </div>
        )}
      </div>
    </div>
  );
}

