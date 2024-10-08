import React from "react";
import { CiCircleCheck } from "react-icons/ci";

export const Successful = () => {
  return (
    <div className="w-1/4 h-[100px] bg-white flex flex-col justify-center items-center rounded-xl ">
      <CiCircleCheck className="w-[50px] h-[50px] text-blue-700 ]" />
      <p>Захиалга амжилттай баталгаажлаа.</p>
    </div>
  );
};
