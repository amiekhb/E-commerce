import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const OrderInfo = () => {
  return (
    <div className=" flex flex-col w-full max-w-sm ">
      <p className="font-semibold text-2xl p-5">Захиалгын түүх</p>
      <div className="p-5 border-t w-[800px] flex flex-col gap-5">
        <Accordion type="single" collapsible>
          <div className="bg-white p-5 rounded-xl">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="flex gap-3 items-center">
                  <p className=" font-bold">2024-09-03 15:34</p>
                  <div className="badge badge-primary text-white">
                    хүргэлтэнд гарсан
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div>
                  <div className="flex flex-col gap-3 p-5 border-dashed border-b">
                    <div className="flex justify-between ">
                      <div className="flex gap-5">
                        <img
                          className="w-[50px] h-[50px] rounded-lg"
                          src="https://s3-alpha-sig.figma.com/img/6b65/edf5/a857be2cdc56b0c4d9935e213699b666?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=geZ4NQnHuevQHWM2MhZUJl1XtvV9O62WZGaijJXuhpEi9jMhnrDMsMi7m2kK3CGdR8842jxT0Dai-usOi33ek6rLtNmF7bP1vu3CEYmdqmCK0yr98is2vL35HKmq-mDJ9KdHyWVXs3d3luzOARhhjbZuPfWlap9ru~N4Svlbn~ELnTl4uncoteJyMFHlj9Onbi1cSPszyq6Tmk1ES9xMviB0cLfr8SyOOybOOWeVO8XZndZEib5~ZCdKZYsFD7jQn5NP0MwKWLHrBTm~wskAUJHhkC8o-gkncwRJycPdQt8z81zKd~SH8l9eBD85qk4LpKd2QBht6byu1qpUc6Ozzg__"
                          alt=""
                        />

                        <div className="flex flex-col gap-3">
                          <p>Chunky Glyph Tee</p>
                          <p>1 x 120’000₮</p>
                        </div>
                      </div>
                      <p className="font-bold">120’000₮</p>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex gap-5">
                        <img
                          className="w-[50px] h-[50px] rounded-lg"
                          src="https://s3-alpha-sig.figma.com/img/6b65/edf5/a857be2cdc56b0c4d9935e213699b666?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=geZ4NQnHuevQHWM2MhZUJl1XtvV9O62WZGaijJXuhpEi9jMhnrDMsMi7m2kK3CGdR8842jxT0Dai-usOi33ek6rLtNmF7bP1vu3CEYmdqmCK0yr98is2vL35HKmq-mDJ9KdHyWVXs3d3luzOARhhjbZuPfWlap9ru~N4Svlbn~ELnTl4uncoteJyMFHlj9Onbi1cSPszyq6Tmk1ES9xMviB0cLfr8SyOOybOOWeVO8XZndZEib5~ZCdKZYsFD7jQn5NP0MwKWLHrBTm~wskAUJHhkC8o-gkncwRJycPdQt8z81zKd~SH8l9eBD85qk4LpKd2QBht6byu1qpUc6Ozzg__"
                          alt=""
                        />

                        <div className="flex flex-col gap-3">
                          <p>Chunky Glyph Tee</p>
                          <p>1 x 120’000₮</p>
                        </div>
                      </div>
                      <p className="font-bold">120’000₮</p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
              <div className="flex justify-between p-3 ">
                <h1 className="text-xl">Үнийн дүн:</h1>
                <h1 className="font-bold text-xl">480’000₮</h1>
              </div>
            </AccordionItem>
          </div>
        </Accordion>
        <Accordion type="single" collapsible>
          <div className="bg-white p-5 rounded-xl">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="flex gap-3 items-center">
                  <p className=" font-bold">2024-09-03 15:34</p>
                  <div className="badge badge-primary text-white">
                    хүргэлтэнд гарсан
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div>
                  <div className="flex flex-col gap-3 p-5 border-dashed border-b">
                    <div className="flex justify-between ">
                      <div className="flex gap-5">
                        <img
                          className="w-[50px] h-[50px] rounded-lg"
                          src="https://s3-alpha-sig.figma.com/img/6b65/edf5/a857be2cdc56b0c4d9935e213699b666?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=geZ4NQnHuevQHWM2MhZUJl1XtvV9O62WZGaijJXuhpEi9jMhnrDMsMi7m2kK3CGdR8842jxT0Dai-usOi33ek6rLtNmF7bP1vu3CEYmdqmCK0yr98is2vL35HKmq-mDJ9KdHyWVXs3d3luzOARhhjbZuPfWlap9ru~N4Svlbn~ELnTl4uncoteJyMFHlj9Onbi1cSPszyq6Tmk1ES9xMviB0cLfr8SyOOybOOWeVO8XZndZEib5~ZCdKZYsFD7jQn5NP0MwKWLHrBTm~wskAUJHhkC8o-gkncwRJycPdQt8z81zKd~SH8l9eBD85qk4LpKd2QBht6byu1qpUc6Ozzg__"
                          alt=""
                        />

                        <div className="flex flex-col gap-3">
                          <p>Chunky Glyph Tee</p>
                          <p>1 x 120’000₮</p>
                        </div>
                      </div>
                      <p className="font-bold">120’000₮</p>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex gap-5">
                        <img
                          className="w-[50px] h-[50px] rounded-lg"
                          src="https://s3-alpha-sig.figma.com/img/6b65/edf5/a857be2cdc56b0c4d9935e213699b666?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=geZ4NQnHuevQHWM2MhZUJl1XtvV9O62WZGaijJXuhpEi9jMhnrDMsMi7m2kK3CGdR8842jxT0Dai-usOi33ek6rLtNmF7bP1vu3CEYmdqmCK0yr98is2vL35HKmq-mDJ9KdHyWVXs3d3luzOARhhjbZuPfWlap9ru~N4Svlbn~ELnTl4uncoteJyMFHlj9Onbi1cSPszyq6Tmk1ES9xMviB0cLfr8SyOOybOOWeVO8XZndZEib5~ZCdKZYsFD7jQn5NP0MwKWLHrBTm~wskAUJHhkC8o-gkncwRJycPdQt8z81zKd~SH8l9eBD85qk4LpKd2QBht6byu1qpUc6Ozzg__"
                          alt=""
                        />

                        <div className="flex flex-col gap-3">
                          <p>Chunky Glyph Tee</p>
                          <p>1 x 120’000₮</p>
                        </div>
                      </div>
                      <p className="font-bold">120’000₮</p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
              <div className="flex justify-between p-3">
                <h1 className="text-xl">Үнийн дүн:</h1>
                <h1 className="font-bold text-xl">480’000₮</h1>
              </div>
            </AccordionItem>
          </div>
        </Accordion>
      </div>
    </div>
  );
};

export default OrderInfo;
