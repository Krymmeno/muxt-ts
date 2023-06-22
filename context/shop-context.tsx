import React, { ProviderProps, useState } from "react";
import { createContext } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext<any>(null);
export type CartItemType = { itemId: number, itemQuantity: number }

const getDefaultCart = () => {
    let cart: any = {};
    PRODUCTS.forEach(product => {
        cart[product.id] = 0
    })
    return cart;
}

export const ShopContextProvider = (props: ProviderProps<any>) => {
    const [cartItems, setCartItems] = useState<any>(getDefaultCart());
    const addToCart = (itemId: number) => {
        setCartItems((prev: any) => ({...prev, [itemId]: prev[itemId] + 1}));
    }
    const removeFromCart = (itemId: number) => {
        setCartItems((prev: any) => ({...prev, [itemId]: prev[itemId] - 1}));
    }

    const contextValue = { cartItems, addToCart, removeFromCart };

    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
}