import VehicleManagement from '@/components/admin/vehicles/VehicleManagement';

export default function AdminVehiclesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gestion des véhicules</h1>
      <VehicleManagement />
    </div>
  );
}
