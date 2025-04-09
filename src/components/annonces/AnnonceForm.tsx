'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AnnonceForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    marque: '',
    modele: '',
    version: '',
    annee: '',
    carburant: '',
    boite: '',
    kilometrage: '',
    puissance: '',
    couleur: '',
    portes: '',
    prix: '',
    description: '',
    equipements: [] as string[],
    photos: [] as string[],
    nom: '',
    email: '',
    telephone: '',
    ville: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    if (checked) {
      setFormData(prev => ({ ...prev, equipements: [...prev.equipements, name] }));
    } else {
      setFormData(prev => ({ ...prev, equipements: prev.equipements.filter(item => item !== name) }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 4) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    } else {
      // Simuler l'envoi des données
      console.log('Données soumises:', formData);
      // Rediriger vers une page de confirmation
      router.push('/deposer-annonce/confirmation');
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo(0, 0);
    }
  };

  const renderStepIndicator = () => {
    return (
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>1</div>
            <div className={`h-1 w-12 ${step >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
          </div>
          <div className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>2</div>
            <div className={`h-1 w-12 ${step >= 3 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
          </div>
          <div className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>3</div>
            <div className={`h-1 w-12 ${step >= 4 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
          </div>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 4 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>4</div>
        </div>
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <span>Informations du véhicule</span>
          <span>Photos et description</span>
          <span>Équipements</span>
          <span>Contact</span>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold mb-2">Étape {step} sur 4</h2>
      {renderStepIndicator()}

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div>
            <h3 className="text-lg font-medium mb-4">Informations du véhicule</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="marque" className="block text-sm font-medium text-gray-700 mb-1">
                  Marque <span className="text-red-500">*</span>
                </label>
                <select
                  id="marque"
                  name="marque"
                  value={formData.marque}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Sélectionnez</option>
                  <option value="Renault">Renault</option>
                  <option value="Peugeot">Peugeot</option>
                  <option value="Citroën">Citroën</option>
                  <option value="Volkswagen">Volkswagen</option>
                  <option value="BMW">BMW</option>
                  <option value="Audi">Audi</option>
                  <option value="Mercedes">Mercedes</option>
                  <option value="Toyota">Toyota</option>
                </select>
              </div>
              <div>
                <label htmlFor="modele" className="block text-sm font-medium text-gray-700 mb-1">
                  Modèle <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="modele"
                  name="modele"
                  value={formData.modele}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="version" className="block text-sm font-medium text-gray-700 mb-1">
                  Version
                </label>
                <input
                  type="text"
                  id="version"
                  name="version"
                  value={formData.version}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="annee" className="block text-sm font-medium text-gray-700 mb-1">
                  Année <span className="text-red-500">*</span>
                </label>
                <select
                  id="annee"
                  name="annee"
                  value={formData.annee}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Sélectionnez</option>
                  {Array.from({ length: 20 }, (_, i) => 2025 - i).map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="carburant" className="block text-sm font-medium text-gray-700 mb-1">
                  Carburant <span className="text-red-500">*</span>
                </label>
                <select
                  id="carburant"
                  name="carburant"
                  value={formData.carburant}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Sélectionnez</option>
                  <option value="Essence">Essence</option>
                  <option value="Diesel">Diesel</option>
                  <option value="Hybride">Hybride</option>
                  <option value="Électrique">Électrique</option>
                  <option value="GPL">GPL</option>
                </select>
              </div>
              <div>
                <label htmlFor="boite" className="block text-sm font-medium text-gray-700 mb-1">
                  Boîte de vitesse
                </label>
                <select
                  id="boite"
                  name="boite"
                  value={formData.boite}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Sélectionnez</option>
                  <option value="Manuelle">Manuelle</option>
                  <option value="Automatique">Automatique</option>
                  <option value="Semi-automatique">Semi-automatique</option>
                </select>
              </div>
              <div>
                <label htmlFor="kilometrage" className="block text-sm font-medium text-gray-700 mb-1">
                  Kilométrage <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="kilometrage"
                  name="kilometrage"
                  placeholder="Ex: 75000"
                  value={formData.kilometrage}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="puissance" className="block text-sm font-medium text-gray-700 mb-1">
                  Puissance fiscale
                </label>
                <input
                  type="text"
                  id="puissance"
                  name="puissance"
                  placeholder="Ex: 6"
                  value={formData.puissance}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="couleur" className="block text-sm font-medium text-gray-700 mb-1">
                  Couleur
                </label>
                <input
                  type="text"
                  id="couleur"
                  name="couleur"
                  placeholder="Ex: Gris métallisé"
                  value={formData.couleur}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="portes" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre de portes
                </label>
                <select
                  id="portes"
                  name="portes"
                  value={formData.portes}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Sélectionnez</option>
                  <option value="3">3</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div>
                <label htmlFor="prix" className="block text-sm font-medium text-gray-700 mb-1">
                  Prix de vente (€) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="prix"
                  name="prix"
                  placeholder="Ex: 12500"
                  value={formData.prix}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h3 className="text-lg font-medium mb-4">Photos et description</h3>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Photos du véhicule <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map(index => (
                  <div key={index} className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center h-32">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-xs text-gray-500">Photo {index}</span>
                  </div>
                ) )}
              </div>
              <p className="text-sm text-gray-500">Ajoutez jusqu'à 8 photos de votre véhicule. La première photo sera utilisée comme image principale.</p>
            </div>
            <div className="mb-6">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                rows={6}
                value={formData.description}
                onChange={handleChange}
                required
                placeholder="Décrivez votre véhicule, son état, son historique, etc."
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
              <p className="text-sm text-gray-500 mt-1">Minimum 100 caractères. Notre IA optimisera automatiquement votre description pour attirer plus d'acheteurs.</p>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h3 className="text-lg font-medium mb-4">Équipements</h3>
            <p className="text-sm text-gray-600 mb-4">Sélectionnez les équipements présents sur votre véhicule :</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              <div className="flex items-start">
                <input
                  id="climatisation"
                  name="Climatisation"
                  type="checkbox"
                  checked={formData.equipements.includes('Climatisation')}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
                />
                <label htmlFor="climatisation" className="ml-2 block text-sm text-gray-700">Climatisation</label>
              </div>
              <div className="flex items-start">
                <input
                  id="gps"
                  name="GPS"
                  type="checkbox"
                  checked={formData.equipements.includes('GPS')}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
                />
                <label htmlFor="gps" className="ml-2 block text-sm text-gray-700">GPS</label>
              </div>
              <div className="flex items-start">
                <input
                  id="bluetooth"
                  name="Bluetooth"
                  type="checkbox"
                  checked={formData.equipements.includes('Bluetooth')}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
                />
                <label htmlFor="bluetooth" className="ml-2 block text-sm text-gray-700">Bluetooth</label>
              </div>
              <div className="flex items-start">
                <input
                  id="regulateur"
                  name="Régulateur de vitesse"
                  type="checkbox"
                  checked={formData.equipements.includes('Régulateur de vitesse')}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
                />
                <label htmlFor="regulateur" className="ml-2 block text-sm text-gray-700">Régulateur de vitesse</label>
              </div>
              <div className="flex items-start">
                <input
                  id="sieges_chauffants"
                  name="Sièges chauffants"
                  type="checkbox"
                  checked={formData.equipements.includes('Sièges chauffants')}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
                />
                <label htmlFor="sieges_chauffants" className="ml-2 block text-sm text-gray-700">Sièges chauffants</label>
              </div>
              <div className="flex items-start">
                <input
                  id="toit_ouvrant"
                  name="Toit ouvrant"
                  type="checkbox"
                  checked={formData.equipements.includes('Toit ouvrant')}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
                />
                <label htmlFor="toit_ouvrant" className="ml-2 block text-sm text-gray-700">Toit ouvrant</label>
              </div>
              <div className="flex items-start">
                <input
                  id="camera_recul"
                  name="Caméra de recul"
                  type="checkbox"
                  checked={formData.equipements.includes('Caméra de recul')}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
                />
                <label htmlFor="camera_recul" className="ml-2 block text-sm text-gray-700">Caméra de recul</label>
              </div>
              <div className="flex items-start">
                <input
                  id="aide_stationnement"
                  name="Aide au stationnement"
                  type="checkbox"
                  checked={formData.equipements.includes('Aide au stationnement')}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
                />
                <label htmlFor="aide_stationnement" className="ml-2 block text-sm text-gray-700">Aide au stationnement</label>
              </div>
              <div className="flex items-start">
                <input
                  id="jantes_alu"
                  name="Jantes aluminium"
                  type="checkbox"
                  checked={formData.equipements.includes('Jantes aluminium')}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
                />
                <label htmlFor="jantes_alu" className="ml-2 block text-sm text-gray-700">Jantes aluminium</label>
              </div>
              <div className="flex items-start">
                <input
                  id="vitres_electriques"
                  name="Vitres électriques"
                  type="checkbox"
                  checked={formData.equipements.includes('Vitres électriques')}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
                />
                <label htmlFor="vitres_electriques" className="ml-2 block text-sm text-gray-700">Vitres électriques</label>
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <h3 className="text-lg font-medium mb-4">Informations de contact</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">
                  Nom <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-1">
                  Téléphone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="ville" className="block text-sm font-medium text-gray-700 mb-1">
                  Ville <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="ville"
                  name="ville"
                  value={formData.ville}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div className="mt-6">
              <div className="flex items-start">
                <input
                  id="conditions"
                  name="conditions"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
                />
                <label htmlFor="conditions" className="ml-2 block text-sm text-gray-700">
                  J'accepte les <a href="/cgu" className="text-blue-600 hover:underline">conditions générales d'utilisation</a> et la <a href="/politique-confidentialite" className="text-blue-600 hover:underline">politique de confidentialité</a>.
                </label>
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 flex justify-between">
          {step > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              className="bg-gray-200 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Retour
            </button>
          ) : (
            <div></div>
          )}
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {step < 4 ? 'Continuer' : 'Publier l\'annonce'}
          </button>
        </div>
      </form>
    </div>
  );
}
