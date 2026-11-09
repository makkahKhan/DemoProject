

import { createContext , useState, useContext } from "react";
import { Products, CartItems } from './types/Interface';


 type CartContextType = {
   cartItems: CartItems[];
   addToCart: (product: CartItems) => void;
   removeFromCart: (id: number) => void; // 👈 1. Naya function type add kiya
   };


 const cartContext = createContext<CartContextType>({
   cartItems: [],  
   addToCart: () => {}, 
  removeFromCart : () => {}
});

export const CartProvider = ({ children } : { children: React.ReactNode }) => {

    const [ cartItems, setCart] =  useState<CartItems[]>([]);

    const addToCart = (product : CartItems) => {
        let isInCart = false;
        setCart((prevCart) => {
            const existingProduct = prevCart.find(item => item.id === product.id);

            if (existingProduct) {
                isInCart = true;
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + product.quantity }
                        : item
                );
            } else {
                return [...prevCart, { ...product, quantity: product.quantity }];
            }
        });
      
    };
     
    const removeFromCart = (id : number) => {
      setCart((prevCart) => prevCart.filter(item => item.id !== id))
    }
    
    return (
        <cartContext.Provider value={{ cartItems, addToCart , removeFromCart }}>
            {children}
        </cartContext.Provider>
    )
}


export const useCart = () => useContext(cartContext);
