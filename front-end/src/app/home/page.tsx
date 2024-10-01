"use client";

import ProductCard from "@/components/productCard";

const page = ({ image, name, price }) => {
  const productCard = [
    {
      image:
        "https://s3-alpha-sig.figma.com/img/974f/255c/442865345ea31abbd131ca74d9c2d592?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SRCzIsCGmlFbQUKkLgq9su9mBjFEYzQxkbqdBV0j78xXyLXn~VNHQI8JFPG3H~znFaSAiAx5GGRgFK4i5y1kZEc0cVWDdAydvkb49Ahj5nIRqcHlZKZxZuVEDZPsQoZoBS4pbJIEU3uieftPjQiWbCmClU63MF~hYsQ4Bauv3xAhHpdLpi1GEDMnjqSWXS0a9GuqD3-rxLIGUXsRW4c4Ytx5VNOmL1Ex-nrSi~XfuBuQVzJuRsF1cC2B1qyqoqjRhk2CADB~YwBYUZymL77QMoTkwJpMSiCePizmXPBnhsvFY0wCNxCNV~koo06EsaOebN~HKmhpsx7l6hBimo4CZQ__",
      name: "The Prompt Magazine",
      price: "120’000₮",
    },
    {
      image: "",
      name: "",
      price: "",
    },
    {
      image: "",
      name: "",
      price: "",
    },
  ];
  return (
    <div className="flex flex-col gap-5 w-screen h-screen">
      <div
        className="bg-cover w-screen h-[600px] flex flex-col gap-5 justify-end p-10 static"
        style={{ backgroundImage: `url("/images/image1.png")` }}
      >
        <p>Wildflower Hoodie</p>
        <h1 className="text-3xl font-semibold">120’000₮</h1>
      </div>
      <div className="grid grid-cols-4 w-full h-full">
        {productCard.map(() => (
          <ProductCard image={image} name={name} price={price} />
        ))}
      </div>
    </div>
  );
};

export default page;
