export default function CGVPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Conditions Générales de Vente</h1>
      
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <p className="text-sm text-gray-500 mb-6">Dernière mise à jour : 1er avril 2025</p>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">1. Objet</h2>
          <p className="text-gray-700 mb-4">
            Les présentes Conditions Générales de Vente régissent les relations contractuelles entre Prix de ma voiture 
            et ses clients pour l'achat de services d'estimation détaillée et de rapports d'évaluation.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">2. Services proposés</h2>
          <p className="text-gray-700 mb-4">
            Prix de ma voiture propose les services suivants :
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Estimation standard gratuite</li>
            <li>Rapport d'évaluation détaillé (service payant)</li>
            <li>Certification de valeur (service payant)</li>
            <li>Accompagnement personnalisé pour la vente (service payant)</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">3. Prix et paiement</h2>
          <p className="text-gray-700 mb-4">
            Les prix de nos services payants sont indiqués en euros TTC sur notre site.
          </p>
          <p className="text-gray-700 mb-4">
            Le paiement s'effectue en ligne par carte bancaire via notre plateforme sécurisée.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">4. Livraison des services</h2>
          <p className="text-gray-700 mb-4">
            Les rapports d'évaluation détaillés et les certifications de valeur sont délivrés par voie électronique 
            à l'adresse email fournie par le client dans un délai de 48 heures ouvrées après validation du paiement.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">5. Droit de rétractation</h2>
          <p className="text-gray-700 mb-4">
            Conformément aux dispositions légales en vigueur, vous disposez d'un délai de 14 jours à compter de la date d'achat 
            pour exercer votre droit de rétractation, sans avoir à justifier de motifs ni à payer de pénalités.
          </p>
          <p className="text-gray-700 mb-4">
            Toutefois, ce droit ne peut être exercé si le service a été pleinement exécuté avant la fin du délai de rétractation 
            et dont l'exécution a commencé après accord préalable exprès du consommateur et renoncement exprès à son droit de rétractation.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">6. Garanties et responsabilités</h2>
          <p className="text-gray-700 mb-4">
            Prix de ma voiture s'engage à fournir des services de qualité et des estimations basées sur des données fiables du marché.
          </p>
          <p className="text-gray-700 mb-4">
            Cependant, les estimations et évaluations fournies restent indicatives et ne constituent pas une garantie de prix de vente ou d'achat.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-4">7. Contact</h2>
          <p className="text-gray-700 mb-4">
            Pour toute question concernant ces Conditions Générales de Vente, veuillez nous contacter à l'adresse suivante : 
            commercial@prixdemavoiture.com
          </p>
        </section>
      </div>
    </div>
  );
}
