"use client";

import React, { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

import axios from "axios";
import { apiUrl } from "@/utils/util";
import { toast } from "react-toastify";
import { Cart } from "@/utils/interfaces";
import { Button } from "./ui/button";

const BasketProductDetail = () => {
  // const { cartData, getCart } = useCart();
  const [cartData, setCartData] = useState<Cart>([
    {
      product: {
        _id: "",
        name: "",
        description: "",
        price: 0,
        size: "",
        images: [""],
        isNew: false || true,
        quantity: 0,
        discount: 0,
        category: {},
      },
      quantity: 0,
    },
  ]);
  const getCartData = async () => {
    try {
      const userToken = localStorage.getItem("token");
      console.log("User Token:", userToken);
      const response = await axios.get(`${apiUrl}/api/v1/cart/get-cart`, {
        headers: { Authorization: `Bearer ${userToken}` },
      });
      console.log("response:", response);
      if (response.status === 200) {
        console.log("Cart Data:", response.data.cart.products);
        setCartData(response.data.cart.products);
      }
    } catch (error) {
      console.error("Error fetching data:");
      toast.error("Failed to fetch cart data");
    }
  };

  const updateQuanity = async (productId: string, newQuantity: number) => {
    setCartData((prevCart) =>
      prevCart.map((item) =>
        item.product._id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
    const userToken = localStorage.getItem("token");
    try {
      const response = await axios.put(
        `${apiUrl}/api/v1/cart/update-cart`,
        {
          productId,
          newQuantity,
        },
        { headers: { Authorization: `Bearer ${userToken}` } }
      );

      if (response.status === 200) {
        toast.success("Successfully updated");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to add to cart");
    }
  };

  useEffect(() => {
    getCartData();
  }, []);

  console.log("cartData", cartData);
  return (
    <div className="flex flex-col gap-5">
      {cartData.map((c) => {
        const { product } = c;
        console.log(product);
        return (
          <div className="w-[1000px] p-5 bg-white rounded-xl flex gap-5 border">
            <img
              className="w-[100px] h-[100px] bg-contain rounded-xl"
              src={product?.images[0]}
              alt="zurag"
            />
            <div className="flex justify-between w-full">
              <div className="flex flex-col gap-1 items-start">
                <p>{product?.name}</p>
                <div className="flex gap-1 items-center">
                  <Button
                    variant="outline"
                    className="rounded-full h-[30px] w-[30px] border border-black"
                    onClick={() => updateQuanity(product?._id, c.quantity + 1)}
                  >
                    +
                  </Button>

                  <p>{c.quantity}</p>
                  <Button
                    variant="outline"
                    className="rounded-full h-[30px] w-[30px] border border-black"
                    onClick={() =>
                      updateQuanity(product?._id, Math.max(0, c.quantity - 1))
                    }
                  >
                    -
                  </Button>
                </div>
                <p className="font-bold">{product?.price.toLocaleString()}₮</p>
              </div>
              <button>
                <RiDeleteBin6Line className="w-[20px] h-[20px]" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BasketProductDetail;
