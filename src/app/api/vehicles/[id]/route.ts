import { NextResponse } from 'next/server';

// Données fictives pour simuler une base de données
const vehicles = [
  { 
    id: 1, 
    brand: 'Renault', 
    model: 'Clio', 
    year: 2020, 
    category: 'Citadine', 
    price: 15000, 
    status: 'available',
    description: 'Voiture en excellent état, faible kilométrage, entretien régulier.',
    features: ['Climatisation', 'GPS', 'Bluetooth', 'Caméra de recul'],
    images: ['/images/vehicle1.jpg', '/images/vehicle2.jpg']
  },
  // ... autres véhicules
];

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  
  // Rechercher le véhicule par ID
  const vehicle = vehicles.find(v => v.id === id);
  
  if (!vehicle) {
    return NextResponse.json(
      { error: 'Véhicule non trouvé' },
      { status: 404 }
    );
  }
  
  return NextResponse.json(vehicle);
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id);
    const body = await request.json();
    
    // Rechercher l'index du véhicule
    const index = vehicles.findIndex(v => v.id === id);
    
    if (index === -1) {
      return NextResponse.json(
        { error: 'Véhicule non trouvé' },
        { status: 404 }
      );
    }
    
    // Mettre à jour le véhicule
    const updatedVehicle = {
      ...vehicles[index],
      ...body,
      id // Conserver l'ID d'origine
    };
    
    // Remplacer dans la liste (dans une application réelle, cela serait mis à jour dans une base de données)
    vehicles[index] = updatedVehicle;
    
    return NextResponse.json(updatedVehicle);
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la mise à jour du véhicule' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  
  // Rechercher l'index du véhicule
  const index = vehicles.findIndex(v => v.id === id);
  
  if (index === -1) {
    return NextResponse.json(
      { error: 'Véhicule non trouvé' },
      { status: 404 }
    );
  }
  
  // Supprimer de la liste (dans une application réelle, cela serait supprimé de la base de données)
  vehicles.splice(index, 1);
  
  return NextResponse.json({ success: true });
}
