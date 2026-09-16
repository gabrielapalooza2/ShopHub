"use client";

import { createContext, useContext, useState } from "react";
import type { CartItem, Product } from "@/types/product";

//lo que el contexto le ofrece al resto de la app, declarar operaciones 
interface CartContextValue {
  items: CartItem[];
  totalItems: number;
  addToCart: (product: Product) => void;
}

//creación de contexto inicializado en null 
const CartContext = createContext<CartContextValue | null>(null);

//provider guarda el estado de verdad. tiene y publica userstate 
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  function addToCart(product: Product) {
    setItems((prev) => {
      const existe = prev.find((item) => item.product.id === product.id);
      if (existe) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  }

  //cantidad total de carrito se calcula sumando las cantidades totales. 
  let totalItems = 0;
  for (const item of items) {
    totalItems = totalItems + item.quantity;
  }

  return (
    <CartContext.Provider value={{ items, totalItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

//hook, cualquier componente puede leer el contexto 
export function useCart() {
  const context = useContext(CartContext);

  if (context === null) {
    throw new Error("useCart debe usarse dentro de un <CartProvider>");
  }

  return context;
}