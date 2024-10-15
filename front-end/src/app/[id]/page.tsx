"use client";

import React, { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { IoMdHeartEmpty } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { useProducts } from "@/provider/product-provider";
import { useParams, useRouter } from "next/navigation";
import ProductCard, { BigProductCard } from "@/components/productCard";

const ProductDetail = () => {
  const router = useRouter();
  const { id } = useParams();
  const { oneProduct, getProduct, products } = useProducts();

  useEffect(() => {
    if (id) {
      getProduct(id);
    }
  }, [id, getProduct]);

  const handleChange = () => {
    router.push("/purchase");
  };
  
  return (
    <div className="flex flex-col gap-5 p-8 bg-white">
      <div className="flex gap-5 items-center">
        <div className="flex flex-col gap-5">
          {/* {oneProduct.images.map((image, i) => (
            <img
              key={i}
              className="w-[50px] h-[50px] rounded-xl"
              src={image}
              alt={`Image ${i + 1}`}
            />
          ))} */}
        </div>
        <div
          className="w-[422px] h-[521px]   rounded-xl"
          style={{
            backgroundColor: "gray",
            backgroundImage: `url('${oneProduct.images}')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div>
          <Badge variant="outline">шинэ</Badge>
          <div className="flex gap-5 items-center font-semibold">
            <h1 className="text-2xl">{oneProduct.name}</h1>
            <IoMdHeartEmpty />
          </div>
          <p>{oneProduct.description}</p>
          <p className="text-sm">Хэмжээний заавар</p>
          <div className="flex gap-3">
            <Button className="rounded-full h-[30px] w-[30px]">S</Button>
            <Button
              variant="outline"
              className="rounded-full h-[30px] w-[30px] border border-black"
            >
              M
            </Button>
            <Button
              variant="outline"
              className="rounded-full h-[30px] w-[30px] border border-black"
            >
              L
            </Button>
            <Button
              variant="outline"
              className="rounded-full h-[30px] w-[30px] border border-black"
            >
              XL
            </Button>
            <Button
              variant="outline"
              className="rounded-full h-[30px] w-[30px] border border-black"
            >
              2XL
            </Button>
          </div>
          <div className="flex gap-1 items-center">
            <Button
              variant="outline"
              className="rounded-full h-[30px] w-[30px] border border-black"
            >
              +
            </Button>
            <p>1</p>
            <Button
              variant="outline"
              className="rounded-full h-[30px] w-[30px] border border-black"
            >
              -
            </Button>
          </div>
          <p className="text-2xl font-semibold">{oneProduct.price}₮</p>
          <Button className="rounded-full  bg-blue-700" onClick={handleChange}>
            Сагсанд нэмэх
          </Button>
          <div className="flex gap-5">
            <div className="flex gap-5">
              <p>Үнэлгээ</p>
              <p className="text-blue-500 border-b border-blue-500 text-sm">
                бүгдийг харах
              </p>
            </div>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-300"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-300"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-300"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-300"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-300"
              />
            </div>
          </div>
        </div>
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

export default ProductDetail;
