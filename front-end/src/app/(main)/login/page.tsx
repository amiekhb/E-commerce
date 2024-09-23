"use client";
import { Input } from "../../../components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const Login = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const logIn = async () => {
    const { email, password } = userData;

    try {
      const response = await axios.post("http://8008/login", {
        email,
        password,
      });

      if (response.status === 200) {
        toast.success("User successfully signed in", { autoClose: 1000 });
        const { token } = response.data;
        localStorage.setItem("token", token);

        router.push("/dashboard");
      }
    } catch (error) {
      console.error("There was an error signing in:", error);
      toast.error("Failed to sign in. Please try again.");
    }
  };
  return (
    <div className=" p-16 m-16">
      <div className="flex flex-col gap-5 text-center p-16 m-16">
        <h1 className="text-3xl font-bold">Нэвтрэх</h1>
        <div className="flex flex-col gap-7 items-center">
          <Input
            className=" w-1/4 p-2 flex items-center justify-center rounded-full"
            placeholder="Имэйл хаяг"
          ></Input>
          <Input
            className="w-1/4  p-2 flex items-center justify-center rounded-full"
            placeholder="Нууц үг"
          ></Input>
        </div>

        <div className="flex flex-col gap-5 items-center">
          <Button className="w-1/4 flex items-center justify-center  bg-blue-700 rounded-full">
            Нэвтрэх
          </Button>
          <div className="flex gap-3">
            <p className="border-b text-gray-500">Нууц үг мартсан</p>
            <Link className="text-blue-600" href={"/password"}></Link>
          </div>
          <Button className="w-1/4 flex items-center justify-center  text-blue-700 bg-white border rounded-full">
            Бүртгүүлэх
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
