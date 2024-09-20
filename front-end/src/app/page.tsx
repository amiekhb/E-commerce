"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { url } from "inspector";
import Image from "next/image";
import { useState } from "react";
import { FiPhone } from "react-icons/fi";
export default function Home() {
  return (
    <div className="">
      <div
        className="bg-cover w-screen h-[600px] flex flex-col gap-5 justify-end p-10"
        style={{ backgroundImage: `url("/images/image1.png")` }}
      >
        <p>Wildflower Hoodie</p>
        <h1 className="text-3xl font-semibold">120’000₮</h1>
      </div>
    </div>
  );
}
