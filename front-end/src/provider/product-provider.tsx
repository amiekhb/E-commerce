"use client";
import { apiUrl } from "@/utils/util";
import axios from "axios";
import React, { useContext, useState, createContext, useEffect } from "react";

interface IProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  size: string;
  images: [string];
  isNew: boolean;
  quantity: number;
  discount: number;
  category: Object;
}

interface IContext {
  product: IProduct | null;
  setProduct: React.Dispatch<React.SetStateAction<IProduct | null>>;
}

export const ProductContext = createContext<IContext>({
  product: null,
  setProduct: () => {},
});

const ProductProvider = ({ children }: { children: React.ReactNode }) => {
  const [product, setProduct] = useState<IProduct[]>([]);
  const getAllProducts = async () => {
    const response = await axios.get(`${apiUrl}/api/v1/product`);
    setProduct(response.data.products);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  // return (
  //   <ProductContext.Provider value={{ product, setProduct }}>
  //     {children}
  //   </ProductContext.Provider>
  // );
};

export const useUser = () => {
  return useContext(ProductContext);
};

export default ProductProvider;
