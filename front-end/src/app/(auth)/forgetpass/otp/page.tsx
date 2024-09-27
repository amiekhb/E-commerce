import React from "react";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import Image from "next/image";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Link from "next/link";

const Otp = () => {
  return (
    <div className="flex flex-col justify-start items-center pt-40 w-full h-full gap-16 bg-gray-100">
      <div className="flex flex-col justify-center items-center gap-5">
        <img src="./images/mail.png" alt="" />
        <h1 className="font-semibold text-2xl">Баталгаажуулах</h1>
        <p className=" text-gray-600">
          “mujo@nest.edu.mn” хаягт илгээсэн баталгаажуулах кодыг оруулна уу
        </p>
        <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <p className="border-b text-gray-500">
        <Link href={"/loader"}>Дахин илгээх (30)</Link>
      </p>
    </div>
  );
};

export default Otp;
