
export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  description: string;
  image: string;
  flavorProfile: string;
  texture: string;
  nutrition: {
    protein: string;
    sugar: string;
    sustainable: string;
    glutenFree: boolean;
  };
  accentColor?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Review {
  name: string;
  role: string;
  text: string;
  rating: number;
  icon: string;
}
