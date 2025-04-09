import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">prixdemavoiture.fr</h3>
            <p className="text-gray-300 text-sm">
              La plateforme de confiance pour l'estimation et la vente de votre véhicule.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white text-sm">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/estimation" className="text-gray-300 hover:text-white text-sm">
                  Estimer ma voiture
                </Link>
              </li>
              <li>
                <Link href="/deposer-annonce" className="text-gray-300 hover:text-white text-sm">
                  Déposer une annonce
                </Link>
              </li>
              <li>
                <Link href="/annonces" className="text-gray-300 hover:text-white text-sm">
                  Voir les annonces
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Informations</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white text-sm">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Légal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/mentions-legales" className="text-gray-300 hover:text-white text-sm">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/politique-confidentialite" className="text-gray-300 hover:text-white text-sm">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href="/cgv" className="text-gray-300 hover:text-white text-sm">
                  CGV
                </Link>
              </li>
              <li>
                <Link href="/cgu" className="text-gray-300 hover:text-white text-sm">
                  CGU
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} prixdemavoiture.fr - Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
}
