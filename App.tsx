
import React, { useState, useCallback } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Sabores from './pages/Sabores';
import Beneficios from './pages/Beneficios';
import Impacto from './pages/Impacto';
import { Product, CartItem } from './types';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleAddToCart = useCallback((product: Product, quantity: number) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + quantity } 
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  }, []);

  const handleRemoveFromCart = useCallback((id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  }, []);

  const handleUpdateQuantity = useCallback((id: string, delta: number) => {
    setCart(prev => prev.map(item => 
      item.id === id 
        ? { ...item, quantity: Math.max(1, item.quantity + delta) } 
        : item
    ));
  }, []);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-background-dark selection:bg-primary selection:text-black">
        <Header cartCount={cartCount} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail onAddToCart={handleAddToCart} />} />
            <Route path="/cart" element={
              <Cart 
                items={cart} 
                onRemove={handleRemoveFromCart} 
                onUpdateQuantity={handleUpdateQuantity} 
              />
            } />
            <Route path="/sabores" element={<Sabores />} />
            <Route path="/beneficios" element={<Beneficios />} />
            <Route path="/impacto" element={<Impacto />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
