// "use client";

// import ProductCard, { BigProductCard } from "@/components/productCard";
// import { IProduct } from "@/utils/interfaces";
// import { apiUrl } from "@/utils/util";
// import axios from "axios";
// import { useEffect, useState } from "react";

// const page = () => {
//   const [product, setProduct] = useState<IProduct[]>([]);
//   const getAllProducts = async () => {
//     const response = await axios.get(`${apiUrl}/api/v1/product`);
//     setProduct(response.data.products);
//   };

//   useEffect(() => {
//     getAllProducts();
//   }, []);
//   return (
//     <div className="flex flex-col gap-5 w-full h-full bg-white items-center">
//       <div
//         className="bg-cover w-full h-[600px] flex flex-col gap-5 justify-end p-10 static"
//         style={{
//           backgroundImage: `url("/images/image1.png")`,
//         }}
//       >
//         <p>Wildflower Hoodie</p>
//         <h1 className="text-3xl font-semibold">120’000₮</h1>
//       </div>
//       <div className="grid grid-cols-4 gap-5 m-10 ">
//         {product.map((p, i) => {
//           if (i == 6 || i === 7) {
//             return <BigProductCard key={p._id} product={p} />;
//           }
//           return <ProductCard key={p._id} product={p} />;
//         })}
//       </div>
//     </div>
//   );
// };

// export default page;

// Page.tsx
"use client";

import ProductCard, { BigProductCard } from "@/components/productCard";
import { useProducts } from "@/provider/product-provider";

const Page = () => {
  const { products } = useProducts();

  return (
    <div className="flex flex-col gap-5 w-full h-full bg-white items-center">
      <div
        className="bg-cover w-full h-[600px] flex flex-col gap-5 justify-end p-10 static"
        style={{
          backgroundImage: `url("/images/image1.png")`,
        }}
      >
        <p>Wildflower Hoodie</p>
        <h1 className="text-3xl font-semibold">120’000₮</h1>
      </div>
      <div className="grid grid-cols-4 gap-5 mb-52 p-9">
        {products.map((p, i) => {
          return i === 6 || i === 7 ? (
            <BigProductCard key={p._id} product={p} />
          ) : (
            <ProductCard key={p._id} product={p} />
          );
        })}
      </div>
    </div>
  );
};

export default Page;
