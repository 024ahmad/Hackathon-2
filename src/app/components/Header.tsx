import Image from "next/image"

// Images

import Image1 from "../pics/header/Image1.png"
import Image2 from "../pics/header/Image2.png"

// React icons

import { FiSearch } from "react-icons/fi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { BsBag } from "react-icons/bs";

export default function Header (){
    return (
        <div className="flex flex-col w-[1440px] h-[96px] font-medium text-[11px] leading-[14px] border-[1px] border-transparent  hover:border-[1px] hover:border-black">
            <div id="navbar" className="flex w-[1440px] h-9 bg-[#F5F5F5]">
                <div id="1" className="w-6 h-6 absolute top-[6px] left-12 hover:border-[1px] border-black">
                    <Image src={Image1} alt="logo1"></Image>
                </div>
                <div id="navbar" className="flex w-[272px] items-center h-9 absolute left-[1129.19px] font-medium text-[11px] leading-[14px] ">
                    <div className="flex w-[98.5px] h-[34px] py-[10px] pr-[6.13px] pl-3 gap-[15.38px]">
                        <p className="w-[62px] h-[14px]">Find a Store</p>
                        <div className="w-[3px] h-[14px] bg-[#111111] "></div>
                    </div>
                    <div className="flex w-[51.81px] h-9 py-[11px] pr-[4.13px] pl-2 gap-[12.69px]">
                        <p className="w-[24px] h-[14px]">Help</p>
                        <div className="w-[3px] h-[14px] bg-[#111111] "></div>
                    </div>
                    <div className="flex w-[122.5px] h-9">
                        <p className="w-[39px] h-[14px] relative top-[11px] left-2">Join Us</p>
                        <div className="w-[3px] h-[14px] relative top-[11px] left-[15.02px] bg-[#111111] "></div>
                        <p className="w-[36px] h-[14px] relative top-[11px] left-[30.14px]">Sign In</p>
                    </div>
                </div>
            </div>
            <div id="header" className="flex items-center w-[1440px] h-[60px] absolute top-9 bg-[#FFFFFF] ">
                <div className="flex w-[760px] h-[60px] absolute top-1 left-[340px] text-[15px] leading-6 ">
                    <p className="w-[115.81px] h-[17px] absolute top-[17px] left-[160.06px] underline underline-transparent hover:underline hover:underline-offset-2">New & Featured</p>
                    <p className="w-[31.33px] h-[17px] absolute top-[17px] left-[299.67px] hover:underline-offset-2">Men</p>
                    <p className="w-[55.4px] h-[17px] absolute top-[17px] left-[354.8px] hover:underline-offset-2">Women</p>
                    <p className="w-[31.33px] h-[17px] absolute top-[17px] left-[433.64px] hover:underline-offset-2">Kids</p>
                    <p className="w-[32.23px] h-[17px] absolute top-[17px] left-[488.77px] hover:underline-offset-2">Sale</p>
                    <p className="w-[55.33px] h-[17px] absolute top-[17px] left-[544.8px] hover:underline-offset-2 font-base">SNKRS</p>
                </div>
                <div className="flex items-center w-[1440px] h-[60px] ">
                    <div id="1" className="w-[78-47px] h-[78-47px] absolute left-[38.26px] ">
                        <Image src={Image2} alt="logo"></Image>
                    </div>
                    <div id="2" className="flex items-center w-[1211px] h-[60px] absolute left-[107px] ">
                        <div className="w-[180px] h-10 absolute top-[10px] left-[1011px] ">
                            <div className="flex w-[180px] h-10 rounded-[100px] bg-[#F5F5F5] hover:border-[1px] border-black">
                                <div className="flex justify-center items-center w-10 h-9 absolute top-[2px] left-[2px] py-[6px] px-2 text-2xl">
                                    <FiSearch />
                                </div>

                                <input className="w-[84px] h-[18px] absolute top-[11px] left-[48px] text-[15px] leading-[18.31px] bg-[#F5F5F5] text-[#CCCCCC]" type="text" placeholder="Search" />
                            </div>
                        </div>
                    </div>
                    <div id="3" className="flex items-center justify-center w-[84px] h-[60px] absolute left-[1318px] py-3 gap-3 ">
                        <div className="flex items-center justify-center w-9 h-9 rounded-[5px] hover:border-[1px] border-black">
                        <MdOutlineFavoriteBorder className="w-9 h-9 text-[10px]"/>
                        </div>
                        <div className="flex items-center justify-center w-9 h-9 rounded-[5px] hover:border-[1px] border-black">
                        <BsBag className="w-9 h-7 text-black" />
                        </div>
                    </div>
                </div>
            </div>
    </div>
    )
}