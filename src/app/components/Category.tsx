import React from "react";
import CategoryCard from "./CategoryCard";

const Category = () => {
  return (
    <div className="flex justify-between w-[880px] h-[192px] absolute top-[5250px] left-[280px]  ">
      <CategoryCard
        h3="Icons"
        p1="Air Force 1"
        p2="Huarache"
        p3="Air Max 90"
        p4="Air Max 95"
      />
      <CategoryCard
        h3="Shoes"
        p1="All Shoes"
        p2="Custom Shoes"
        p3="Jordan Shoes"
        p4="Ruuning Shoes"
      />
      <CategoryCard
        h3="Clothing"
        p1="All Clothing"
        p2="Modest Wear"
        p3="Hoodies & Pullovers"
        p4="Shirts & Tops"
      />
      <CategoryCard
        h3="Kids'"
        p1="Infant & Toddler Shoes"
        p2="Kids Shoes"
        p3="Kids Jordan Shoes"
        p4="Kids Basketball Shoes"
      />
    </div>
  );
};

export default Category;
