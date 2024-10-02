import SavedProduct from "@/components/savedProduct";
import React from "react";

const SavedItems = () => {
  return (
    <div className="w-full h-full bg-gray-100 flex flex-col gap-5 items-center p-5">
      <h1 className="font-bold text-2xl">Хадгалсан бараа (3)</h1>
      <SavedProduct />
    </div>
  );
};

export default SavedItems;
