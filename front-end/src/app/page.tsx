"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  //type inference
  const [count, setCount] = useState<number>(5);
  const minus = () => {
    setCount(count - 5);
  };
  const add = () => {
    setCount(count + 5);
  };
  return (
    <div className="text-center p-5">
      <h1>welcome to E-Commerce</h1>
      <Button onClick={minus}>-</Button>
      <Label className="mx-5">{count}</Label>
      <Button onClick={add}>+</Button>
    </div>
  );
}
