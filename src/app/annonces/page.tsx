import VehicleList from '@/components/vehicles/VehicleList';

export default function AnnoncesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Annonces de véhicules</h1>
      <VehicleList />
    </div>
  );
}
