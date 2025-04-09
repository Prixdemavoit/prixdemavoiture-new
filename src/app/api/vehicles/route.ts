import { NextResponse } from 'next/server';

// Données fictives pour simuler une base de données
const vehicles = [
  { id: 1, brand: 'Renault', model: 'Clio', year: 2020, category: 'Citadine', price: 15000, status: 'available' },
  { id: 2, brand: 'Peugeot', model: '308', year: 2019, category: 'Compacte', price: 18000, status: 'available' },
  { id: 3, brand: 'Citroën', model: 'C3', year: 2021, category: 'Citadine', price: 16500, status: 'reserved' },
  { id: 4, brand: 'Volkswagen', model: 'Golf', year: 2018, category: 'Compacte', price: 17000, status: 'sold' },
  { id: 5, brand: 'Toyota', model: 'Yaris', year: 2022, category: 'Citadine', price: 19000, status: 'available' },
];

export async function GET(request: Request) {
  // Récupérer les paramètres de requête
  const { searchParams } = new URL(request.url);
  const brand = searchParams.get('brand');
  const category = searchParams.get('category');
  const status = searchParams.get('status');
  
  // Filtrer les véhicules en fonction des paramètres
  let filteredVehicles = [...vehicles];
  
  if (brand) {
    filteredVehicles = filteredVehicles.filter(v => 
      v.brand.toLowerCase().includes(brand.toLowerCase())
    );
  }
  
  if (category) {
    filteredVehicles = filteredVehicles.filter(v => v.category === category);
  }
  
  if (status) {
    filteredVehicles = filteredVehicles.filter(v => v.status === status);
  }
  
  // Retourner les résultats
  return NextResponse.json(filteredVehicles);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validation de base
    if (!body.brand || !body.model || !body.year || !body.price) {
      return NextResponse.json(
        { error: 'Données incomplètes' },
        { status: 400 }
      );
    }
    
    // Générer un nouvel ID
    const newId = Math.max(...vehicles.map(v => v.id)) + 1;
    
    // Créer le nouveau véhicule
    const newVehicle = {
      id: newId,
      brand: body.brand,
      model: body.model,
      year: body.year,
      category: body.category || 'Non spécifié',
      price: body.price,
      status: body.status || 'available'
    };
    
    // Ajouter à la liste (dans une application réelle, cela serait enregistré dans une base de données)
    vehicles.push(newVehicle);
    
    return NextResponse.json(newVehicle, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la création du véhicule' },
      { status: 500 }
    );
  }
}
