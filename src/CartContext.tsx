

import { createContext , useState, useContext } from "react";
import { Products, cartItems } from './types/Interface';


 type CartContextType = {
   cartItems: Products[];
   addToCart: (product: Products) => void;
   };


 const cartContext = createContext<CartContextType>({
   cartItems: [],  
   addToCart: () => {}, });

export const CartProvider = ({ children } : { children: React.ReactNode }) => {

    const [ cartItems, setCart] =  useState<cartItems[]>([]);

    const addToCart = (product : Products) => {
        let isInCart = false;
        setCart((prevCart) => {
            const existingProduct = prevCart.find(item => item.id === product.id);

            if (existingProduct) {
                isInCart = true;
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
      
    };


    return (
        <cartContext.Provider value={{ cartItems, addToCart }}>
            {children}
        </cartContext.Provider>
    )
}


export const useCart = () => useContext(cartContext);
