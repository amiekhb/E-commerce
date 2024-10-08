import Basket from "@/components/purchase/basket";
import DeliveryInfo from "@/components/purchase/deliveryInfo";
import { Successful } from "@/components/purchase/successful";
import React from "react";

const Purchase = () => {
  return (
    <div className="bg-gray-100 flex flex-col justify-center w-screen h-[800px] ">
      <ul className="steps ">
        <li className="step step-primary">1</li>
        <li className="step ">2</li>
        <li className="step">3</li>
      </ul>
      {/* <Basket /> */}
      {/* <DeliveryInfo /> */}
      <Successful />
    </div>
  );
};

export default Purchase;
