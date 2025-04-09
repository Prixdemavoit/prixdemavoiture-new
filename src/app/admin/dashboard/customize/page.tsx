'use client';

import { useState } from 'react';

export default function AdminDashboardCustomizePage() {
  const [settings, setSettings] = useState({
    primaryColor: '#3b82f6',
    secondaryColor: '#10b981',
    showRecentEstimations: true,
    showPopularVehicles: true,
    enableUserFeedback: true,
    dashboardLayout: 'standard'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simuler la sauvegarde des paramètres
    console.log('Paramètres sauvegardés:', settings);
    alert('Paramètres du tableau de bord sauvegardés avec succès !');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Personnalisation du tableau de bord</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Apparence</h2>
              
              <div className="mb-4">
                <label htmlFor="primaryColor" className="block text-sm font-medium text-gray-700 mb-1">
                  Couleur principale
                </label>
                <input
                  type="color"
                  id="primaryColor"
                  name="primaryColor"
                  value={settings.primaryColor}
                  onChange={handleChange}
                  className="h-10 w-full rounded-md border border-gray-300"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="secondaryColor" className="block text-sm font-medium text-gray-700 mb-1">
                  Couleur secondaire
                </label>
                <input
                  type="color"
                  id="secondaryColor"
                  name="secondaryColor"
                  value={settings.secondaryColor}
                  onChange={handleChange}
                  className="h-10 w-full rounded-md border border-gray-300"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="dashboardLayout" className="block text-sm font-medium text-gray-700 mb-1">
                  Disposition du tableau de bord
                </label>
                <select
                  id="dashboardLayout"
                  name="dashboardLayout"
                  value={settings.dashboardLayout}
                  onChange={handleChange}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                >
                  <option value="standard">Standard</option>
                  <option value="compact">Compact</option>
                  <option value="expanded">Étendu</option>
                  <option value="minimal">Minimal</option>
                </select>
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-4">Widgets et fonctionnalités</h2>
              
              <div className="mb-4">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="showRecentEstimations"
                      name="showRecentEstimations"
                      type="checkbox"
                      checked={settings.showRecentEstimations}
                      onChange={handleChange}
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="showRecentEstimations" className="font-medium text-gray-700">
                      Afficher les estimations récentes
                    </label>
                    <p className="text-gray-500">Affiche les dernières estimations réalisées sur le tableau de bord.</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="showPopularVehicles"
                      name="showPopularVehicles"
                      type="checkbox"
                      checked={settings.showPopularVehicles}
                      onChange={handleChange}
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="showPopularVehicles" className="font-medium text-gray-700">
                      Afficher les véhicules populaires
                    </label>
                    <p className="text-gray-500">Affiche les véhicules les plus consultés sur le tableau de bord.</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="enableUserFeedback"
                      name="enableUserFeedback"
                      type="checkbox"
                      checked={settings.enableUserFeedback}
                      onChange={handleChange}
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="enableUserFeedback" className="font-medium text-gray-700">
                      Activer les retours utilisateurs
                    </label>
                    <p className="text-gray-500">Permet aux utilisateurs de laisser des commentaires sur les estimations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mr-3"
            >
              Réinitialiser
            </button>
            <button
              type="submit"
              className="bg-blue-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Enregistrer les modifications
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
