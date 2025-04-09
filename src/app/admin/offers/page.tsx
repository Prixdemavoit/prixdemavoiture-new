import OfferManagement from '@/components/admin/offers/OfferManagement';

export default function AdminOffersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gestion des offres</h1>
      <OfferManagement />
    </div>
  );
}
