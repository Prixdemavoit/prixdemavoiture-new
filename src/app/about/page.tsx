export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">À propos de Prix de ma voiture</h1>
      
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Notre mission</h2>
          <p className="text-gray-700 mb-4">
            Chez Prix de ma voiture, notre mission est de fournir aux propriétaires de véhicules des estimations précises et fiables de la valeur de leur voiture.
            Nous utilisons des algorithmes avancés et des données du marché en temps réel pour vous offrir l'estimation la plus juste possible.
          </p>
          <p className="text-gray-700">
            Notre objectif est de simplifier le processus d'évaluation automobile, qu'il s'agisse de vendre votre véhicule, de l'assurer correctement ou simplement de connaître sa valeur actuelle.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Notre expertise</h2>
          <p className="text-gray-700 mb-4">
            Notre équipe est composée d'experts du marché automobile qui suivent quotidiennement les tendances et les fluctuations des prix.
            Nous analysons des milliers de transactions pour affiner constamment nos modèles d'estimation.
          </p>
          <p className="text-gray-700">
            Grâce à notre technologie, nous prenons en compte de nombreux facteurs qui influencent le prix d'un véhicule :
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-700">
            <li>Marque, modèle et version</li>
            <li>Année de mise en circulation</li>
            <li>Kilométrage</li>
            <li>État général</li>
            <li>Options et équipements</li>
            <li>Historique d'entretien</li>
            <li>Tendances actuelles du marché</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Contactez-nous</h2>
          <p className="text-gray-700 mb-4">
            Vous avez des questions sur nos services ou vous souhaitez en savoir plus sur notre méthodologie d'estimation ?
            N'hésitez pas à nous contacter via notre <a href="/contact" className="text-blue-600 hover:underline">formulaire de contact</a>.
          </p>
          <p className="text-gray-700">
            Notre équipe se fera un plaisir de vous répondre dans les plus brefs délais.
          </p>
        </section>
      </div>
    </div>
  );
}
