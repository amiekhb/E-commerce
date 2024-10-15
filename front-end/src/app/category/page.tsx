"use client";

import React, { useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { apiUrl } from "@/utils/util";
import axios from "axios";
import { ICategory } from "@/utils/interfaces";
import ProductCard, { BigProductCard } from "@/components/productCard";
import { useProducts } from "@/provider/product-provider";
import { useCategories } from "@/provider/category-provider";

const Category = () => {
  const { products } = useProducts();
  const { categoryList, getCategory } = useCategories();

  useEffect(() => {
    getCategory();
  }, []);

  console.log("products", products);
  return (
    <div className="flex p-5 m-20">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold">Ангилал</h1>
          {categoryList.map((c) => {
            return (
              <div className="flex gap-2 items-center">
                <Checkbox /> <p>{c.name}</p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold">Хэмжээ</h1>
          {["Free", "S", "M", "L", "XL", "2XL", "3XL"].map((size) => (
            <span key={size} className="flex gap-2 items-center">
              <Checkbox /> {size}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5 m-10">
        {products.map((p, i) => {
          return <ProductCard key={p._id} product={p} />;
        })}
      </div>
    </div>
  );
};

export default Category;
