import Image from "next/image"

// Images

import Image1 from "../pics/hero/Image1.png"

export default function Hero () {
    return (
        <div className="w-auto h-auto absolute font-medium text-[#111111] leading-6 border-[1px] border-black">
            {/* Heading div */}
            <div id="heading" className="flex flex-col items-center w-[1440px] h-[58px] absolute ">
                <p className="flex items-center w-[106px] h-[17px] absolute top-2 left-[667px] text-[15px] leading-4 ">Hello Nike App</p>
                <div className="flex items-center w-[323px] h-[24px] absolute top-[30px] left-[558px] pr-[12px] pl-[11px] ">
                    <p className=" w-[303px] h-[24px] font-normal text-[11px]">
                    Download the app to access everything Nike. <span className="text-[11px] font-medium underline decoration-solid cursor-pointer"> Get Your Great</span>
                    </p>
                </div>
            </div>
            {/* Image div */}
            <div className="flex flex-col w-[1344px] h-[977px] absolute top-[58px] left-[48px] ">
                {/* Image */}
                <div className="w-[1340px] h-[700px] ">
                    <Image src={Image1} alt="Image"></Image>
                </div>
                {/* Text */}
                <div className="flex flex-col items-center w-[1008px] h-[229px] absolute top-[748px] left-[168px] ">
                    <div id="1" className="flex items-center w-[71px] h-[24px] absolute left-[468px] text-[15px] ">First Look</div>
                    <div id="2" className="flex items-center justify-center w-[574px] h-[60px] absolute top-[28px] left-[216px] text-[56px] leading-[60px] ">Nike Air Max Pulse
                        
                    </div>
                    <div id="3" className="flex items-center text-center w-[550px] h-[48px] absolute top-[112px] font-normal ">
                    Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
                    —designed to push you past your limits and help you go to the max.

                    </div>
                    <div id="4" className="flex items-center w-[1008px] h-[45px] absolute top-[184px] gap-[6px] pt-[6px] pr-[379px] pl-[373px] text-[#FFFFFF] ">
                        <div id="1" className="flex items-center justify-center w-[110px] h-[39px] rounded-[30px] py-[7.5px] bg-[#111111] hover:bg-gray-700 ">
                            <p className="flex items-center justify-center w-[77px] h-[24px] text-[15px]">
                                Notify Me
                            </p>
                        </div>

                        <div id="2" className="flex items-center justify-center w-[138px] h-[39px] rounded-[30px] py-[7.5px] pl-[21px] pr-[22px] bg-[#111111] hover:bg-gray-700">
                            <p className="w-[94px] h-[24px] text-[15px]">
                                Shop Air Max    
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}