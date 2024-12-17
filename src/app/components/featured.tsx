import React from "react";
import Image from "next/image";

// Images

import Image1 from "../pics/featured/Image1.png";

export default function Featured() {
  return (
    <div className="w-[1344px] h-[977px] absolute top-[1807px] left-12 ">
      <p className="w-[96px] h-[27px] text-[23px] leading-7 ">Featured</p>
      <div className="w-[1344px] h-[925px] absolute top-[52px] ">
        <Image src={Image1} alt="Image1"></Image>
        <div className="w-[1008px] h-[177px] absolute top-[748px] left-[168px] ">
          <p className="w-[806px] h-[60px] absolute left-[100px] text-[54px] leading-[60px] ">
            STEP INTO WHAT FEELS GOOD
          </p>
          <p className="w-[473px] h-[24px] absolute top-[84px] left-[268px] font-normal text-[15px] ">
            Cause everyone should know the feeling of running in that perfect
            pair.
          </p>
          <div className="flex items-center justify-center w-[152px] h-[39px] absolute top-[136px] left-[424px] rounded-[30px]  bg-[#111111] hover:bg-gray-700">
            <p className="text-center w-[106px] h-[24px] text-[15px] text-[#FFFFFF]">
              Find Your Shoe
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

