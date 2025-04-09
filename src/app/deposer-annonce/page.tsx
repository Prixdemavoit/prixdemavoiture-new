import AnnonceForm from '@/components/annonces/AnnonceForm';

export default function DeposerAnnoncePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Déposer une annonce</h1>
      <p className="text-gray-600 mb-8">Vendez votre véhicule rapidement et au meilleur prix grâce à notre plateforme optimisée.</p>
      
      <AnnonceForm />
    </div>
  );
}
