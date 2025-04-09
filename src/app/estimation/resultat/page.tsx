export default function ResultatEstimationPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Résultat de l'estimation</h1>
      
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="text-center mb-6">
          <span className="text-5xl font-bold text-blue-600">15 000 €</span>
          <p className="text-gray-500 mt-2">Estimation approximative</p>
        </div>
        
        <div className="border-t border-gray-200 pt-4 mt-4">
          <h3 className="text-lg font-semibold mb-3">Détails de l'estimation</h3>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span className="text-gray-600">Marque et modèle</span>
              <span className="font-medium">Renault Clio</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-600">Année</span>
              <span className="font-medium">2018</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-600">Kilométrage</span>
              <span className="font-medium">75 000 km</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-600">État général</span>
              <span className="font-medium">Bon</span>
            </li>
          </ul>
        </div>
        
        <div className="mt-6 space-y-4">
          <button className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Obtenir une estimation détaillée
          </button>
          <button className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Nouvelle estimation
          </button>
        </div>
      </div>
    </div>
  );
}
