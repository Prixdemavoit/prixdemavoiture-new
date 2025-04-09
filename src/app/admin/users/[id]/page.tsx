'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import UserForm from '@/components/admin/users/UserForm';

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  registrationDate: string;
};

// Données fictives pour simuler un utilisateur
const mockUser: User = {
  id: 1,
  name: 'Jean Dupont',
  email: 'jean.dupont@example.com',
  role: 'admin',
  status: 'active',
  registrationDate: '2025-01-15'
};

export default function UserDetailPage() {
  const params = useParams();
  const router = useRouter();
  const userId = params.id as string;
  
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Simuler le chargement des données utilisateur
    const fetchUser = async () => {
      try {
        // Dans une application réelle, vous feriez un appel API ici
        // const response = await fetch(`/api/users/${userId}`);
        // const data = await response.json();
        
        // Simulation d'un délai de chargement
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Utiliser les données fictives pour la démonstration
        setUser({...mockUser, id: parseInt(userId)});
        setLoading(false);
      } catch (err) {
        setError('Erreur lors du chargement des données utilisateur');
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  const handleSaveUser = async (userData: Omit<User, 'id' | 'registrationDate'>) => {
    try {
      // Dans une application réelle, vous feriez un appel API ici
      // await fetch(`/api/users/${userId}`, {
      //   method: 'PUT',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(userData)
      // });
      
      // Simulation d'un délai de mise à jour
      await new Promise(resolve => setTimeout(resolve, 500));
      
      alert('Utilisateur mis à jour avec succès');
      router.push('/admin/users');
    } catch (err) {
      alert('Erreur lors de la mise à jour de l\'utilisateur');
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
      <h1 className="text-3xl font-bold mb-6">Détail de l'utilisateur</h1>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {user ? (
          <UserForm 
            user={user} 
            onSave={handleSaveUser} 
            onCancel={() => router.push('/admin/users')} 
          />
        ) : (
          <div className="p-6">
            <p className="text-red-500">Utilisateur non trouvé</p>
          </div>
        )}
      </div>
    </div>
  );
}
