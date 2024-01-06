import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  btnType?: "button" | "submit";
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}
