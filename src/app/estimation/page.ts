import EstimationForm from '@/components/estimation/EstimationForm';

export default function EstimationPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Estimation de votre véhicule</h1>
      <p className="text-center mb-8 max-w-2xl mx-auto">
        Remplissez le formulaire ci-dessous pour obtenir une estimation précise de la valeur de votre véhicule basée sur ses caractéristiques.
      </p>
      <EstimationForm />
    </div>
  );
}
