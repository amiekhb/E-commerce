"use client";

import ProductCard from "@/components/productCard";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { url } from "inspector";
import Image from "next/image";
import { useState } from "react";
import { FiPhone } from "react-icons/fi";
export default function Home() {
  const productCard = [
    {
      image: "",
      name: "",
      price: "",
    },
  ];
  return (
    <div className="flex flex-col gap-5 w-screen h-screen">
      <div
        className="bg-cover w-screen h-[600px] flex flex-col gap-5 justify-end p-10"
        style={{ backgroundImage: `url("/images/image1.png")` }}
      >
        <p>Wildflower Hoodie</p>
        <h1 className="text-3xl font-semibold">120’000₮</h1>
      </div>
      <div className="grid grid-cols-4 w-full h-full">
        {productCard.map(() => (
          <ProductCard />
        ))}
      </div>
    </div>
  );
}
