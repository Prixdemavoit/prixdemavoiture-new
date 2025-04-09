import ContactForm from '@/components/forms/ContactForm';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Contactez-nous</h1>
      
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Formulaire de contact</h2>
            <ContactForm />
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Nos coordonnées</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-800">Adresse</h3>
                <p className="text-gray-600">
                  123 Avenue des Champs-Élysées<br />
                  75008 Paris, France
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-800">Téléphone</h3>
                <p className="text-gray-600">+33 1 23 45 67 89</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-800">Email</h3>
                <p className="text-gray-600">contact@prixdemavoiture.com</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-800">Horaires d'ouverture</h3>
                <p className="text-gray-600">
                  Lundi - Vendredi : 9h00 - 18h00<br />
                  Samedi : 10h00 - 16h00<br />
                  Dimanche : Fermé
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
