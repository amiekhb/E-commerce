import Basket from "@/components/purchase/basket";
import DeliveryInfo from "@/components/purchase/deliveryInfo";
import { Successful } from "@/components/purchase/successful";
import React from "react";

const Purchase = () => {
  return (
    <div className="flex flex-col bg-gray-100 h-[800px] ">
      <div className=" flex flex-col justify-center w-screen  p-16">
        <ul className="steps ">
          <li className="step step-primary"></li>
          <li className="step "></li>
          <li className="step"></li>
        </ul>
      </div>
      <div className=" w-full flex justify-center p-20">
        <Basket />
        {/* <DeliveryInfo /> */}
        {/* <Successful /> */}
      </div>
    </div>
  );
};

export default Purchase;
