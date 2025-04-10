import UserManagement from '@/components/admin/users/UserManagement';

export default function AdminUsersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gestion des utilisateurs</h1>
      <UserManagement />
    </div>
  );
}
