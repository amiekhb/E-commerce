"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import BasketProductDetail from "../basket-product";

const Basket = () => {
  return (
    <div className="w-1/2 flex flex-col items-center justify-center rounded-2xl">
      <div className="flex flex-col gap-5 items-start p-5 bg-white rounded-xl">
        <div className="flex gap-3 text-xl font-semibold">
          <h1>1. </h1>
          <h1>Сагс (4)</h1>
        </div>
        <BasketProductDetail />
        <Button className="bg-blue-700 rounded-full place-self-endr">
          Худалдан авах
        </Button>
      </div>
    </div>
  );
};

export default Basket;

export const SideBasket = () => {};
