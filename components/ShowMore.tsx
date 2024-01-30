"use client";

import { ShowMoreProps } from "@/Types";
import React from "react";
import { CustomButton } from ".";
import { UpdateSearchParams } from "@/utils";

const ShowMore = ({ pageNumber, isNext, setLimit }: ShowMoreProps) => {
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    setLimit(newLimit);
    console.log(newLimit);
  };

  return (
    <div className="w-full flex-center gap-f mt-10 ">
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full  text-white"
          handleClick={handleNavigation}
        ></CustomButton>
      )}
    </div>
  );
};

export default ShowMore;
