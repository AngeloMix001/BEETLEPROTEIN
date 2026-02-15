
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface ProductDetailProps {
  onAddToCart: (product: Product, quantity: number) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ onAddToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState<Product | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const foundProduct = PRODUCTS.find(p => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      window.scrollTo(0, 0);
    } else {
      navigate('/');
    }
  }, [id, navigate]);

  const handleAddToCartClick = () => {
    if (!product || isAdding) return;
    
    setIsAdding(true);
    onAddToCart(product, quantity);
    
    // Simular un procesamiento sutil para el feedback visual
    setTimeout(() => {
      setIsAdding(false);
      setShowToast(true);
      
      // Ocultar el toast después de 3 segundos
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }, 800);
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('es-ES');
  };

  if (!product) return null;

  return (
    <main className="pt-20">
      {/* Toast Notification - Accessible with aria-live */}
      <div 
        role="status"
        aria-live="polite"
        className={`fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 transform ${
          showToast ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'
        }`}
      >
        {showToast && (
          <div className="bg-matte-black/90 backdrop-blur-xl border border-primary/40 px-6 py-4 rounded-2xl shadow-[0_20px_50px_rgba(198,166,93,0.15)] flex items-center gap-5 min-w-[320px]">
            <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border border-primary/20">
              <span className="material-symbols-outlined text-primary text-2xl" aria-hidden="true">shopping_cart_checkout</span>
            </div>
            <div className="flex flex-col">
              <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-black italic">Añadido Exitosamente</p>
              <p className="text-white font-bold italic uppercase tracking-tighter truncate max-w-[180px]">{product.name}</p>
            </div>
            <button 
              onClick={() => setShowToast(false)}
              className="ml-auto text-zinc-500 hover:text-white transition-colors p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Cerrar notificación"
            >
              <span className="material-symbols-outlined text-xl" aria-hidden="true">close</span>
            </button>
          </div>
        )}
      </div>

      <section className="max-w-7xl mx-auto px-6 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Product Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-3xl group-hover:bg-primary/10 transition-colors"></div>
            <div className="relative aspect-square w-full rounded-3xl overflow-hidden bg-zinc-900 flex items-center justify-center border border-white/5 shadow-2xl">
              <img 
                alt={`Imagen de producto: ${product.name}`} 
                className="w-4/5 h-4/5 object-contain transition-transform duration-700 hover:scale-110" 
                src={product.image} 
              />
            </div>
          </div>

          {/* Product Content */}
          <div className="flex flex-col gap-8">
            <div className="space-y-4 text-center lg:text-left">
              <span className="text-primary font-black tracking-[0.4em] uppercase text-xs italic">{product.tagline}</span>
              <h1 className="text-6xl lg:text-8xl font-black tracking-tighter italic uppercase leading-[0.9]">{product.name}</h1>
              <p className="text-3xl font-black text-primary/90 italic tracking-tighter" aria-label={`Precio: ${formatPrice(product.price)}`}>
                ${formatPrice(product.price)}
              </p>
              <p className="text-lg text-zinc-400 leading-relaxed max-w-xl font-light italic">
                {product.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 py-8 border-y border-white/10">
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-xl" aria-hidden="true">flare</span>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-black">Sabor</p>
                  <p className="font-bold text-sm italic uppercase">{product.flavorProfile}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-xl" aria-hidden="true">texture</span>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-black">Textura</p>
                  <p className="font-bold text-sm italic uppercase">{product.texture}</p>
                </div>
              </div>
            </div>

            {/* CTA Actions */}
            <div className="flex flex-col sm:flex-row gap-4 items-center mt-4">
              <div className="flex items-center bg-zinc-900 border border-white/10 rounded px-4 h-16 w-full sm:w-auto" role="group" aria-label="Selector de cantidad">
                <button 
                  disabled={isAdding || quantity <= 1}
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center hover:text-primary transition-colors disabled:opacity-30 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label="Disminuir cantidad"
                >
                  <span className="material-symbols-outlined text-lg" aria-hidden="true">remove</span>
                </button>
                <span className="w-12 text-center font-black text-xl italic" aria-live="polite" aria-label={`Cantidad seleccionada: ${quantity}`}>
                  {quantity}
                </span>
                <button 
                  disabled={isAdding}
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center hover:text-primary transition-colors disabled:opacity-30 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label="Aumentar cantidad"
                >
                  <span className="material-symbols-outlined text-lg" aria-hidden="true">add</span>
                </button>
              </div>
              <button 
                disabled={isAdding}
                aria-busy={isAdding}
                onClick={handleAddToCartClick}
                className={`flex-1 w-full h-16 gold-gradient text-black font-black uppercase tracking-widest rounded-lg flex items-center justify-center gap-3 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/50 ${isAdding ? 'opacity-80 cursor-wait scale-[0.98]' : 'hover:scale-[1.02] active:scale-95'}`}>
                {isAdding ? (
                  <div className="flex items-center gap-3" role="status">
                    <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Añadiendo...</span>
                  </div>
                ) : (
                  <>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                    <span>Añadir al Carrito</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-900/50 py-32 border-t border-white/5">
        <h2 className="sr-only">Estadísticas de nutrición e impacto</h2>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 text-center">
            {[
              { icon: 'bolt', val: product.nutrition.protein, label: 'Proteína' },
              { icon: 'eco', val: '100%', label: 'Sostenible' },
              { icon: 'water_drop', val: '2000L', label: 'Agua Ahorrada' },
              { icon: 'verified', val: 'ELITE', label: 'Calidad' }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-4">
                <span className="material-symbols-outlined text-primary text-4xl" aria-hidden="true">{stat.icon}</span>
                <div className="space-y-1">
                  <h4 className="text-3xl font-black italic">{stat.val}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-black">{stat.label}</p>
                </div>
              </div>
            ))}
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;
