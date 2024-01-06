"use client";
import { constants } from "buffer";
import React, { use, useState } from "react";
import { SearchManufacturer } from ".";

const SearchBar = () => {
  const handleSearch = () => {};

  const [manufacturer, setManufacturer] = useState("");
  console.log("Current manufacturer is " + manufacturer);

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        ></SearchManufacturer>
      </div>
    </form>
  );
};

export default SearchBar;
