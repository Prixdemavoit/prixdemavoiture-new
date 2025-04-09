'use client';

import { ReactNode } from 'react';
// Importez ici vos providers si vous en avez (ThemeProvider, etc.)

export function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      {/* Vous pouvez envelopper children avec vos providers ici */}
      {children}
    </>
  );
}
