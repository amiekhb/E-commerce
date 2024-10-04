import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const UserInfo = () => {
  return (
    <div className=" flex flex-col w-screen max-w-sm ">
      <p className="font-semibold text-2xl p-5">Хэрэглэгчийн хэсэг</p>
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
          <Label htmlFor="email">Имэйл хаяг:</Label>
          <Input className="rounded-full h-3/4 w-[800px]" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Хаяг</Label>
          <Input className="rounded-xl h-20 w-[800px]" />
        </div>
      </div>
      <Button
        variant="default"
        className="bg-blue-700 rounded-full place-self-end m-3"
      >
        Мэдээлэл шинэчлэх
      </Button>
    </div>
  );
};

export default UserInfo;
