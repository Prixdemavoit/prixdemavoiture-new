import { NextResponse } from 'next/server';

// Données fictives pour simuler une base de données
const offers = [
  { 
    id: 1, 
    title: 'Offre spéciale été', 
    vehicleId: 1, 
    vehicleName: 'Renault Clio 2020', 
    price: 15000, 
    discountPrice: 13500, 
    startDate: '2025-06-01', 
    endDate: '2025-08-31', 
    status: 'upcoming',
    description: 'Profitez de cette offre exceptionnelle sur ce véhicule en parfait état.',
    featured: true
  },
  { 
    id: 2, 
    title: 'Déstockage', 
    vehicleId: 2, 
    vehicleName: 'Peugeot 308 2019', 
    price: 18000, 
    discountPrice: 16200, 
    startDate: '2025-04-01', 
    endDate: '2025-05-15', 
    status: 'active',
    description: 'Dernières unités disponibles à prix réduit.',
    featured: false
  },
  { 
    id: 3, 
    title: 'Black Friday', 
    vehicleId: 3, 
    vehicleName: 'Citroën C3 2021', 
    price: 16500, 
    discountPrice: 14500, 
    startDate: '2024-11-25', 
    endDate: '2024-12-01', 
    status: 'expired',
    description: 'Offre exceptionnelle pour le Black Friday.',
    featured: true
  },
];

export async function GET(request: Request) {
  // Récupérer les paramètres de requête
  const { searchParams } = new URL(request.url);
  const status = searchParams.get('status');
  const featured = searchParams.get('featured');
  
  // Filtrer les offres en fonction des paramètres
  let filteredOffers = [...offers];
  
  if (status) {
    filteredOffers = filteredOffers.filter(o => o.status === status);
  }
  
  if (featured === 'true') {
    filteredOffers = filteredOffers.filter(o => o.featured);
  }
  
  // Retourner les résultats
  return NextResponse.json(filteredOffers);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validation de base
    if (!body.title || !body.vehicleId || !body.startDate || !body.endDate) {
      return NextResponse.json(
        { error: 'Données incomplètes' },
        { status: 400 }
      );
    }
    
    // Générer un nouvel ID
    const newId = Math.max(...offers.map(o => o.id)) + 1;
    
    // Déterminer le statut en fonction des dates
    const now = new Date();
    const startDate = new Date(body.startDate);
    const endDate = new Date(body.endDate);
    
    let status = 'upcoming';
    if (now >= startDate && now <= endDate) {
      status = 'active';
    } else if (now > endDate) {
      status = 'expired';
    }
    
    // Créer la nouvelle offre
    const newOffer = {
      id: newId,
      title: body.title,
      vehicleId: body.vehicleId,
      vehicleName: body.vehicleName,
      price: body.price,
      discountPrice: body.discountPrice,
      startDate: body.startDate,
      endDate: body.endDate,
      status,
      description: body.description || '',
      featured: body.featured || false
    };
    
    // Ajouter à la liste (dans une application réelle, cela serait enregistré dans une base de données)
    offers.push(newOffer);
    
    return NextResponse.json(newOffer, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la création de l\'offre' },
      { status: 500 }
    );
  }
}

