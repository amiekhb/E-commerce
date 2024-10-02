"use client";

import ProductCard from "@/components/productCard";
import { IProduct } from "@/utils/interfaces";
import { useState } from "react";

const page = () => {
  const [product, setProduct] = useState<IProduct[]>([]);
  // const getAllProducts = await
  return (
    <div className="flex flex-col gap-5 w-screen h-screen">
      <div
        className="bg-cover w-screen h-[600px] flex flex-col gap-5 justify-end p-10 static"
        style={{ backgroundImage: `url("/images/image1.png")` }}
      >
        <p>Wildflower Hoodie</p>
        <h1 className="text-3xl font-semibold">120’000₮</h1>
      </div>
      <div className="grid grid-cols-4 w-full h-full">
        {/* {product.map(p)=>(
        <ProductCard key={p._id} p={product}/>
        )} */}
      </div>
    </div>
  );
};

export default page;
