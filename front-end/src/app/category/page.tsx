"use client";

import React, { useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { apiUrl } from "@/utils/util";
import axios from "axios";
import { ICategory } from "@/utils/interfaces";
import ProductCard, { BigProductCard } from "@/components/productCard";
import { useProducts } from "@/provider/product-provider";

const Category = () => {
  const { products } = useProducts();
  const [categoryList, setCategoryList] = useState<ICategory[]>([]);
  const getCategory = async () => {
    const response = await axios.get(`${apiUrl}/api/v1/category`);
    setCategoryList(response.data.category);
  };

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
          <span className="flex gap-2 items-center">
            <Checkbox />
            Free
          </span>
          <span className="flex gap-2 items-center">
            <Checkbox />S
          </span>
          <span className="flex gap-2 items-center">
            <Checkbox />M
          </span>
          <span className="flex gap-2 items-center">
            <Checkbox />L
          </span>
          <span className="flex gap-2 items-center">
            <Checkbox />
            XL
          </span>
          <span className="flex gap-2 items-center">
            <Checkbox />
            2XL
          </span>
          <span className="flex gap-2 items-center">
            <Checkbox />
            3XL
          </span>
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

// const App = () => (
//   <ProductProvider>
//     <Category />
//   </ProductProvider>
// );
// export default App;
