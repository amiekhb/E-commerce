import React from "react";
import { FaHeart } from "react-icons/fa";
import { Button } from "./ui/button";

const SavedProduct = () => {
  return (
    <div className="w-1/2 p-5 bg-white rounded-xl flex gap-5">
      <img
        className="w-[100px] h-[100px] bg-contain rounded-xl"
        src="https://s3-alpha-sig.figma.com/img/6b65/edf5/a857be2cdc56b0c4d9935e213699b666?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=geZ4NQnHuevQHWM2MhZUJl1XtvV9O62WZGaijJXuhpEi9jMhnrDMsMi7m2kK3CGdR8842jxT0Dai-usOi33ek6rLtNmF7bP1vu3CEYmdqmCK0yr98is2vL35HKmq-mDJ9KdHyWVXs3d3luzOARhhjbZuPfWlap9ru~N4Svlbn~ELnTl4uncoteJyMFHlj9Onbi1cSPszyq6Tmk1ES9xMviB0cLfr8SyOOybOOWeVO8XZndZEib5~ZCdKZYsFD7jQn5NP0MwKWLHrBTm~wskAUJHhkC8o-gkncwRJycPdQt8z81zKd~SH8l9eBD85qk4LpKd2QBht6byu1qpUc6Ozzg__"
        alt=""
      />
      <div className="flex justify-between w-full">
        <div className="flex flex-col gap-1 items-start">
          <p>Chunky Glyph Tee</p>
          <p className="font-bold">120’000₮</p>
          <Button className="bg-blue-700 rounded-full">Сагслах</Button>
        </div>

        <FaHeart className="w-[20px] h-[20px]" />
      </div>
    </div>
  );
};

export default SavedProduct;
