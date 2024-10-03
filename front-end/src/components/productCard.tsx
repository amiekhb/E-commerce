import React from "react";
import Image from "next/image";
import { IoMdHeartEmpty } from "react-icons/io";
import { IProduct } from "@/utils/interfaces";
import { Divide } from "lucide-react";
const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <div className="">
      <div
        className=" bg-contain h-[350px] w-[300px] rounded-xl relative"
        style={{
          backgroundImage: `url(${product.images})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <button className="absolute top-0 right-0 p-3">
          <IoMdHeartEmpty />
        </button>
      </div>
      <h1>{product.name}</h1>
      <p className="font-semibold">{product.price}₮</p>
    </div>
  );
};

export default ProductCard;

export const BigProductCard = ({ product }: { product: IProduct }) => {
  return (
    <div className="col-span-2 row-span-2">
      <div
        className=" bg-contain h-[710px] w-[610px] rounded-xl relative"
        style={{
          backgroundImage: `url(${product.images})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <button className="absolute top-0 right-0 p-3">
          <IoMdHeartEmpty />
        </button>
      </div>
      <h1>{product.name}</h1>
      <p className="font-semibold">{product.price}₮</p>
    </div>
  );
};
