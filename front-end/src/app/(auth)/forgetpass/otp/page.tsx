"use client";

import React, { useEffect, useState } from "react";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import Image from "next/image";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Otp = () => {
  const router = useRouter();
  const [countDown, setCountDown] = useState(30);
  const [otpValue, setOtpValue] = useState("12");

  useEffect(() => {
    if (countDown > 0) {
      const countdown = setInterval(() => {
        setCountDown((prevSeconds) => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [countDown]);

  const handleResendOtp = () => {
    setCountDown(30);
  };

  const handleConfirmOtp = (value: string) => {
    setOtpValue(value);
    if (value.length === 4) {
      router.push("/forgetpass/newpass");
    }
  };
  return (
    <div className="flex flex-col justify-start items-center pt-40 w-full h-full gap-16 bg-gray-100">
      <div className="flex flex-col justify-center items-center gap-5">
        <img src="/images/mail.png" alt="" />
        <h1 className="font-semibold text-2xl">Баталгаажуулах</h1>
        <p className=" text-gray-600">
          “mujo@nest.edu.mn” хаягт илгээсэн баталгаажуулах кодыг оруулна уу
        </p>
        <InputOTP
          pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
          maxLength={4}
          value={otpValue}
          onChange={handleConfirmOtp}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <Button
        className="cursor-pointer text-muted-foreground mt-12 underline text-sm font-medium"
        onClick={handleResendOtp}
        variant="link"
      >
        Дахин илгээх ({countDown})
      </Button>
    </div>
  );
};

export default Otp;
