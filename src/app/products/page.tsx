import React from "react";
import Image from "next/image";
import Cards from "../components/Cards";

// Images

import Icon from "../pics/all-products/icons/Icon.png";
import Frame1 from "../pics/all-products/Frame1.png";
import Frame2 from "../pics/all-products/Frame2.png";

// Icons

import { RiArrowDropDownLine } from "react-icons/ri";
import allProductCards from "../cards/AllProductCard";
import { allProductsArray } from "../components/productsArry";
import AllProductCards from "../cards/AllProductCard";

export default function Products() {
  return (
    <div className="flex flex-col justify-center w-[1440px] h-auto absolute top-[156px] text-[15px] font-medium leading-[21px] ">
      {/* Filter Div */}

      <div className="flex justify-between items-center px-4 w-[1440px] h-[51px] ">
        <h3 className="text-[24px] leading-[31px]">New (500)</h3>

        {/* Filter */}

        <div className="flex justify-between items-center w-[250px] ">
          <div className="flex justify-between w-[137px] ">
            <p className="text-[16px] font-normal leading-[28px]">
              Hide Filters
            </p>
            <Image src={Icon} alt=""></Image>
          </div>
          <div className="flex justify-between items-center w-[86px] ">
            <p className="text-[16px] font-normal leading-[28px]">Sort By</p>
            <RiArrowDropDownLine className="text-3xl" />
          </div>
        </div>
      </div>

      {/* Items Div */}

      <div className="flex justify-between items-start px-4 mt-4 w-[1440px] h-auto ">
        {/* Slidbar */}

        <div>
          <Image src={Frame1} alt=""></Image>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 max-w-[1092px]">
          {allProductsArray.map((item, key) => (
            <div key={item.id}>
              <AllProductCards
                imageSrc={item.imageSrc}
                title={item.title}
                category={item.category}
                color={item.color}
                price={item.price}
              />
            </div>
          ))}

          <div className="w-[1092px] h-auto ">
            <Image src={Frame2} alt=""></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
