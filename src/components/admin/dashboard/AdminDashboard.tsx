'use client';

import { useState } from 'react';

type DashboardTab = 'overview' | 'users' | 'vehicles' | 'estimations';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<DashboardTab>('overview');

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex border-b">
        <button
          className={`px-4 py-3 text-sm font-medium ${
            activeTab === 'overview' ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('overview')}
        >
          Vue d'ensemble
        </button>
        <button
          className={`px-4 py-3 text-sm font-medium ${
            activeTab === 'users' ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('users')}
        >
          Utilisateurs
        </button>
        <button
          className={`px-4 py-3 text-sm font-medium ${
            activeTab === 'vehicles' ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('vehicles')}
        >
          Véhicules
        </button>
        <button
          className={`px-4 py-3 text-sm font-medium ${
            activeTab === 'estimations' ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('estimations')}
        >
          Estimations
        </button>
      </div>

      <div className="p-6">
        {activeTab === 'overview' && (
          <div>
            <h3 className="text-lg font-semibold mb-4">Vue d'ensemble</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500">Total utilisateurs</p>
                <p className="text-2xl font-bold">1,245</p>
                <p className="text-xs text-green-600">+12% ce mois</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500">Estimations réalisées</p>
                <p className="text-2xl font-bold">3,872</p>
                <p className="text-xs text-green-600">+8% ce mois</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500">Véhicules enregistrés</p>
                <p className="text-2xl font-bold">2,156</p>
                <p className="text-xs text-green-600">+15% ce mois</p>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Activité récente</h4>
              <ul className="space-y-2">
                <li className="text-sm text-gray-600 border-b pb-2">Jean Dupont a effectué une estimation pour Renault Clio (il y a 5 min)</li>
                <li className="text-sm text-gray-600 border-b pb-2">Marie Martin a créé un compte (il y a 12 min)</li>
                <li className="text-sm text-gray-600 border-b pb-2">Pierre Durand a demandé un rapport détaillé (il y a 34 min)</li>
                <li className="text-sm text-gray-600 border-b pb-2">Sophie Bernard a mis à jour son profil (il y a 1 heure)</li>
                <li className="text-sm text-gray-600">Admin a ajouté un nouveau modèle de véhicule (il y a 2 heures)</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'users' && (
          <div>
            <h3 className="text-lg font-semibold mb-4">Gestion des utilisateurs</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date d'inscription</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Jean Dupont</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">jean.dupont@example.com</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">01/04/2025</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button className="text-blue-600 hover:text-blue-900 mr-2">Éditer</button>
                      <button className="text-red-600 hover:text-red-900">Supprimer</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Marie Martin</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">marie.martin@example.com</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">02/04/2025</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button className="text-blue-600 hover:text-blue-900 mr-2">Éditer</button>
                      <button className="text-red-600 hover:text-red-900">Supprimer</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'vehicles' && (
          <div>
            <h3 className="text-lg font-semibold mb-4">Gestion des véhicules</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Marque</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Modèle</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Année</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Renault</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Clio</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2020</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button className="text-blue-600 hover:text-blue-900 mr-2">Éditer</button>
                      <button className="text-red-600 hover:text-red-900">Supprimer</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Peugeot</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">308</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2019</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button className="text-blue-600 hover:text-blue-900 mr-2">Éditer</button>
                      <button className="text-red-600 hover:text-red-900">Supprimer</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'estimations' && (
          <div>
            <h3 className="text-lg font-semibold mb-4">Historique des estimations</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Utilisateur</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Véhicule</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estimation</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Jean Dupont</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Renault Clio 2020</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">15 000 €</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">09/04/2025</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Marie Martin</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Peugeot 308 2019</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">12 500 €</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">08/04/2025</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
