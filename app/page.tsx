import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/utils";
import Image from "next/image";

export default async function Home({ searchParams }) {
  const allCars: [] = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  console.log(allCars.length < 1);
  console.log(searchParams.fuel);

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="texs-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like!</p>
        </div>
        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels}></CustomFilter>
            <CustomFilter
              title="year"
              options={yearsOfProduction}
            ></CustomFilter>
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars.map((car, id) => (
                <CarCard key={id} car={car} />
              ))}
            </div>
            <ShowMore
              pageNumber={(searchParams.pageNumber || 10) / 10}
              isNext={searchParams.limit || 10}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold"> Oops, no results</h2>
            <p>{!allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
