"use client";

import React from "react";
import { Input } from "../../../components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Recover from "@/components/password/recover";
import NewPass from "@/components/password/newpass";

const Password = () => {
  return (
    <div className="  w-full h-full flex items-start justify-center">
      <Recover />
      {/* <NewPass /> */}
    </div>
  );
};

export default Password;
