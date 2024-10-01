"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "../../../../components/ui/input";
import { toast, useToast } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";

const NewPass = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const params = useSearchParams();

  const handleNewPassword = () => {
    if (!(password === repassword)) {
      console.log("Clicked not match");

      return;
    }
    console.log("RT", params.get("resettoken"));
    console.log("EMAIL", params.get("email"));
    router.push("/login");
  };
  return (
    <div className="  w-full h-full flex items-start justify-center bg-gray-100">
      <div className="flex flex-col items-center gap-5 w-full  h-full justify-center">
        <h1 className="text-3xl font-semibold">Нууц үг сэргээх</h1>
        <Input
          className="w-1/5  p-2 flex items-center justify-center rounded-full"
          placeholder="Шинэ нууц үг"
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
        <Input
          className="w-1/5  p-2 flex items-center justify-center rounded-full"
          placeholder="Шинэ нууц үг давтах"
          onChange={(e) => setRePassword(e.target.value)}
        ></Input>
        <Button
          className="w-1/5 flex items-center justify-center  bg-blue-700 border rounded-full"
          onClick={handleNewPassword}
        >
          Үүсгэх
          {/* <Link className="text-white" href={"/loading"}>
            Үүсгэх
          </Link> */}
        </Button>
      </div>
    </div>
  );
};

export default NewPass;
