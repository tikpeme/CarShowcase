"use client";
import { SearchManufacturerProps } from "@/Types";
import React, { useState, Fragment, useEffect } from "react";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { manufacturers } from "@/constants";

const SearchManufacturer = ({
  selected,
  setSelected,
}: SearchManufacturerProps) => {
  const [query, setQuery] = useState("");
  const [filteredManufacturers, setFilteredManufacturers] = useState<string[]>(
    []
  );

  useEffect(() => {
    const filteredManufacturerArray = manufacturers.filter((manufacturer) =>
      query?.length === 0
        ? manufacturer
        : query.length === 1
        ? manufacturer
            .toLowerCase()
            .replace(/\s+/g, "")
            .startsWith(query.toLowerCase().replace(/\s+/g, ""))
        : manufacturer
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
    );
    //console.log("Manufacture value is " + selected);

    setFilteredManufacturers(filteredManufacturerArray);
    return () => {
      setFilteredManufacturers([]);
    };
  }, [query, selected]);

  ////console.log(filteredManufacturers);
  //console.log("Current query is " + query);

  return (
    <div className="search-manufacturer">
      <Combobox value={selected} onChange={setSelected} nullable>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              alt="Car logo"
              className="ml-4"
            />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelected(e.target.value);
            }}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Combobox.Options>
              {filteredManufacturers?.length === 0 && query !== "" ? (
                <Combobox.Option
                  value={query}
                  className="search-manufacturer___option"
                >
                  No results starting with "{query}"
                </Combobox.Option>
              ) : (
                filteredManufacturers.map((manufacturer) => (
                  <Combobox.Option
                    key={manufacturer}
                    value={manufacturer}
                    className={({ active }) =>
                      `relative search-manufacturer__option ${
                        active ? "bg-primary-blue text-white" : "text-gray-900"
                      }`
                    }
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {manufacturer}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-teal-600"
                            }`}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
