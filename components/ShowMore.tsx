"use client";

import { ShowMoreProps } from "@/Types";
import { useRouter } from "next/navigation";
import React from "react";
import { CustomButton } from ".";
import { UpdateSearchParams } from "@/utils";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathName = UpdateSearchParams("limit", `${newLimit}`);

    router.push(newPathName);
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
