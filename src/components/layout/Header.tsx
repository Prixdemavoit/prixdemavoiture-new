"use client";

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600';
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                prixdemavoiture.fr
              </Link>
            </div>
            <nav className="hidden md:ml-6 md:flex md:space-x-8">
              <Link href="/" className={`inline-flex items-center px-1 pt-1 border-b-2 ${pathname === '/' ? 'border-blue-500' : 'border-transparent'} ${isActive('/')}`}>
                Accueil
              </Link>
              <Link href="/estimation" className={`inline-flex items-center px-1 pt-1 border-b-2 ${pathname === '/estimation' ? 'border-blue-500' : 'border-transparent'} ${isActive('/estimation')}`}>
                Estimation
              </Link>
              <Link href="/annonces" className={`inline-flex items-center px-1 pt-1 border-b-2 ${pathname === '/annonces' ? 'border-blue-500' : 'border-transparent'} ${isActive('/annonces')}`}>
                Annonces
              </Link>
              <Link href="/deposer-annonce" className={`inline-flex items-center px-1 pt-1 border-b-2 ${pathname === '/deposer-annonce' ? 'border-blue-500' : 'border-transparent'} ${isActive('/deposer-annonce')}`}>
                Déposer une annonce
              </Link>
              <Link href="/pro" className={`inline-flex items-center px-1 pt-1 border-b-2 ${pathname === '/pro' ? 'border-blue-500' : 'border-transparent'} ${isActive('/pro')}`}>
                Espace Pro
              </Link>
            </nav>
          </div>
          <div className="hidden md:ml-6 md:flex md:items-center">
            <Link href="/auth/login" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600">
              Connexion
            </Link>
            <Link href="/auth/register" className="ml-4 px-3 py-2 rounded-md text-sm font-medium bg-blue-600 text-white hover:bg-blue-700">
              Inscription
            </Link>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Ouvrir le menu</span>
              <svg
                className={`${mobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${mobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link href="/" className={`block pl-3 pr-4 py-2 border-l-4 ${pathname === '/' ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'}`}>
            Accueil
          </Link>
          <Link href="/estimation" className={`block pl-3 pr-4 py-2 border-l-4 ${pathname === '/estimation' ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'}`}>
            Estimation
          </Link>
          <Link href="/annonces" className={`block pl-3 pr-4 py-2 border-l-4 ${pathname === '/annonces' ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'}`}>
            Annonces
          </Link>
          <Link href="/deposer-annonce" className={`block pl-3 pr-4 py-2 border-l-4 ${pathname === '/deposer-annonce' ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'}`}>
            Déposer une annonce
          </Link>
          <Link href="/pro" className={`block pl-3 pr-4 py-2 border-l-4 ${pathname === '/pro' ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'}`}>
            Espace Pro
          </Link>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="flex items-center px-4">
            <div className="flex-shrink-0">
              <Link href="/auth/login" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100">
                Connexion
              </Link>
            </div>
            <div className="ml-3">
              <Link href="/auth/register" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
                Inscription
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  ) ;
};

export default Header;
