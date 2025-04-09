import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Prix de ma voiture',
  description: 'Estimez le prix de votre véhicule en quelques clics',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
