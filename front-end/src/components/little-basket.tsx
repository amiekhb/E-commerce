"use client";

import { useProducts } from "@/provider/product-provider";
import React from "react";

const LittleBasket = () => {
  const { products } = useProducts();
  const totalItems = products.length;
  return (
    <div className="w-[500px] bg-white p-5 rounded-xl">
      <p className="font-bold text-lg">Сагс ({totalItems})</p>
      {products.map((p, i) => {
        return (
          //  key={p._id} product={p}
          <div className="flex gap-5 m-5">
            <div
              className=" bg-contain h-[50px] w-[50px] rounded-xl relative"
              style={{
                backgroundImage: `url('${p.images[0]}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="flex flex-col justify-between">
              <p>{p.name}</p>
              <p>
                {p.quantity}x{p.price}
              </p>
              <p>{p.price}</p>
            </div>
          </div>
        );
      })}
      <div className="flex justify-between p-5 border-t border-dashed">
        <h1 className="text-xl">Нийт төлөх дүн:</h1>
        <p className="text-2xl font-semibold">₮</p>
      </div>
    </div>
  );
};

export default LittleBasket;
