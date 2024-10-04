import UserInfo from "@/components/user-info";
import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OrderInfo from "@/components/order-info";

const Purchase = () => {
  return (
    <div className="bg-gray-100 p-20 w-screen h-[800px]">
      <Tabs defaultValue="account" className=" flex gap-5 justify-center">
        <TabsList className="grid w-1/6 grid-cols-1 grid-rows-2 h-[80px]">
          <TabsTrigger value="account" className="rounded-full">
            Хэрэглэгчийн хэсэг
          </TabsTrigger>
          <TabsTrigger value="password" className="rounded-full">
            Захиалгын түүх
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="w-[500px]">
          <UserInfo />
        </TabsContent>
        <TabsContent value="password" className="w-[500px]">
          <OrderInfo />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Purchase;
