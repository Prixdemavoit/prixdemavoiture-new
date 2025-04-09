'use client';

import { createContext, useContext, ReactNode } from 'react';

type EditorContextType = {
  // Vous pouvez ajouter des fonctionnalités d'édition ici
};

const EditorContext = createContext<EditorContextType | undefined>(undefined);

export function useEditor() {
  const context = useContext(EditorContext);
  if (context === undefined) {
    throw new Error('useEditor must be used within an EditorProvider');
  }
  return context;
}

export default function EditorProvider({ children }: { children: ReactNode }) {
  // Vous pouvez ajouter la logique de l'éditeur ici
  
  return (
    <div className="editor-container">
      {children}
    </div>
  );
}
