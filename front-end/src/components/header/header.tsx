import React from "react";
import { Input } from "@/components/ui/input";
import { CiHeart } from "react-icons/ci";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { Button } from "../ui/button";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className="bg-black p-5 grid grid-cols-3 w-full justify-between items-center ">
      <div className="flex items-center justify-start">
        <img src="./images/logo.png" alt="logo" />
        <p>Ангилал</p>
      </div>
      <div className="flex items-center gap-3  text-center justify-center">
        <CiSearch className="text-gray-100" />
        <Input
          className="bg-gray-900 rounded-full text-gray-400 w-1/7 border-none"
          placeholder="Бүтээгдэхүүн хайх"
        />
      </div>
      <div className="text-gray-100 flex gap-3  items-center justify-end ">
        <CiHeart className="w-[30px] h-[30px]" />
        <MdOutlineLocalGroceryStore className="w-[30px] h-[30px]" />
        <Button variant={"outline"} className="rounded-full">
          Бүртгүүлэх
        </Button>
        <Button variant={"outline"} className="bg-blue-700 rounded-full">
          Нэвтрэх
        </Button>
      </div>
    </div>
  );
};

export default Header;
