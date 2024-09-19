import React from "react";
import { Input } from "../../../components/ui/input";
import { Button } from "@/components/ui/button";

const Register = () => {
  return (
    <div className="flex flex-col gap-5 text-center p-16 m-16">
      <h1 className="text-3xl font-bold">Бүртгүүлэх</h1>
      <div className="flex flex-col gap-7 items-center">
        <Input
          className=" w-1/4 p-2 flex items-center justify-center rounded-full"
          placeholder="Нэр"
        ></Input>
        <Input
          className="w-1/4 p-2 flex items-center justify-center rounded-full"
          placeholder="Имэйл хаяг"
        ></Input>
        <Input
          className=" w-1/4 p-2 flex items-center justify-center rounded-full"
          placeholder="Нууц үг"
        ></Input>
        <Input
          className=" w-1/4 p-2 flex items-center justify-center rounded-full"
          placeholder="Нууц үг давтах"
        ></Input>
      </div>
      <ul className="text-gray-600 text-xs flex flex-col gap-3 text-start items-center">
        <li>Том үсэг орсон байх</li>
        <li>Жижиг үсэг орсон байх</li>
        <li>Тоо орсон байх</li>
        <li>Тэмдэгт орсон байх</li>
      </ul>
      <div className=" flex flex-col gap-5 items-center">
        <Button className="w-1/4 flex items-center justify-center  bg-blue-700 rounded-full">
          Үүсгэх
        </Button>
        <Button className="w-1/4 flex items-center justify-center  text-blue-700 bg-white border rounded-full">
          Нэвтрэх
        </Button>
      </div>
    </div>
  );
};

export default Register;
