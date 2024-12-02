'use client'

import { createContext, useContext, useState, ReactNode } from 'react';


interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  total: number;
}


const CartContext = createContext<CartContextType | undefined>(undefined);


export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);


  const addToCart = (product: Product) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(item => item.id === product.id);
      
      if (existingItem) {
        return currentItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...currentItems, { ...product, quantity: 1 }];
    });
  };


  const removeFromCart = (productId: number) => {
    setItems(currentItems => 
      currentItems.filter(item => item.id !== productId)
    );
  };


  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity < 1){      
      removeFromCart(productId)
      return;
    } 
    
    setItems(currentItems =>
      currentItems.map(item =>
        item.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };


  const clearCart = () => {
    setItems([]);
  };

 
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider 
      value={{ 
        items, 
        addToCart, 
        removeFromCart, 
        updateQuantity, 
        clearCart, 
        total 
      }}
    >
      {children}
    </CartContext.Provider>
  );
}


export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}