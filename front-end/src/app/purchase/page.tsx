"use client";

import React from "react";
import Basket from "@/components/purchase/basket";
import DeliveryInfo from "@/components/purchase/deliveryInfo";
import { Successful } from "@/components/purchase/successful";

const Purchase = () => {
  return (
    <div className="flex flex-col bg-gray-100  pb-20">
      <div className=" flex flex-col justify-center w-screen  p-16">
        <ul className="steps ">
          <li className="step step-primary"></li>
          <li className="step "></li>
          <li className="step"></li>
        </ul>
      </div>
      <div className=" w-full flex justify-center p-20 ">
        <Basket />
        {/* <DeliveryInfo /> */}
        {/* <Successful /> */}
      </div>
    </div>
  );
};

export default Purchase;
