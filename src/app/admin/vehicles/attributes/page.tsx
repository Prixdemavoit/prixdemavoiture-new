'use client';

import { useState } from 'react';

type Attribute = {
  id: number;
  name: string;
  type: 'text' | 'number' | 'boolean' | 'select';
  options?: string[];
  required: boolean;
};

const mockAttributes: Attribute[] = [
  { id: 1, name: 'Kilométrage', type: 'number', required: true },
  { id: 2, name: 'Couleur', type: 'text', required: true },
  { id: 3, name: 'Carburant', type: 'select', options: ['Essence', 'Diesel', 'Électrique', 'Hybride'], required: true },
  { id: 4, name: 'Boîte de vitesse', type: 'select', options: ['Manuelle', 'Automatique'], required: true },
  { id: 5, name: 'Climatisation', type: 'boolean', required: false },
];

export default function VehicleAttributesPage() {
  const [attributes, setAttributes] = useState<Attribute[]>(mockAttributes);
  const [editingAttribute, setEditingAttribute] = useState<Attribute | null>(null);
  const [newAttribute, setNewAttribute] = useState<Omit<Attribute, 'id'>>({
    name: '',
    type: 'text',
    required: false,
    options: []
  });
  const [newOption, setNewOption] = useState('');

  const handleEditAttribute = (attribute: Attribute) => {
    setEditingAttribute(attribute);
  };

  const handleUpdateAttribute = () => {
    if (!editingAttribute) return;
    
    setAttributes(attributes.map(attr => 
      attr.id === editingAttribute.id ? editingAttribute : attr
    ));
    setEditingAttribute(null);
  };

  const handleDeleteAttribute = (attributeId: number) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet attribut ?')) {
      setAttributes(attributes.filter(attr => attr.id !== attributeId));
    }
  };

  const handleAddAttribute = () => {
    if (!newAttribute.name) {
      alert('Le nom de l\'attribut est requis');
      return;
    }
    
    const newAttributeWithId: Attribute = {
      id: Math.max(...attributes.map(a => a.id), 0) + 1,
      ...newAttribute
    };
    
    setAttributes([...attributes, newAttributeWithId]);
    setNewAttribute({
      name: '',
      type: 'text',
      required: false,
      options: []
    });
  };

  const handleAddOption = (isEditing: boolean) => {
    if (!newOption.trim()) return;
    
    if (isEditing && editingAttribute) {
      const updatedOptions = [...(editingAttribute.options || []), newOption.trim()];
      setEditingAttribute({
        ...editingAttribute,
        options: updatedOptions
      });
    } else {
      const updatedOptions = [...(newAttribute.options || []), newOption.trim()];
      setNewAttribute({
        ...newAttribute,
        options: updatedOptions
      });
    }
    setNewOption('');
  };

  const handleRemoveOption = (option: string, isEditing: boolean) => {
    if (isEditing && editingAttribute) {
      const updatedOptions = editingAttribute.options?.filter(o => o !== option);
      setEditingAttribute({
        ...editingAttribute,
        options: updatedOptions
      });
    } else {
      const updatedOptions = newAttribute.options?.filter(o => o !== option);
      setNewAttribute({
        ...newAttribute,
        options: updatedOptions
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Attributs des véhicules</h1>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Attributs existants</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nom
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Options
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Requis
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {attributes.map((attribute) => (
                <tr key={attribute.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {editingAttribute?.id === attribute.id ? (
                      <input
                        type="text"
                        value={editingAttribute.name}
                        onChange={(e) => setEditingAttribute({...editingAttribute, name: e.target.value})}
                        className="border border-gray-300 rounded-md shadow-sm py-1 px-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    ) : (
                      <div className="text-sm font-medium text-gray-900">{attribute.name}</div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {editingAttribute?.id === attribute.id ? (
                      <select
                        value={editingAttribute.type}
                        onChange={(e) => setEditingAttribute({
                          ...editingAttribute, 
                          type: e.target.value as 'text' | 'number' | 'boolean' | 'select'
                        })}
                        className="border border-gray-300 rounded-md shadow-sm py-1 px-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      >
                        <option value="text">Texte</option>
                        <option value="number">Nombre</option>
                        <option value="boolean">Booléen</option>
                        <option value="select">Sélection</option>
                      </select>
                    ) : (
                      <div className="text-sm text-gray-500">
                        {attribute.type === 'text' && 'Texte'}
                        {attribute.type === 'number' && 'Nombre'}
                        {attribute.type === 'boolean' && 'Booléen'}
                        {attribute.type === 'select' && 'Sélection'}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {editingAttribute?.id === attribute.id && editingAttribute.type === 'select' ? (
                      <div>
                        <div className="flex space-x-2 mb-2">
                          <input
                            type="text"
                            value={newOption}
                            onChange={(e) => setNewOption(e.target.value)}
                            placeholder="Nouvelle option"
                            className="border border-gray-300 rounded-md shadow-sm py-1 px-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          />
                          <button
                            type="button"
                            onClick={() => handleAddOption(true)}
                            className="inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                          >
                            +
                          </button>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {editingAttribute.options?.map((option, index) => (
                            <div key={index} className="inline-flex items-center bg-blue-100 rounded-full px-2 py-1">
                              <span className="text-xs text-blue-800">{option}</span>
                              <button
                                type="button"
                                onClick={() => handleRemoveOption(option, true)}
                                className="ml-1 text-blue-500 hover:text-blue-700 text-xs"
                              >
                                &times;
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="text-sm text-gray-500">
                        {attribute.type === 'select' ? (
                          <div className="flex flex-wrap gap-1">
                            {attribute.options?.map((option, index) => (
                              <span key={index} className="inline-block bg-gray-100 rounded-full px-2 py-1 text-xs">
                                {option}
                              </span>
                            ))}
                          </div>
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {editingAttribute?.id === attribute.id ? (
                      <input
                        type="checkbox"
                        checked={editingAttribute.required}
                        onChange={(e) => setEditingAttribute({...editingAttribute, required: e.target.checked})}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                    ) : (
                      <div className="text-sm text-gray-500">
                        {attribute.required ? 'Oui' : 'Non'}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    {editingAttribute?.id === attribute.id ? (
                      <button
                        onClick={handleUpdateAttribute}
                        className="text-green-600 hover:text-green-900 mr-4"
                      >
                        Enregistrer
                      </button>
                    ) : (
                      <button
                        onClick={() => handleEditAttribute(attribute)}
                        className="text-blue-600 hover:text-blue-900 mr-4"
                      >
                        Éditer
                      </button>
                    )}
                    <button
                      onClick={() => handleDeleteAttribute(attribute.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Ajouter un nouvel attribut</h2>
        </div>
        
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nom de l'attribut
              </label>
              <input
                type="text"
                id="name"
                value={newAttribute.name}
                onChange={(e) => setNewAttribute({...newAttribute, name: e.target.value})}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                Type
              </label>
              <select
                id="type"
                value={newAttribute.type}
                onChange={(e) => setNewAttribute({
                  ...newAttribute, 
                  type: e.target.value as 'text' | 'number' | 'boolean' | 'select'
                })}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              >
                <option value="text">Texte</option>
                <option value="number">Nombre</option>
                <option value="boolean">Booléen</option>
                <option value="select">Sélection</option>
              </select>
            </div>
          </div>
          
          {newAttribute.type === 'select' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Options
              </label>
              <div className="flex space-x-2 mb-2">
                <input
                  type="text"
                  value={newOption}
                  onChange={(e) => setNewOption(e.target.value)}
                  placeholder="Ajouter une option"
                  className="flex-1 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                <button
                  type="button"
                  onClick={() => handleAddOption(false)}
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Ajouter
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {newAttribute.options?.map((option, index) => (
                  <div key={index} className="inline-flex items-center bg-blue-100 rounded-full px-3 py-1">
                    <span className="text-sm text-blue-800">{option}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveOption(option, false)}
                      className="ml-1 text-blue-500 hover:text-blue-700"
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="required"
                name="required"
                type="checkbox"
                checked={newAttribute.required}
                onChange={(e) => setNewAttribute({...newAttribute, required: e.target.checked})}
                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="required" className="font-medium text-gray-700">
                Attribut requis
              </label>
              <p className="text-gray-500">Cochez cette case si cet attribut doit être obligatoirement renseigné.</p>
            </div>
          </div>
          
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleAddAttribute}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Ajouter l'attribut
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
