import React from "react";
import Image from "next/image";
import { IoMdHeartEmpty } from "react-icons/io";
const ProductCard = ({ name, image, price }) => {
  return (
    <div className="">
      <div
        className=" bg-contain h-[250px] w-[200px] rounded-xl relative"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <button className="absolute top-0 right-0 p-5">
          <IoMdHeartEmpty />
        </button>
      </div>
      <h1>{name}</h1>
      <p className="font-semibold">{price}</p>
    </div>
  );
};

export default ProductCard;
