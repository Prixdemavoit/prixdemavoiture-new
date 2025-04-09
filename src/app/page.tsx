export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-6">Prix de ma voiture</h1>
        <p className="text-xl mb-4">Bienvenue sur notre application d'estimation de prix de véhicules</p>
        <div className="mt-8 p-6 border rounded-lg bg-gray-50">
          <p>Notre service vous permet d'obtenir une estimation précise de la valeur de votre véhicule basée sur :</p>
          <ul className="list-disc pl-6 mt-2">
            <li>La marque et le modèle</li>
            <li>L'année de mise en circulation</li>
            <li>Le kilométrage</li>
            <li>L'état général</li>
            <li>Les options et équipements</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
