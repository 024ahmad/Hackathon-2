import React from "react";
import Image from "next/image";

// Images

import Image1 from "../pics/essential/Image1.png";

const Flight = () => {
  return (
    <div className="absolute top-[3513px] left-12 w-[1348px]">
      <p className="text-[22px]">Don't Miss</p>
      <div className="w-[1344px] h-[925px] absolute top-[52px] ">
        <Image src={Image1} alt="Image1"></Image>
        <div className="flex flex-col justify-between items-center w-[1008px] h-[177px] absolute top-[748px] left-[168px] ">
          <p className=" text-[54px] leading-[60px] ">FLIGHT ESSENTIALS</p>
          <p className=" font-normal text-[15px] ">
            Your built-to-last, all-week wears—but with style only Jordan Brand
            can deliver.
          </p>
          <div className="flex items-center justify-center w-[80px] h-[39px] rounded-[30px]  bg-[#111111] hover:bg-gray-700">
            <p className="text-center w-[106px] h-[24px] text-[15px] text-[#FFFFFF]">
              Shop
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flight;
