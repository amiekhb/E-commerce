import React from "react";
import Image from "next/image";
import { url } from "inspector";
const ProductCard = () => {
  return (
    <div className="">
      <div className=" bg-cover h-[250px] w-[150px]">
        <img
          className="rounded-xl"
          src="https://s3-alpha-sig.figma.com/img/974f/255c/442865345ea31abbd131ca74d9c2d592?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SRCzIsCGmlFbQUKkLgq9su9mBjFEYzQxkbqdBV0j78xXyLXn~VNHQI8JFPG3H~znFaSAiAx5GGRgFK4i5y1kZEc0cVWDdAydvkb49Ahj5nIRqcHlZKZxZuVEDZPsQoZoBS4pbJIEU3uieftPjQiWbCmClU63MF~hYsQ4Bauv3xAhHpdLpi1GEDMnjqSWXS0a9GuqD3-rxLIGUXsRW4c4Ytx5VNOmL1Ex-nrSi~XfuBuQVzJuRsF1cC2B1qyqoqjRhk2CADB~YwBYUZymL77QMoTkwJpMSiCePizmXPBnhsvFY0wCNxCNV~koo06EsaOebN~HKmhpsx7l6hBimo4CZQ__"
          alt=""
        />
      </div>
      <h1>The Prompt Magazine</h1>
      <p className="font-semibold">120’000₮</p>
    </div>
  );
};

export default ProductCard;
