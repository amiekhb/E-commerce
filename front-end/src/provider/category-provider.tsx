"use client";

import React, {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from "react";
import axios from "axios";
import { ICategory } from "@/utils/interfaces";
import { apiUrl } from "@/utils/util";

interface IContext {
  categoryList: any;
  categories: ICategory[];
  loading: boolean;
  error: string | null;
  getCategory: (id: string) => Promise<void>;
}

export const CategoryContext = createContext<IContext | undefined>(undefined);

export const CategoryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [categoryList, setCategoryList] = useState<ICategory[]>([]);

  const getCategory = async () => {
    const response = await axios.get(`${apiUrl}/api/v1/category`);
    setCategoryList(response.data.category);
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <CategoryContext.Provider value={{ categoryList, getCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategories = () => {
  return useContext(CategoryContext);
};
