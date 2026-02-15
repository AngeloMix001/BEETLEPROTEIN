
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface WishlistProps {
  items: Product[];
  onRemove: (product: Product) => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

const Wishlist: React.FC<WishlistProps> = ({ items, onRemove, onAddToCart }) => {
  const formatPrice = (price: number) => {
    return price.toLocaleString('es-ES');
  };

  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-32 md:px-16 min-h-screen">
      <div className="flex flex-col gap-4 mb-12">
        <h2 className="text-4xl font-light tracking-tight text-white">Tu <span className="font-bold text-primary italic">Wishlist</span></h2>
        <div className="h-px w-24 bg-primary/40"></div>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-24 border border-primary/10 rounded-2xl bg-matte-black/50">
          <span className="material-symbols-outlined text-primary text-6xl mb-6">favorite</span>
          <p className="text-xl text-zinc-400 mb-8 font-light italic">Tu wishlist está vacía</p>
          <Link to="/" className="gold-gradient text-black px-12 py-4 rounded-lg text-sm font-black uppercase tracking-widest hover:scale-105 transition-all inline-block">
            Descubrir Productos
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-xl bg-matte-black border border-primary/10 p-6 flex flex-col gap-6 hover:border-primary transition-all shadow-xl">
              <button 
                onClick={() => onRemove(item)}
                className="absolute top-4 right-4 z-20 text-white/40 hover:text-red-500 transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>

              <Link to={`/product/${item.id}`} className="block aspect-square rounded-lg bg-zinc-900 border border-white/5 overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110" />
              </Link>

              <div className="flex flex-col gap-2">
                <Link to={`/product/${item.id}`}>
                  <h3 className="text-xl font-bold text-primary hover:underline italic">{item.name}</h3>
                </Link>
                <p className="text-xs text-white/50 uppercase tracking-widest font-bold">{item.flavorProfile}</p>
                <p className="text-lg font-bold text-white">${formatPrice(item.price)}</p>
              </div>

              <button 
                onClick={() => onAddToCart(item, 1)}
                className="w-full h-12 gold-gradient text-black font-extrabold uppercase tracking-widest rounded text-xs flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all"
              >
                <span className="material-symbols-outlined text-base">shopping_cart</span>
                Mover al Carrito
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default Wishlist;
