import React from "react";
import { Badge } from "@/components/ui/badge";
import { IoMdHeartEmpty } from "react-icons/io";
import { Button } from "@/components/ui/button";
const ProductDetail = () => {
  return (
    <div className="flex flex-col gap-5 p-8">
      <div className="flex gap-5 items-center">
        <div className="flex flex-col gap-5">
          <img
            className="w-[50px] h-[50px] rounded-xl"
            src="./images/image1.png"
            alt=""
          />
          <img
            className="w-[50px] h-[50px]  rounded-xl"
            src="./images/image1.png"
            alt=""
          />
          <img
            className="w-[50px] h-[50px]  rounded-xl"
            src="./images/image1.png"
            alt=""
          />
          <img
            className="w-[50px] h-[50px]  rounded-xl"
            src="./images/image1.png"
            alt=""
          />
        </div>
        <div>
          {" "}
          <img
            className="w-[350px] h-[450px]  bg-contain rounded-xl"
            src="./images/image1.png"
            alt=""
          />
        </div>
        <div>
          <Badge variant="outline">шинэ</Badge>
          <div className="flex gap-5 items-center font-semibold">
            <h1 className="text-2xl">Wildflower Hoodie</h1>
            <IoMdHeartEmpty />
          </div>
          <p>Зэрлэг цэцгийн зурагтай даавуун материалтай цамц</p>
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
          <p className="text-2xl font-semibold">120’000₮</p>
          <Button className="rounded-full  bg-blue-700">Сагсанд нэмэх</Button>
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
      </div>
    </div>
  );
};

export default ProductDetail;
