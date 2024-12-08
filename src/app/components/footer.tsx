// React Icon

import { RiTwitterFill } from "react-icons/ri";
import { TfiFacebook } from "react-icons/tfi";
import { TfiYoutube } from "react-icons/tfi";
import { ImInstagram } from "react-icons/im";
import { ImLocation } from "react-icons/im";

export default function Footer () {
    return (
        <div className="flex flex-col w-[1440px] h-[331px] absolute top-[5594.36px] bg-[#111111] text-[#FFFFFF] font-normal text-[10px] leading-[32.67px] border-[1px] border-white">
            <div id="1" className="flex w-[1372px] h-[213px] absolute top-10 left-[34px]">
                <div className="flex flex-col w-[1029px] h-[213px]">
                    {/* footer layer 1 */}
                    <div className="flex flex-col justify-center w-[245.25px] h-[169.63px] absolute left-[6px] c">
                        <p className="flex items-center w-[68px] h-4 absolute top-2  ">Find A Store</p>
                        <p className="flex items-center w-[98px] h-4 absolute top-[43px] ">Become A Member</p>
                        <p className="flex items-center w-[98px] h-4 absolute top-[79px] ">Sign Up for Email</p>
                        <p className="flex items-center w-[93px] h-4 absolute top-[110px] leading-6 ">Send Us Feedback</p>
                        <p className="flex items-center w-[104px] h-4 absolute top-[141px] text-[9px] ">Student Discounts</p>
                        

                    </div>

                    {/* footer layer 2 */}
                    <div className="flex flex-col justify-center w-[245.25px] h-[213px] absolute left-[263px]">
                        <p className="flex items-center w-[51px] h-4 absolute top-2 leading-6 ">Get Help</p>
                        <p className="flex items-center w-[68px] h-4 absolute top-[34px] text-[11px] leading-7 text-[#7E7E7E]">Order Status</p>
                        <p className="flex items-center w-[43px] h-4 absolute top-[65px] text-[12px] leading-7 text-[#7E7E7E]">Delivery</p>
                        <p className="flex items-center w-[42px] h-[16px] absolute top-[96px] text-[12px] leading-7 text-[#7E7E7E]">Returns</p>
                        <p className="flex items-center w-[92px] h-[14px] absolute top-[127px] text-[11px] leading-7 text-[#7E7E7E]">Payment Options</p>
                        <p className="flex items-center w-[180px] h-[14px] absolute top-[158px] text-[11px] leading-7 text-[#7E7E7E]">Contact Us On Nike.com Inquiries</p>
                        <p className="flex items-center w-[176px] h-[14px] absolute top-[189px] text-[11px] leading-7 text-[#7E7E7E]">[Order Status]</p>
                        <p className="flex items-center w-[68px] h-4 absolute top-[34px] text-[11px] leading-7 text-[#7E7E7E]">Order Status</p>
                    </div>
                    {/* footer layer 1 */}
                    <div className="flex flex-col justify-center w-[245.25px] h-[151px] absolute left-[520px] ">
                        <p className="flex items-center w-[64px] h-4 absolute top-1 leading-6 ">About Nike</p>
                        <p className="flex items-center w-[30px] h-[14px] absolute top-[34px] text-[12px] leading-7 text-[#7E7E7E]">News</p>
                        <p className="flex items-center w-[42px] h-[14px] absolute top-[65px] text-[12px] leading-7 text-[#7E7E7E]">Careers</p>
                        <p className="flex items-center w-[48px] h-[14px] absolute top-[96px] text-[11px] leading-7 text-[#7E7E7E]">Investors</p>
                        <p className="flex items-center w-[70px] h-[14px] absolute top-[127px] text-[11px] leading-7 text-[#7E7E7E]">Sustainability</p>
                    </div>
                </div>

                <div className="flex items-center w-[337px] h-[37px] absolute left-[1029px] border-[1px] border-transparent hover:border-[1px] hover:border-white">

                    {/* Twitter */}

                    <div id="1" className="flex items-center justify-center h-[30px] w-[30px] absolute left-[169px] rounded-full bg-[#7E7E7E] hover:border-[1px] border-white">
                        <RiTwitterFill className="text-black w-[20px] h-[20px]"/>
                    </div>

                    {/* Facebook */}

                    <div id="2" className="flex items-center justify-center h-[30px] w-[30px] absolute left-[215px] rounded-full bg-[#7E7E7E] hover:border-[1px] border-white">
                         <TfiFacebook className="text-black w-[20px] h-[20px]"/>
                    </div>

                    {/* Youtube */}

                    <div id="3" className="flex items-center justify-center h-[30px] w-[30px] absolute left-[261px] rounded-full bg-[#7E7E7E] hover:border-[1px] border-white">
                        <TfiYoutube className="text-black w-[20px] h-[20px]"/>
                    </div>

                    {/* Instagram */}

                    <div id="4" className="flex items-center justify-center h-[30px] w-[30px] absolute left-[307px] rounded-full bg-[#7E7E7E] hover:border-[1px] border-white">
                        <ImInstagram className="text-black w-[16px] h-[20px]"/>
                    </div>
                    
                </div>
            </div>

            <div id="2" className="w-[1372px] h-[62px] absolute top-[269px] left-[34px]">
                <div id="1" className="w-[672px] h-8 absolute top-3 left-2">
                    <p className="w-[200px] h-[14px] absolute top-[19px] left-[76px] text-[11px] leading-3 text-[#7E7E7E]">© 2023 Nike, Inc. All Rights Reserved</p>
                    <div className="flex items-center w-[60px] h-[15px] absolute top-[17px] pr-[8px] gap-2">
                        <ImLocation 
                        className="w-[18px] h-[15px] text-white"/>
                        <p className="w-[26px] h-3 text-[12px] leading-3">India</p>
                    </div>
                </div>

                <div id="2" className="flex items-center justify-center w-[660px] h-[46px] absolute top-4 left-[686px] text-[#7E7E7E]">
                    <p className="flex items-center justify-center w-[38px] h-[14px] absolute top-[17px] left-[298px] text-[12px] leading-7">Guides</p>

                    <p className="flex items-center justify-center w-[73px] h-[14px] absolute top-[17px] left-[363px] text-[12px] leading-7">Terms of Sale</p>

                    <p className="flex items-center justify-center w-[75px] h-[14px] absolute top-[17px] left-[460px] text-[12px] leading-7">Terms of Use</p>

                    <p className="flex items-center justify-center w-[102px] h-[14px] absolute top-[17px] left-[557px] text-[11px] leading-7">Nike Privacy Policy</p>



                    

                </div>

            </div>
            

        </div>
    )
}