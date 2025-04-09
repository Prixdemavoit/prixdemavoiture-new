'use client';

import { useState } from 'react';
import Link from 'next/link';

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
};

const mockOffers: Offer[] = [
  { 
    id: 1, 
    title: 'Offre spéciale été', 
    vehicleId: 1, 
    vehicleName: 'Renault Clio 2020', 
    price: 15000, 
    discountPrice: 13500, 
    startDate: '2025-06-01', 
    endDate: '2025-08-31', 
    status: 'upcoming' 
  },
  { 
    id: 2, 
    title: 'Déstockage', 
    vehicleId: 2, 
    vehicleName: 'Peugeot 308 2019', 
    price: 18000, 
    discountPrice: 16200, 
    startDate: '2025-04-01', 
    endDate: '2025-05-15', 
    status: 'active' 
  },
  { 
    id: 3, 
    title: 'Black Friday', 
    vehicleId: 3, 
    vehicleName: 'Citroën C3 2021', 
    price: 16500, 
    discountPrice: 14500, 
    startDate: '2024-11-25', 
    endDate: '2024-12-01', 
    status: 'expired' 
  },
];

export default function OfferManagement() {
  const [offers, setOffers] = useState<Offer[]>(mockOffers);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredOffers = offers.filter(offer => {
    const matchesSearch = 
      offer.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      offer.vehicleName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || offer.status === filterStatus;
    
    return matchesSearch && matchesStatus;
  });

  const handleDeleteOffer = (offerId: number) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette offre ?')) {
      setOffers(offers.filter(offer => offer.id !== offerId));
    }
  };

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'upcoming':
        return 'bg-blue-100 text-blue-800';
      case 'expired':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'active':
        return 'Active';
      case 'upcoming':
        return 'À venir';
      case 'expired':
        return 'Expirée';
      default:
        return status;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-semibold">Liste des offres</h2>
            <p className="text-sm text-gray-500">{offers.length} offres au total</p>
          </div>
          <Link 
            href="/admin/offers/add" 
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Ajouter une offre
          </Link>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1">
            <label htmlFor="search" className="sr-only">Rechercher</label>
            <input
              type="text"
              id="search"
              placeholder="Rechercher par titre ou véhicule"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
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
              <option value="active">Active</option>
              <option value="upcoming">À venir</option>
              <option value="expired">Expirée</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Titre
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Véhicule
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Prix
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Période
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
            {filteredOffers.map((offer) => (
              <tr key={offer.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{offer.title}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{offer.vehicleName}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">
                    {offer.discountPrice ? (
                      <>
                        <span className="line-through">{offer.price.toLocaleString()} €</span>
                        <span className="ml-2 text-green-600 font-medium">{offer.discountPrice.toLocaleString()} €</span>
                        <span className="ml-2 text-green-600 text-xs">
                          (-{Math.round((1 - offer.discountPrice / offer.price) * 100)}%)
                        </span>
                      </>
                    ) : (
                      <span>{offer.price.toLocaleString()} €</span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">
                    Du {new Date(offer.startDate).toLocaleDateString()} au {new Date(offer.endDate).toLocaleDateString()}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(offer.status)}`}>
                    {getStatusLabel(offer.status)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <Link
                    href={`/admin/offers/${offer.id}`}
                    className="text-blue-600 hover:text-blue-900 mr-4"
                  >
                    Éditer
                  </Link>
                  <button
                    onClick={() => handleDeleteOffer(offer.id)}
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
