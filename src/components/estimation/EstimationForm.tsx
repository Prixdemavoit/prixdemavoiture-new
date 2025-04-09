'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function EstimationForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    marque: '',
    modele: '',
    annee: '',
    kilometrage: '',
    etat: 'bon',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous pourriez envoyer les données à une API
    console.log('Données du formulaire:', formData);
    
    // Redirection vers la page de résultat
    router.push('/estimation/resultat');
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Estimez le prix de votre véhicule</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="marque" className="block text-sm font-medium text-gray-700">Marque</label>
          <input
            type="text"
            id="marque"
            name="marque"
            value={formData.marque}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div>
          <label htmlFor="modele" className="block text-sm font-medium text-gray-700">Modèle</label>
          <input
            type="text"
            id="modele"
            name="modele"
            value={formData.modele}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div>
          <label htmlFor="annee" className="block text-sm font-medium text-gray-700">Année</label>
          <input
            type="number"
            id="annee"
            name="annee"
            value={formData.annee}
            onChange={handleChange}
            required
            min="1900"
            max={new Date().getFullYear()}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div>
          <label htmlFor="kilometrage" className="block text-sm font-medium text-gray-700">Kilométrage</label>
          <input
            type="number"
            id="kilometrage"
            name="kilometrage"
            value={formData.kilometrage}
            onChange={handleChange}
            required
            min="0"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div>
          <label htmlFor="etat" className="block text-sm font-medium text-gray-700">État général</label>
          <select
            id="etat"
            name="etat"
            value={formData.etat}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="excellent">Excellent</option>
            <option value="bon">Bon</option>
            <option value="moyen">Moyen</option>
            <option value="mauvais">Mauvais</option>
          </select>
        </div>
        
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Estimer mon véhicule
        </button>
      </form>
    </div>
  );
}
