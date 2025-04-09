import AdminDashboard from '@/components/admin/dashboard/AdminDashboard';

export default function AdminPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Administration</h1>
      <AdminDashboard />
    </div>
  );
}
