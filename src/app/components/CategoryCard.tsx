import React from "react";

const CategoryCard = ({
  h3,
  p1,
  p2,
  p3,
  p4,
}: {
  h3: string;
  p1: string;
  p2: string;
  p3: string;
  p4: string;
}) => {
  return (
    <div className="text-black font-medium leading-6 h-[192px] flex flex-col justify-between items-start text-[15px]">
      <h3>{h3}</h3>
      <p className="text-[#757575]">{p1}</p>
      <p className="text-[#757575]">{p2}</p>
      <p className="text-[#757575]">{p3}</p>
      <p className="text-[#757575]">{p4}</p>
    </div>
  );
};

export default CategoryCard;
