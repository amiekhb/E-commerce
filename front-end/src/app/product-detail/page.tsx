"use client";

import React from "react";

import ProductCard, { BigProductCard } from "@/components/productCard";
import { useProducts } from "@/provider/product-provider";
import ProductDetail from "@/components/productDetail";
const ProductDetailPage = () => {
  const { products } = useProducts();

  return (
    <div className="flex flex-col gap-5 p-8 bg-white">
      <div>
        {/* {products.map((p, i) => {
          return <ProductDetail key={p._id} product={p} />;
        })} */}
      </div>
      <div>
        <h1 className="font-semibold text-3xl">Холбоотой бараа</h1>
        <div className="grid grid-cols-4 gap-5 m-10">
          {products.map((p, i) => {
            return <ProductCard key={p._id} product={p} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
