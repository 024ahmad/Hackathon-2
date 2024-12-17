// React Icon

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import Image from "next/image";

import Image1 from "../pics/gearup/Image1.png";
import Image2 from "../pics/gearup/Image2.png";
import Image3 from "../pics/gearup/Image3.png";
import Image4 from "../pics/gearup/Image4.png";

export default function Gear() {
  return (
    <div className="flex w-[1344px] h-[561px] absolute top-[2868px] left-[48px] text-black  ">
      {/* Text */}
      <p className="w-[90px] h-[27px] text-[23px] leading-7">Gear Up</p>

      {/* Products */}
      <div className="flex w-[1354px] h-[509px] absolute top-[52px] black ">
        <div id="1" className="flex w-[666px] h-[509px] ">
          {/* Scroll */}
          <div className="flex items-center w-[211px] h-[48px] absolute top-[2px] left-[407px]  ">
            <p className="w-[83px] h-[24px] absolute top-[12px] left-[7px] text-[15px] leading-6">
              Shop Men's
            </p>
            <div
              className="flex justify-center items-center w-12 h-12
                        absolute left-[103px] rounded-[24px] bg-[#F5F5F5] hover:bg-gray-700"
            >
              <IoIosArrowBack className="text-[#CCCCCC] w-[24px] h-[24px]" />
            </div>
            <div className="flex justify-center items-center w-12 h-12 absolute left-[163px] rounded-[24px] bg-[#E5E5E5] hover:bg-gray-700">
              <IoIosArrowForward className="text-[#CCCCCC] w-[24px] h-[24px]" />
            </div>
          </div>
          {/* Desing */}
          <div
            id="main1"
            className="flex w-[666px] h-[407px] absolute top-[62px] "
          >
            <div
              id="1"
              className="w-[300px] h-[393px] absolute left-[48px] border-[1px] border-tranparent hover:border-[1px] hover:border-black "
            >
              <Image src={Image1} alt="1"></Image>
              <div className="flex w-[284px] h-[72] absolute top-[321px]">
                <div className="w-[231px] pr-[12px]">
                  <p className="w-[219px] h-6 text-[15px]">
                    Nike Dri-FIT ADV TechKnit Ultra
                  </p>
                  <p className="w-[203px] h-12 text-[16px] text-[#757575]">
                    Men's Short-Sleeve Running Top
                  </p>
                </div>
                <p className="w-[62px] h-[17px] absolute top-[3px] left-[231px] text-[15px]">
                  ₹ 13 995
                </p>
              </div>
            </div>
            <div
              id="2"
              className="w-[300px] h-[393px] absolute left-[360px] border-[1px] border-tranparent hover:border-[1px] hover:border-black "
            >
              <Image src={Image2} alt="Shoes1"></Image>
              <div className="flex w-[284px] h-[72] absolute top-[321px]">
                <div className="w-[221px] pr-[31px] ">
                  <p className="w-[162px] h-6 text-[15px]">
                    Nike Dri-FIT Challenger
                  </p>
                  <p className="w-[199px] h-12 text-[16px] text-[#757575]">
                    Men's 18cm (approx.) 2-in-1 Versatile Shorts
                  </p>
                </div>
                <p className="w-[68px] h-[17px] absolute top-[3px] left-[221px] text-[15px] ">
                  ₹ 2 4955
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="2" className="flex w-[666px] h-[509px] absolute left-[684px]">
          {/* Scroll */}
          <div className="flex items-center w-[234px] h-[48px] absolute top-[2px] left-[383px]">
            <p className="w-[106px] h-[24px] absolute top-[12px] left-[7px] text-[15px] leading-6">
              Shop Women's
            </p>
            <div
              className="flex justify-center items-center w-12 h-12
                        absolute left-[126px] rounded-[24px] bg-[#F5F5F5] hover:bg-gray-700"
            >
              <IoIosArrowBack className="text-[#CCCCCC] w-[24px] h-[24px]" />
            </div>
            <div className="flex justify-center items-center w-12 h-12 absolute left-[186px] rounded-[24px] bg-[#E5E5E5] hover:bg-gray-700">
              <IoIosArrowForward className="text-[#CCCCCC] w-[24px] h-[24px]" />
            </div>
          </div>
          {/* Desing */}
          <div
            id="main2"
            className="flex w-[666px] h-[447px] absolute top-[62px] "
          >
            <div
              id="1"
              className="w-[300px] h-[393px] absolute left-[48px] border-[1px] border-tranparent hover:border-[1px] hover:border-black "
            >
              <Image src={Image3} alt="1"></Image>
              <div className="flex w-[284px] h-[72] absolute top-[321px]">
                <div className="w-[231px] pr-[12px]">
                  <p className="w-[208px] h-6 text-[15px]">
                    Nike Dri-FIT ADV Run Division
                  </p>
                  <p className="w-[224px] h-12 text-[16px] text-[#757575]">
                    Women's Long-Sleeve Running Top
                  </p>
                </div>
                <p className="w-[62px] h-[17px] absolute top-[3px] left-[231px] text-[15px]">
                  ₹ 5 295
                </p>
              </div>
            </div>
            <div
              id="2"
              className="w-[300px] h-[393px] absolute left-[360px] border-[1px] border-tranparent hover:border-[1px] hover:border-black "
            >
              <Image src={Image4} alt="Shoes1"></Image>
              <div className="flex w-[284px] h-[72] absolute top-[321px]">
                <div className="w-[231px] pr-[72px] ">
                  <p className="w-[66px] h-6 text-[15px]">Nike Fast</p>
                  <p className="w-[224px] h-12 text-[16px] font-normal text-[#757575]">
                    Women's Mid-Rise 7/8 Running Leggings with Pockets
                  </p>
                </div>
                <p className="w-[68px] h-[17px] absolute top-[3px] left-[231px] text-[15px] ">
                  ₹ 3 795
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}