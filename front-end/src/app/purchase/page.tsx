"use client";

import React, { useState } from "react";
import Basket from "@/components/purchase/basket";
import DeliveryInfo from "@/components/purchase/deliveryInfo";
import { Successful } from "@/components/purchase/successful";

const Purchase = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [basketItems, setBasketItems] = useState([]);
  const [deliveryInfo, setDeliveryInfo] = useState(null);

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  return (
    <div className="flex flex-col bg-gray-100  pb-20">
      <div className=" flex flex-col justify-center w-screen  p-16">
        <ul className="steps">
          <li
            className={`step ${currentStep >= 1 ? "step-primary" : ""}`}
            onClick={() => setCurrentStep(1)}
          ></li>
          <li
            className={`step ${currentStep >= 2 ? "step-primary" : ""}`}
            onClick={() => setCurrentStep(2)}
          ></li>
          <li
            className={`step ${currentStep >= 3 ? "step-primary" : ""}`}
            onClick={() => setCurrentStep(3)}
          ></li>
        </ul>
      </div>
      <div className=" w-full flex justify-center p-20 ">
        {currentStep === 1 && (
          <Basket
            items={basketItems}
            setItems={setBasketItems}
            nextStep={nextStep}
          />
        )}
        {currentStep === 2 && (
          <DeliveryInfo
            info={deliveryInfo}
            setInfo={setDeliveryInfo}
            nextStep={nextStep}
          />
        )}
        {currentStep === 3 && <Successful />}
      </div>
    </div>
  );
};

export default Purchase;
