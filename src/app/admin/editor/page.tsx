'use client';

import { useState } from 'react';
import EditorContext from '@/components/admin/editor/EditorContext';

export default function AdminEditorPage() {
  const [content, setContent] = useState('<h2>Bienvenue sur l\'éditeur de contenu</h2><p>Commencez à éditer votre contenu ici...</p>');
  const [isPreview, setIsPreview] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Éditeur de contenu</h1>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="border-b border-gray-200 px-4 py-4 sm:px-6 flex justify-between items-center">
          <div className="flex space-x-2">
            <button
              type="button"
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={() => setContent(prev => prev + '<h2>Nouveau titre</h2>')}
            >
              Ajouter un titre
            </button>
            <button
              type="button"
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={() => setContent(prev => prev + '<p>Nouveau paragraphe</p>')}
            >
              Ajouter un paragraphe
            </button>
            <button
              type="button"
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={() => setContent(prev => prev + '<img src="https://via.placeholder.com/600x400" alt="Image placeholder" />') }
            >
              Ajouter une image
            </button>
          </div>
          <div>
            <button
              type="button"
              className={`inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md ${
                isPreview ? 'text-blue-700 bg-blue-50' : 'text-gray-700 bg-white'
              } hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
              onClick={() => setIsPreview(!isPreview)}
            >
              {isPreview ? 'Éditer' : 'Aperçu'}
            </button>
          </div>
        </div>
        
        <EditorContext>
          {isPreview ? (
            <div className="p-6">
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: content }}></div>
            </div>
          ) : (
            <div className="p-6">
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full h-96 p-4 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 font-mono text-sm"
              ></textarea>
            </div>
          )}
        </EditorContext>
        
        <div className="bg-gray-50 px-4 py-3 sm:px-6 flex justify-end">
          <button
            type="button"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Publier
          </button>
        </div>
      </div>
    </div>
  );
}
