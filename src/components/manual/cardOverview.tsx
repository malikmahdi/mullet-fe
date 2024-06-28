import React from "react";

interface ICard {
  title: string;
  nominal: string;
}

const CardOverview: React.FC<ICard> = ({ title, nominal }) => {
  return (
    <>
      <div className="bg-white flex items-center w-72 px-5 py-4 shadow-sm rounded-lg cursor-pointer hover:shadow-lg">
        <div className="w-full h-full flex flex-col justify-center px-2">
          <h5 className="text-xl text-[#747c80] font-medium">{title}</h5>
          <h5 className="text-3xl text-[#cdbc25] font-bold">Rp.{nominal}</h5>
        </div>
      </div>
    </>
  );
};

export default CardOverview;
