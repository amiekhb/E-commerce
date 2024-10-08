import React from "react";
import { Input } from "@/components/ui/input";
import { CiHeart } from "react-icons/ci";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { Button } from "../ui/button";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-black p-5 grid grid-cols-3 w-full justify-between items-center ">
      <div className="flex items-center justify-start gap-5">
        <img src="./images/logo.png" alt="logo" />
        <Link className="text-gray-400" href={"/category"}>
          Ангилал
        </Link>
      </div>
      <div className="flex items-center gap-3  text-center justify-center">
        <CiSearch className="text-gray-100" />
        <Input
          className="bg-gray-900 rounded-full text-gray-400 w-1/7 border-none"
          placeholder="Бүтээгдэхүүн хайх"
        />
      </div>
      <div className="text-gray-100 flex gap-3  items-center justify-end ">
        <CiHeart
          className="w-[30px] h-[30px]"
          // onClick={}
        />
        <MdOutlineLocalGroceryStore className="w-[30px] h-[30px]" />
        <Button
          variant={"outline"}
          className="rounded-full bg-black border-blue-700"
        >
          <Link className="" href={"/signup"}>
            Бүртгүүлэх
          </Link>
        </Button>
        <Button className="bg-blue-700 rounded-full">
          <Link className="" href={"/login"}>
            Нэвтрэх
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Header;
