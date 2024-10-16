"use client";

import React, {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from "react";
import axios from "axios";

import { apiUrl } from "@/utils/util";
import { ICart } from "@/utils/interfaces";

interface IContext {
  cart: ICart[];
  loading: boolean;
  error: string | null;
  getCart: (id: string) => Promise<void>;
}

export const CartContext = createContext<IContext | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartData, setCartData] = useState<ICart[]>([]);

  const getCart = async () => {
    const response = await axios.get(`${apiUrl}/api/v1/cart/get-cart`);
    setCartData(response.data.cart);
  };

  // const addToCart = async () => {
  //   try {
  //     const response = await axios.get(`${apiUrl}/api/v1/cart/create-cart`, {
  //       userId: user?._id,
  //       productId: id,
  //       quantity: productQuantity,
  //     });
  //     if (response.status===200)
  //   } catch (error){
  // }
  // };

  useEffect(() => {
    getCart();
  }, []);

  return (
    <CartContext.Provider value={{ cartData, getCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
