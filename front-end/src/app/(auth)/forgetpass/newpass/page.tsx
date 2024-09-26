import React from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "../../../../components/ui/input";

const NewPass = () => {
  return (
    <div className="  w-full h-full flex items-start justify-center bg-gray-100">
      <div className="flex flex-col items-center gap-5 w-full  h-full justify-center">
        <h1 className="text-3xl font-semibold">Нууц үг сэргээх</h1>
        <Input
          className="w-1/5  p-2 flex items-center justify-center rounded-full"
          placeholder="Шинэ нууц үг"
        ></Input>
        <Input
          className="w-1/5  p-2 flex items-center justify-center rounded-full"
          placeholder="Шинэ нууц үг давтах"
        ></Input>
        <Button className="w-1/5 flex items-center justify-center  bg-blue-700 border rounded-full">
          <Link className="text-white" href={"/loading"}>
            Үүсгэх
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NewPass;
