'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import OfferForm from '@/components/admin/offers/OfferForm';

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

// Données fictives pour simuler une offre
const mockOffer: Offer = {
  id: 1,
  title: 'Offre spéciale été',
  vehicleId: 1,
  vehicleName: 'Renault Clio 2020',
  price: 15000,
  discountPrice: 13500,
  startDate: '2025-06-01',
  endDate: '2025-08-31',
  status: 'upcoming',
  description: 'Profitez de cette offre exceptionnelle sur ce véhicule en parfait état.',
  featured: true
};

export default function OfferDetailPage() {
  const params = useParams();
  const router = useRouter();
  const offerId = params.id as string;
  
  const [offer, setOffer] = useState<Offer | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Simuler le chargement des données de l'offre
    const fetchOffer = async () => {
      try {
        // Dans une application réelle, vous feriez un appel API ici
        // const response = await fetch(`/api/offers/${offerId}`);
        // const data = await response.json();
        
        // Simulation d'un délai de chargement
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Utiliser les données fictives pour la démonstration
        setOffer({...mockOffer, id: parseInt(offerId)});
        setLoading(false);
      } catch (err) {
        setError('Erreur lors du chargement des données de l\'offre');
        setLoading(false);
      }
    };

    fetchOffer();
  }, [offerId]);

  const handleSaveOffer = async (offerData: Omit<Offer, 'id' | 'status'>) => {
    try {
      // Dans une application réelle, vous feriez un appel API ici
      // await fetch(`/api/offers/${offerId}`, {
      //   method: 'PUT',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(offerData)
      // });
      
      // Simulation d'un délai de mise à jour
      await new Promise(resolve => setTimeout(resolve, 500));
      
      alert('Offre mise à jour avec succès');
      router.push('/admin/offers');
    } catch (err) {
      alert('Erreur lors de la mise à jour de l\'offre');
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
        {offer ? `Modifier: ${offer.title}` : 'Détail de l\'offre'}
      </h1>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {offer ? (
          <OfferForm 
            offer={offer} 
            onSave={handleSaveOffer} 
            onCancel={() => router.push('/admin/offers')} 
          />
        ) : (
          <div className="p-6">
            <p className="text-red-500">Offre non trouvée</p>
          </div>
        )}
      </div>
    </div>
  );
}
