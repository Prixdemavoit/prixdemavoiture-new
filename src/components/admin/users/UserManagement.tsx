'use client';

import { useState } from 'react';
import UserForm from './UserForm';

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  registrationDate: string;
};

const mockUsers: User[] = [
  { id: 1, name: 'Jean Dupont', email: 'jean.dupont@example.com', role: 'admin', status: 'active', registrationDate: '2025-01-15' },
  { id: 2, name: 'Marie Martin', email: 'marie.martin@example.com', role: 'user', status: 'active', registrationDate: '2025-02-20' },
  { id: 3, name: 'Pierre Durand', email: 'pierre.durand@example.com', role: 'editor', status: 'inactive', registrationDate: '2025-03-10' },
  { id: 4, name: 'Sophie Bernard', email: 'sophie.bernard@example.com', role: 'user', status: 'active', registrationDate: '2025-03-25' },
  { id: 5, name: 'Lucas Petit', email: 'lucas.petit@example.com', role: 'user', status: 'active', registrationDate: '2025-04-01' },
];

export default function UserManagement() {
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'all' || user.role === filterRole;
    return matchesSearch && matchesRole;
  });

  const handleAddUser = () => {
    setSelectedUser(null);
    setIsFormOpen(true);
  };

  const handleEditUser = (user: User) => {
    setSelectedUser(user);
    setIsFormOpen(true);
  };

  const handleDeleteUser = (userId: number) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
      setUsers(users.filter(user => user.id !== userId));
    }
  };

  const handleSaveUser = (userData: Omit<User, 'id' | 'registrationDate'>) => {
    if (selectedUser) {
      // Mise à jour d'un utilisateur existant
      setUsers(users.map(user => 
        user.id === selectedUser.id 
          ? { ...user, ...userData } 
          : user
      ));
    } else {
      // Ajout d'un nouvel utilisateur
      const newUser: User = {
        id: Math.max(...users.map(u => u.id), 0) + 1,
        ...userData,
        registrationDate: new Date().toISOString().split('T')[0]
      };
      setUsers([...users, newUser]);
    }
    setIsFormOpen(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {isFormOpen ? (
        <UserForm 
          user={selectedUser} 
          onSave={handleSaveUser} 
          onCancel={() => setIsFormOpen(false)} 
        />
      ) : (
        <>
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div className="mb-4 md:mb-0">
                <h2 className="text-lg font-semibold">Liste des utilisateurs</h2>
                <p className="text-sm text-gray-500">{users.length} utilisateurs au total</p>
              </div>
              <button
                type="button"
                onClick={handleAddUser}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Ajouter un utilisateur
              </button>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex-1">
                <label htmlFor="search" className="sr-only">Rechercher</label>
                <input
                  type="text"
                  id="search"
                  placeholder="Rechercher par nom ou email"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="role-filter" className="sr-only">Filtrer par rôle</label>
                <select
                  id="role-filter"
                  value={filterRole}
                  onChange={(e) => setFilterRole(e.target.value)}
                  className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                >
                  <option value="all">Tous les rôles</option>
                  <option value="admin">Admin</option>
                  <option value="editor">Éditeur</option>
                  <option value="user">Utilisateur</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nom
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rôle
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Statut
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date d'inscription
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{user.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{user.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {user.role === 'admin' && 'Administrateur'}
                        {user.role === 'editor' && 'Éditeur'}
                        {user.role === 'user' && 'Utilisateur'}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {user.status === 'active' ? 'Actif' : 'Inactif'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user.registrationDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => handleEditUser(user)}
                        className="text-blue-600 hover:text-blue-900 mr-4"
                      >
                        Éditer
                      </button>
                      <button
                        onClick={() => handleDeleteUser(user.id)}
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
        </>
      )}
    </div>
  );
}
