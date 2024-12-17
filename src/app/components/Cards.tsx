import Image from "next/image";

const Cards = ({
  imageSrc,
  title,
  category,
  color,
  price,
}: {
  imageSrc: any;
  title: string;
  category: string;
  color: string;
  price: number;
}) => {
  return (
    <div className="flex flex-col justify-evenly items-start w-[348px] h-[533px] mb-4 text-[15px] leading-6 font-normal group ">
      <Image
        src={imageSrc}
        alt="logo"
        className="transition-transform duration-300 group-hover:scale-110 "
      ></Image>
      <div className="flex flex-col items-start justify-evenly h-full">
        <p className="text-[#9E3500] font-medium text-[15px] leading-7">
          Just In
        </p>
        <h3 className="font-medium">{title}</h3>
        <p className="text-[#757575] font-normal">{category}</p>
        <p className="text-[#757575] font-normal">{color}</p>
        <p className="leading-7">MRP : ₹ {price}</p>
      </div>
    </div>
  );
};

export default Cards;
