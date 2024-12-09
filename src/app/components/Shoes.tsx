// React Icon

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

// Images
import Image from "next/image";

import Image1 from "../pics/shoes/Image1.png"
import Image2 from "../pics/shoes/Image2.png"


export default function Shoes () {
    return (
        <div className="flex w-[1440px] h-[604.36px] justify-center absolute top-[1190px] text-black ">
            {/* Scroll */}
            <div className="flex items-center w-[1440px] h-[52px] ">
                <p className="w-[161px] h-[27px] absolute top-[13px] left-12 text-[22px] leading-7">Best of Air Max</p>
                <div className="flex items-center w-[164px] h-12 absolute top-[3px] left-[1227px] pl-[7px] gap-3 ">
                    <p className="w-[37px] h-6 text-[15px]">Shop</p>
                    <div className="flex justify-center items-center w-12 h-12 rounded-[24px] bg-[#F5F5F5] hover:bg-gray-700">
                    <IoIosArrowBack className="text-[#CCCCCC] w-[24px] h-[24px]" />
                    </div>
                    <div className="flex justify-center items-center w-12 h-12 rounded-[24px] bg-[#E5E5E5] hover:bg-gray-700">
                    <IoIosArrowForward className="text-[#CCCCCC] w-[24px] h-[24px]"  />
                    </div>
                </div>
            </div>

            {/* Products */}
            <div className="flex w-[1440px] h-[540px] absolute top-[64px] items-center ">
                <div id="1" className="w-[441px] h-[510px] absolute left-[48px] border-[1px] border-tranparent hover:border-[1px] hover:border-black ">
                    <Image src={Image1} alt="Shoes1"></Image>
                    <div className="flex w-[425px] h-12 absolute top-[462px]">
                        <div className="w-[134px] pr-[4px]">
                            <p className="w-[131px] h-6 text-[15px]">Nike Air Max Pulse</p>
                            <p className="w-[109px] h-6 text-[15px] text-[#757575]">Women's Shoes</p>
                        </div>
                        <p className="w-[61px] h-[17px] absolute top-[3px] left-[363px] text-[15px]">₹ 13 995</p>
                    </div>
                </div>
                <div id="2" className="w-[441px] h-[510px] absolute left-[501px] border-[1px] border-tranparent hover:border-[1px] hover:border-black">
                    <Image src={Image1} alt="Shoes2"></Image>
                    <div className="flex w-[425px] h-12 absolute top-[462px] ">
                        <div className="w-[134px] pr-[4px]">
                            <p className="w-[131px] h-6 text-[15px]">Nike Air Max Pulse</p>
                            <p className="w-[109px] h-6 text-[15px] text-[#757575]">Men's Shoes</p>
                        </div>
                        <p className="w-[61px] h-[17px] absolute top-[3px] left-[363px] text-[15px]">₹ 13 995</p>
                    </div>
                </div>
                <div id="3" className="w-[441px] h-[510px] absolute left-[954px] border-[1px] border-tranparent hover:border-[1px] hover:border-black">
                    <Image src={Image2} alt="Shoes3"></Image>
                    <div className="flex w-[425px] h-12 absolute top-[462px]">
                        <div className="w-[137px] pr-[6px]">
                            <p className="w-[132px] h-6 text-[15px]">Nike Air Max 97 SE</p>
                            <p className="w-[109px] h-6 text-[15px] text-[#757575]">Men's Shoes</p>
                        </div>
                        <p className="w-[61px] h-[17px] absolute top-[3px] left-[363px] text-[15px]">₹ 13 995</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


















// const cardArray = [
//   {
//     id : '1',
//     parentSyle : "absolute left-[48px]",
//     imageSrc : Image1 ,
//     textBoxStyle : "absolute top-[462.36px] ",
//     para : "₹ 13 995"
//    },
//   {
//     id : '2',
//     parentSyle : "absolute left-[501px]",
//     imageSrc : Image1,
//     textBoxStyle : 'absolute top-[462.36px]' ,
//     para : "₹ 13 995"
//    },
//   {
//     id : '3',
//     parentSyle : "absolute left-[954px]",
//     imageSrc : Image2,
//     textBoxStyle : 'absolute top-[462.36px]' ,
//     para : "₹ 16 995"
//    },
// ]


// export default function Shoes () {
//   return (
//     <div className='w-[1440px] h-[540px] absolute top-10 left-10 border-[2px] border-black'>
//       {cardArray.map ((elem) => {
//         return (
//         <Cards 
//           key={elem.id}
//           parentSyle={elem.parentSyle}
//           imageSrc={elem.imageSrc}
//           textBoxStyle={elem.textBoxStyle}
//           para={elem.para}
//         />
//       )
//       })}
      

//     </div>


