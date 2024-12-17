import React from "react";
import Image from "next/image";

// Images

import Image2 from "../pics/essential/Image2.png";
import Image3 from "../pics/essential/Image3.png";
import Image4 from "../pics/essential/Image4.png";

const Essential = () => {
  return (
    <div className="absolute top-[4574px] left-12 w-[1348px] h-full">
      <p className="text-[23px]">The Essentials</p>
      <div className="flex justify-between w-[1344px] absolute top-[52px]">
        <div id="1">
          <Image src={Image2} alt="Image"></Image>
          <button className="w-[85px] h-[39px] py-[7px] px-21 bg-[#FFFFFF] rounded-[30px] absolute top-[442px] left-[48px] hover:bg-black hover:text-white">
            Mens
          </button>
        </div>
        <div id="2" className="absolute left-[458px] h-[520px]">
          <Image src={Image3} alt="Image"></Image>
          <button className="w-[108px] h-[39px] py-[7px] px-21 bg-[#FFFFFF] rounded-[30px] absolute top-[442px] left-[48px] hover:bg-black hover:text-white">
            Womes's
          </button>
        </div>
        <div id="3" className="absolute left-[910px] h-[540px]">
          <Image src={Image4} alt="Image"></Image>
          <button className="w-[77px] h-[39px] py-[7px] px-21 bg-[#FFFFFF] rounded-[30px] absolute top-[442px] left-[48px] hover:bg-black hover:text-white">
            Kids'
          </button>
        </div>
      </div>
    </div>
  );
};

export default Essential;

