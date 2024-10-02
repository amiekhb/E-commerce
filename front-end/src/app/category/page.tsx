import React from "react";
import { Checkbox } from "@/components/ui/checkbox";

const Category = () => {
  return (
    <div className="flex ">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold">Ангилал</h1>
          <span>
            <Checkbox />
            Малгай
          </span>
          <span>
            <Checkbox />
            Усны сав
          </span>
          <span>
            <Checkbox />
            T-shirt
          </span>
          <span>
            <Checkbox />
            Hoodie
          </span>
          <span>
            <Checkbox />
            Tee
          </span>
          <span>
            <Checkbox />
            Цүнх
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold">Хэмжээ</h1>
          <span>
            <Checkbox />
            Free
          </span>
          <span>
            <Checkbox />S
          </span>
          <span>
            <Checkbox />M
          </span>
          <span>
            <Checkbox />L
          </span>
          <span>
            <Checkbox />
            XL
          </span>
          <span>
            <Checkbox />
            2XL
          </span>
          <span>
            <Checkbox />
            3XL
          </span>
        </div>
      </div>
    </div>
  );
};

export default Category;
