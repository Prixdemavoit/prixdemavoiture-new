'use client';

import { useState } from 'react';
import Link from 'next/link';

type Vehicle = {
  id: number;
  brand: string;
  model: string;
  year: number;
  category: string;
  price: number;
  status: 'available' | 'sold' | 'reserved';
};

const mockVehicles: Vehicle[] = [
  { id: 1, brand: 'Renault', model: 'Clio', year: 2020, category: 'Citadine', price: 15000, status: 'available' },
  { id: 2, brand: 'Peugeot', model: '308', year: 2019, category: 'Compacte', price: 18000, status: 'available' },
  { id: 3, brand: 'Citroën', model: 'C3', year: 2021, category: 'Citadine', price: 16500, status: 'reserved' },
  { id: 4, brand: 'Volkswagen', model: 'Golf', year: 2018, category: 'Compacte', price: 17000, status: 'sold' },
  { id: 5, brand: 'Toyota', model: 'Yaris', year: 2022, category: 'Citadine', price: 19000, status: 'available' },
];

export default function VehicleManagement() {
  const [vehicles, setVehicles] = useState<Vehicle[]>(mockVehicles);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredVehicles = vehicles.filter(vehicle => {
    const matchesSearch = 
      vehicle.brand.toLowerCase().includes(searchTerm.toLowerCase()) || 
      vehicle.model.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || vehicle.category === filterCategory;
    const matchesStatus = filterStatus === 'all' || vehicle.status === filterStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const handleDeleteVehicle = (vehicleId: number) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce véhicule ?')) {
      setVehicles(vehicles.filter(vehicle => vehicle.id !== vehicleId));
    }
  };

  const categories = Array.from(new Set(vehicles.map(v => v.category)));

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-semibold">Liste des véhicules</h2>
            <p className="text-sm text-gray-500">{vehicles.length} véhicules au total</p>
          </div>
          <Link 
            href="/admin/vehicles/add" 
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Ajouter un véhicule
          </Link>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1">
            <label htmlFor="search" className="sr-only">Rechercher</label>
            <input
              type="text"
              id="search"
              placeholder="Rechercher par marque ou modèle"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="category-filter" className="sr-only">Filtrer par catégorie</label>
            <select
              id="category-filter"
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            >
              <option value="all">Toutes les catégories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="status-filter" className="sr-only">Filtrer par statut</label>
            <select
              id="status-filter"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            >
              <option value="all">Tous les statuts</option>
              <option value="available">Disponible</option>
              <option value="reserved">Réservé</option>
              <option value="sold">Vendu</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Marque / Modèle
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Année
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Catégorie
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Prix
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Statut
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredVehicles.map((vehicle) => (
              <tr key={vehicle.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{vehicle.brand} {vehicle.model}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{vehicle.year}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{vehicle.category}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{vehicle.price.toLocaleString()} €</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    vehicle.status === 'available' ? 'bg-green-100 text-green-800' : 
                    vehicle.status === 'reserved' ? 'bg-yellow-100 text-yellow-800' : 
                    'bg-red-100 text-red-800'
                  }`}>
                    {vehicle.status === 'available' ? 'Disponible' : 
                     vehicle.status === 'reserved' ? 'Réservé' : 'Vendu'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <Link
                    href={`/admin/vehicles/${vehicle.id}`}
                    className="text-blue-600 hover:text-blue-900 mr-4"
                  >
                    Éditer
                  </Link>
                  <button
                    onClick={() => handleDeleteVehicle(vehicle.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
