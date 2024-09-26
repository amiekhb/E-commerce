"use client";

import React from "react";
import { Input } from "../../../../components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Password = () => {
  const router = useRouter();

  const handleSendOtp = async () => {
    try {
      await axios.post("http://localhost:800/api/v1/auth/password");
    } catch {}
  };
  return (
    <div className="  w-full h-full flex items-start justify-center"></div>
  );
};

export default Password;
