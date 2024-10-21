import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import LittleBasket from "../little-basket";

const DeliveryInfo = ({ info, setInfo, nextStep }) => {
  const handleChange = (event) => {
    setInfo(event.target.value); // Update delivery info
  };

  const handleNextStep = () => {
    // Logic to navigate to next step, if needed
  };

  return (
    <div className="flex gap-5">
      <div>
        <LittleBasket />
      </div>
      <div className=" flex flex-col w-[900px] rounded-xl bg-white items-center">
        <div className="flex flex-col items-start p-5">
          <p className="font-semibold text-2xl p-5">
            2. Хүргэлтийн мэдээлэл оруулах
          </p>
          <div className="p-5 border-t flex flex-col gap-6 w-[800px]">
            <div className="grid w-full max-w-sm items-center gap-1.5 ">
              <Label htmlFor="email">Овог:</Label>
              <Input className="rounded-full h-3/4 w-[800px]" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Нэр:</Label>
              <Input className="rounded-full h-3/4 w-[800px]" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Утасны дугаар:</Label>
              <Input className="rounded-full h-3/4 w-[800px]" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Хаяг:</Label>
              <Input className="rounded-xl h-20 w-[800px]" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Нэмэлт мэдээлэл:</Label>
              <Input className="rounded-xl h-20 w-[800px]" />
            </div>
            <p>Хүргэлттэй холбоотой нэмэлт мэдээлэл үлдээгээрэй</p>
          </div>
          <div className="flex">
            <Button
              variant="default"
              className="bg-white rounded-full place-self-start m-3 text-black border "
            >
              Буцах
            </Button>
            <Button
              variant="default"
              className="bg-blue-700 rounded-full place-self-end m-3 "
              // onClick={handleNextStep}
              onClick={nextStep}
            >
              Төлбөр төлөх
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryInfo;
