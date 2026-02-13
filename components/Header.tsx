
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  cartCount: number;
}

const Header: React.FC<HeaderProps> = ({ cartCount }) => {
  const location = useLocation();

  return (
    <header className="fixed top-0 w-full z-50 glass-header border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="size-8 text-primary transition-transform group-hover:scale-110">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
          </div>
          <h2 className="text-xl font-bold tracking-[0.2em] uppercase hidden sm:block">Beetle Protein</h2>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          <Link to="/sabores" className={`text-xs font-semibold tracking-widest uppercase hover:text-primary transition-colors ${location.pathname === '/sabores' ? 'text-primary' : 'text-white/70'}`}>Sabores</Link>
          <Link to="/beneficios" className={`text-xs font-semibold tracking-widest uppercase hover:text-primary transition-colors ${location.pathname === '/beneficios' ? 'text-primary' : 'text-white/70'}`}>Beneficios</Link>
          <Link to="/impacto" className={`text-xs font-semibold tracking-widest uppercase hover:text-primary transition-colors ${location.pathname === '/impacto' ? 'text-primary' : 'text-white/70'}`}>Impacto</Link>
        </nav>

        <div className="flex items-center gap-6">
          <Link to="/cart" className="relative cursor-pointer group flex items-center">
            <svg className="w-6 h-6 text-white group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-black text-[10px] font-black h-4 w-4 rounded-full flex items-center justify-center border border-background-dark">
                {cartCount}
              </span>
            )}
          </Link>
          <button className="hidden sm:block gold-gradient text-background-dark px-8 py-2.5 rounded text-xs font-bold tracking-widest uppercase hover:brightness-110 transition-all">
            Comprar
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
