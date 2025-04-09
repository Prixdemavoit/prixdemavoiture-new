'use client';

import { useState } from 'react';
import Link from 'next/link';

type Vehicle = {
  id: number;
  title: string;
  price: number;
  year: number;
  fuel: string;
  mileage: number;
  location: string;
  certified: boolean;
  image: string;
};

// Données fictives pour la démonstration
const mockVehicles: Vehicle[] = [
  {
    id: 1,
    title: 'Peugeot 308 1.6 BlueHDi 120ch Active Business',
    price: 12990,
    year: 2018,
    fuel: 'Diesel',
    mileage: 85000,
    location: 'Paris',
    certified: true,
    image: '/vehicles/peugeot-308.jpg'
  },
  {
    id: 2,
    title: 'Renault Clio IV 0.9 TCe 90ch energy Intens',
    price: 11490,
    year: 2019,
    fuel: 'Essence',
    mileage: 45000,
    location: 'Lyon',
    certified: true,
    image: '/vehicles/renault-clio.jpg'
  },
  {
    id: 3,
    title: 'Volkswagen Golf VII 1.5 TSI 130ch Carat',
    price: 19990,
    year: 2020,
    fuel: 'Essence',
    mileage: 32000,
    location: 'Marseille',
    certified: true,
    image: '/vehicles/volkswagen-golf.jpg'
  }
];

export default function VehicleList() {
  const [filters, setFilters] = useState({
    brand: '',
    minPrice: '',
    maxPrice: '',
    fuel: '',
    minYear: '',
    maxMileage: ''
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const applyFilters = () => {
    // Logique de filtrage (dans une application réelle, cela ferait un appel API)
    console.log('Filtres appliqués:', filters);
  };

  return (
    <div>
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Filtrer les résultats</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="brand" className="block text-sm font-medium text-gray-700 mb-1">
              Marque
            </label>
            <select
              id="brand"
              name="brand"
              value={filters.brand}
              onChange={handleFilterChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Toutes les marques</option>
              <option value="Renault">Renault</option>
              <option value="Peugeot">Peugeot</option>
              <option value="Citroën">Citroën</option>
              <option value="Volkswagen">Volkswagen</option>
              <option value="BMW">BMW</option>
              <option value="Audi">Audi</option>
              <option value="Mercedes">Mercedes</option>
              <option value="Toyota">Toyota</option>
            </select>
          </div>
          <div>
            <label htmlFor="minPrice" className="block text-sm font-medium text-gray-700 mb-1">
              Prix minimum
            </label>
            <select
              id="minPrice"
              name="minPrice"
              value={filters.minPrice}
              onChange={handleFilterChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Aucun minimum</option>
              <option value="5000">5 000 €</option>
              <option value="10000">10 000 €</option>
              <option value="15000">15 000 €</option>
              <option value="20000">20 000 €</option>
              <option value="25000">25 000 €</option>
              <option value="30000">30 000 €</option>
            </select>
          </div>
          <div>
            <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-700 mb-1">
              Prix maximum
            </label>
            <select
              id="maxPrice"
              name="maxPrice"
              value={filters.maxPrice}
              onChange={handleFilterChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Aucun maximum</option>
              <option value="10000">10 000 €</option>
              <option value="15000">15 000 €</option>
              <option value="20000">20 000 €</option>
              <option value="25000">25 000 €</option>
              <option value="30000">30 000 €</option>
              <option value="40000">40 000 €</option>
              <option value="50000">50 000 €</option>
            </select>
          </div>
          <div>
            <label htmlFor="fuel" className="block text-sm font-medium text-gray-700 mb-1">
              Carburant
            </label>
            <select
              id="fuel"
              name="fuel"
              value={filters.fuel}
              onChange={handleFilterChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Tous les carburants</option>
              <option value="Essence">Essence</option>
              <option value="Diesel">Diesel</option>
              <option value="Hybride">Hybride</option>
              <option value="Électrique">Électrique</option>
              <option value="GPL">GPL</option>
            </select>
          </div>
          <div>
            <label htmlFor="minYear" className="block text-sm font-medium text-gray-700 mb-1">
              Année minimum
            </label>
            <select
              id="minYear"
              name="minYear"
              value={filters.minYear}
              onChange={handleFilterChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Toutes les années</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
            </select>
          </div>
          <div>
            <label htmlFor="maxMileage" className="block text-sm font-medium text-gray-700 mb-1">
              Kilométrage maximum
            </label>
            <select
              id="maxMileage"
              name="maxMileage"
              value={filters.maxMileage}
              onChange={handleFilterChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Tous kilométrages</option>
              <option value="10000">10 000 km</option>
              <option value="30000">30 000 km</option>
              <option value="50000">50 000 km</option>
              <option value="100000">100 000 km</option>
              <option value="150000">150 000 km</option>
              <option value="200000">200 000 km</option>
            </select>
          </div>
        </div>
        <div className="mt-4 flex justify-center">
          <button
            onClick={applyFilters}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Appliquer les filtres
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mockVehicles.map(vehicle => (
          <div key={vehicle.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="bg-gray-200 h-48 flex items-center justify-center">
              <p className="text-gray-500">Image du véhicule</p>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold mb-2">{vehicle.title}</h3>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-md font-bold">
                  {vehicle.price.toLocaleString()} €
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-3 text-sm text-gray-600">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{vehicle.year}</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                  <span>{vehicle.fuel}</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span>{vehicle.mileage.toLocaleString() } km</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{vehicle.location}</span>
                </div>
              </div>
              {vehicle.certified && (
                <div className="mt-3 flex items-center text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-sm font-medium">Certifié</span>
                </div>
              ) }
              <div className="mt-4">
                <Link href={`/annonces/${vehicle.id}`} className="block w-full text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                  Voir détails
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
