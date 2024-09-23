"use client";
import React from "react";
import { Input } from "../../../components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const signUp = async () => {
    const { firstname, lastname, email, password } = userData;
    if (password !== password) {
      toast.error("Нууц үг хоорондоо тохирохгүй байна.");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/auth/signup",
        {
          firstname,
          lastname,
          email,
          password,
        }
      );

      if (response.status === 201) {
        toast.success("User successfully signed up", { autoClose: 1000 });
        router.push("/login");
      }
    } catch (error) {
      console.error("There was an error signing up:", error);
      toast.error("Failed to sign up. Please try again.");
    }
  };
  return (
    <div className="flex flex-col gap-5 text-center p-16 m-16">
      <h1 className="text-3xl font-bold">Бүртгүүлэх</h1>
      <div className="flex flex-col gap-7 items-center">
        <Input
          className=" w-1/4 p-2 flex items-center justify-center rounded-full"
          placeholder="Нэр"
          value={userData.firstname}
          onChange={(e) =>
            setUserData({ ...userData, firstname: e.target.value })
          }
        ></Input>
        <Input
          className=" w-1/4 p-2 flex items-center justify-center rounded-full"
          placeholder="Овог"
          value={userData.lastname}
          onChange={(e) =>
            setUserData({ ...userData, lastname: e.target.value })
          }
        ></Input>
        <Input
          className="w-1/4 p-2 flex items-center justify-center rounded-full"
          placeholder="Имэйл хаяг"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        ></Input>
        <Input
          className=" w-1/4 p-2 flex items-center justify-center rounded-full"
          placeholder="Нууц үг"
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        ></Input>
        <Input
          className=" w-1/4 p-2 flex items-center justify-center rounded-full"
          placeholder="Нууц үг давтах"
          value={userData.repassword}
          onChange={(e) =>
            setUserData({ ...userData, repassword: e.target.value })
          }
        ></Input>
      </div>
      <ul className="text-gray-600 text-xs flex flex-col gap-3 text-start items-center">
        <li>Том үсэг орсон байх</li>
        <li>Жижиг үсэг орсон байх</li>
        <li>Тоо орсон байх</li>
        <li>Тэмдэгт орсон байх</li>
      </ul>
      <div className=" flex flex-col gap-5 items-center">
        <Button
          className="w-1/4 flex items-center justify-center  bg-blue-700 rounded-full"
          onClick={signUp}
        >
          Үүсгэх
        </Button>
        <Button className="w-1/4 flex items-center justify-center  text-blue-700 bg-white border rounded-full">
          <Link className="text-blue-600" href={"/login"}>
            Нэвтрэх
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default SignUp;
