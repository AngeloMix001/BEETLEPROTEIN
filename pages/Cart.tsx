
import React from 'react';
import { Link } from 'react-router-dom';
import { CartItem } from '../types';

interface CartProps {
  items: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, delta: number) => void;
}

const Cart: React.FC<CartProps> = ({ items, onRemove, onUpdateQuantity }) => {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = items.length > 0 ? 5.00 : 0;
  const total = subtotal + shipping;

  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-32 md:px-16 min-h-screen">
      <div className="flex flex-col gap-4 mb-12">
        <h2 className="text-4xl font-black tracking-tighter text-white italic uppercase">Tu <span className="text-primary">Orden</span></h2>
        <div className="h-px w-24 bg-primary/40"></div>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-24 border border-primary/10 rounded-3xl bg-matte-black/50 flex flex-col items-center">
          <svg className="w-24 h-24 text-primary/30 mb-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
          <p className="text-xl text-zinc-400 mb-8 font-light italic uppercase tracking-widest">El carrito está vacío</p>
          <Link to="/" className="gold-gradient text-black px-12 py-4 rounded-lg text-sm font-black uppercase tracking-widest hover:scale-105 transition-all inline-block">
            Ver Productos
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Products List */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {items.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row items-center gap-6 pb-8 border-b border-primary/10 group">
                <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-2xl bg-matte-black border border-primary/20">
                  <img src={item.image} alt={item.name} className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="flex flex-1 flex-col justify-between self-stretch text-center sm:text-left py-2">
                  <div>
                    <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter">{item.name}</h3>
                    <p className="text-xs text-primary/60 font-bold uppercase tracking-widest mt-1">{item.tagline}</p>
                  </div>
                  <div className="mt-4 flex items-center justify-center sm:justify-start gap-4">
                    <button 
                      onClick={() => onRemove(item.id)}
                      className="text-[10px] uppercase tracking-widest text-red-500/50 hover:text-red-500 flex items-center gap-1 transition-colors font-black">
                      <span className="material-symbols-outlined text-sm">close</span> Remover
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-center sm:items-end gap-4 shrink-0">
                  <div className="flex items-center rounded-lg bg-zinc-900 p-1 border border-primary/10">
                    <button 
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      className="flex h-8 w-8 items-center justify-center text-primary/60 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-lg">remove</span>
                    </button>
                    <span className="w-10 text-center text-sm font-bold text-white">{item.quantity}</span>
                    <button 
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      className="flex h-8 w-8 items-center justify-center text-primary/60 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-lg">add</span>
                    </button>
                  </div>
                  <p className="text-2xl font-black text-primary tracking-tighter italic">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-4">
            <div className="sticky top-28 rounded-2xl bg-matte-black p-8 border border-primary/20 shadow-2xl">
              <h3 className="text-xl font-black text-white mb-6 tracking-tight uppercase italic">Total Factura</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                  <span className="text-white/40">Subtotal</span>
                  <span className="text-white">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                  <span className="text-white/40">Envío Express</span>
                  <span className="text-white">${shipping.toFixed(2)}</span>
                </div>
                <div className="pt-4 border-t border-primary/10">
                  <div className="flex justify-between items-end">
                    <span className="text-lg font-black text-white uppercase italic">Total</span>
                    <span className="text-4xl font-black text-primary tracking-tighter italic">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <button className="gold-gradient w-full rounded-lg py-5 px-6 text-sm font-black uppercase tracking-[0.2em] text-black shadow-lg shadow-primary/20 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                Checkout Seguro
                <span className="material-symbols-outlined text-lg">verified</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Cart;
