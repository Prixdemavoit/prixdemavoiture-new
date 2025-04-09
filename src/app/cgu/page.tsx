export default function CGUPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Conditions Générales d'Utilisation</h1>
      
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <p className="text-sm text-gray-500 mb-6">Dernière mise à jour : 1er avril 2025</p>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">1. Acceptation des conditions</h2>
          <p className="text-gray-700 mb-4">
            En accédant et en utilisant le site Prix de ma voiture, vous acceptez d'être lié par les présentes Conditions Générales d'Utilisation. 
            Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre site.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">2. Description du service</h2>
          <p className="text-gray-700 mb-4">
            Prix de ma voiture est un service en ligne qui permet aux utilisateurs d'obtenir une estimation de la valeur de leur véhicule 
            basée sur différents critères tels que la marque, le modèle, l'année, le kilométrage et l'état général.
          </p>
          <p className="text-gray-700 mb-4">
            Les estimations fournies sont indicatives et ne constituent pas une offre d'achat ou une garantie de prix de vente.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">3. Utilisation du service</h2>
          <p className="text-gray-700 mb-4">
            Vous vous engagez à fournir des informations exactes et complètes lors de l'utilisation de notre service d'estimation.
          </p>
          <p className="text-gray-700 mb-4">
            Vous ne devez pas utiliser notre service à des fins illégales ou non autorisées.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">4. Propriété intellectuelle</h2>
          <p className="text-gray-700 mb-4">
            Tout le contenu présent sur le site Prix de ma voiture, incluant mais non limité aux textes, graphiques, logos, icônes, 
            images, clips audio, téléchargements numériques et compilations de données, est la propriété de Prix de ma voiture ou 
            de ses fournisseurs de contenu et est protégé par les lois françaises et internationales sur la propriété intellectuelle.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">5. Limitation de responsabilité</h2>
          <p className="text-gray-700 mb-4">
            Prix de ma voiture s'efforce de fournir des estimations précises, mais ne peut garantir l'exactitude des résultats.
            Nous ne sommes pas responsables des décisions prises sur la base des estimations fournies par notre service.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">6. Modification des conditions</h2>
          <p className="text-gray-700 mb-4">
            Nous nous réservons le droit de modifier ces Conditions Générales d'Utilisation à tout moment. 
            Les modifications entrent en vigueur dès leur publication sur le site.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-4">7. Contact</h2>
          <p className="text-gray-700 mb-4">
            Pour toute question concernant ces Conditions Générales d'Utilisation, veuillez nous contacter à l'adresse suivante : 
            contact@prixdemavoiture.com
          </p>
        </section>
      </div>
    </div>
  );
}
