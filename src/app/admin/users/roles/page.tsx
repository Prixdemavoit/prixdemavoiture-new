'use client';

import { useState } from 'react';

type Role = {
  id: number;
  name: string;
  description: string;
  permissions: string[];
};

const mockRoles: Role[] = [
  {
    id: 1,
    name: 'admin',
    description: 'Accès complet à toutes les fonctionnalités',
    permissions: ['read', 'write', 'delete', 'manage_users', 'manage_roles', 'manage_settings']
  },
  {
    id: 2,
    name: 'editor',
    description: 'Peut éditer le contenu mais pas gérer les utilisateurs',
    permissions: ['read', 'write']
  },
  {
    id: 3,
    name: 'user',
    description: 'Accès en lecture seule',
    permissions: ['read']
  }
];

const availablePermissions = [
  { id: 'read', label: 'Lecture' },
  { id: 'write', label: 'Écriture' },
  { id: 'delete', label: 'Suppression' },
  { id: 'manage_users', label: 'Gestion des utilisateurs' },
  { id: 'manage_roles', label: 'Gestion des rôles' },
  { id: 'manage_settings', label: 'Gestion des paramètres' }
];

export default function RolesManagementPage() {
  const [roles, setRoles] = useState<Role[]>(mockRoles);
  const [editingRole, setEditingRole] = useState<Role | null>(null);
  const [newRole, setNewRole] = useState({
    name: '',
    description: '',
    permissions: [] as string[]
  });

  const handleEditRole = (role: Role) => {
    setEditingRole(role);
  };

  const handleUpdateRole = () => {
    if (!editingRole) return;
    
    setRoles(roles.map(role => 
      role.id === editingRole.id ? editingRole : role
    ));
    setEditingRole(null);
  };

  const handleDeleteRole = (roleId: number) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce rôle ?')) {
      setRoles(roles.filter(role => role.id !== roleId));
    }
  };

  const handleAddRole = () => {
    if (!newRole.name) {
      alert('Le nom du rôle est requis');
      return;
    }
    
    const newRoleWithId: Role = {
      id: Math.max(...roles.map(r => r.id), 0) + 1,
      ...newRole
    };
    
    setRoles([...roles, newRoleWithId]);
    setNewRole({
      name: '',
      description: '',
      permissions: []
    });
  };

  const togglePermission = (permission: string, isEditingExisting: boolean) => {
    if (isEditingExisting && editingRole) {
      const updatedPermissions = editingRole.permissions.includes(permission)
        ? editingRole.permissions.filter(p => p !== permission)
        : [...editingRole.permissions, permission];
      
      setEditingRole({
        ...editingRole,
        permissions: updatedPermissions
      });
    } else {
      const updatedPermissions = newRole.permissions.includes(permission)
        ? newRole.permissions.filter(p => p !== permission)
        : [...newRole.permissions, permission];
      
      setNewRole({
        ...newRole,
        permissions: updatedPermissions
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gestion des rôles</h1>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Rôles existants</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nom
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Permissions
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {roles.map((role) => (
                <tr key={role.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {editingRole?.id === role.id ? (
                      <input
                        type="text"
                        value={editingRole.name}
                        onChange={(e) => setEditingRole({...editingRole, name: e.target.value})}
                        className="border border-gray-300 rounded-md shadow-sm py-1 px-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    ) : (
                      <div className="text-sm font-medium text-gray-900">{role.name}</div>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {editingRole?.id === role.id ? (
                      <input
                        type="text"
                        value={editingRole.description}
                        onChange={(e) => setEditingRole({...editingRole, description: e.target.value})}
                        className="w-full border border-gray-300 rounded-md shadow-sm py-1 px-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    ) : (
                      <div className="text-sm text-gray-500">{role.description}</div>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {editingRole?.id === role.id ? (
                      <div className="flex flex-wrap gap-2">
                        {availablePermissions.map(permission => (
                          <label key={permission.id} className="inline-flex items-center">
                            <input
                              type="checkbox"
                              checked={editingRole.permissions.includes(permission.id)}
                              onChange={() => togglePermission(permission.id, true)}
                              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <span className="ml-2 text-sm text-gray-700">{permission.label}</span>
                          </label>
                        ))}
                      </div>
                    ) : (
                      <div className="text-sm text-gray-500">
                        {role.permissions.map(p => {
                          const permission = availablePermissions.find(ap => ap.id === p);
                          return permission ? (
                            <span key={p} className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-1 mb-1">
                              {permission.label}
                            </span>
                          ) : null;
                        })}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    {editingRole?.id === role.id ? (
                      <button
                        onClick={handleUpdateRole}
                        className="text-green-600 hover:text-green-900 mr-4"
                      >
                        Enregistrer
                      </button>
                    ) : (
                      <button
                        onClick={() => handleEditRole(role)}
                        className="text-blue-600 hover:text-blue-900 mr-4"
                      >
                        Éditer
                      </button>
                    )}
                    <button
                      onClick={() => handleDeleteRole(role.id)}
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
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Ajouter un nouveau rôle</h2>
        </div>
        
        <div className="p-6 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nom du rôle
            </label>
            <input
              type="text"
              id="name"
              value={newRole.name}
              onChange={(e) => setNewRole({...newRole, name: e.target.value})}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <input
              type="text"
              id="description"
              value={newRole.description}
              onChange={(e) => setNewRole({...newRole, description: e.target.value})}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Permissions
            </label>
            <div className="grid grid-cols-2 gap-2">
              {availablePermissions.map(permission => (
                <label key={permission.id} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={newRole.permissions.includes(permission.id)}
                    onChange={() => togglePermission(permission.id, false)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-700">{permission.label}</span>
                </label>
              ))}
            </div>
          </div>
          
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleAddRole}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Ajouter le rôle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
