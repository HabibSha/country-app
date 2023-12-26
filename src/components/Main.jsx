import React, { useEffect, useState } from "react";
import Countries from "./Countries";
import Search from "./Search";

const url = "https://restcountries.com/v3.1/all";
const Main = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredCountries, setFilteredCountries] = useState(countries);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Failed to fetch!");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setCountries(data);
        setFilteredCountries(data);
        console.log(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  const loadingMessage = (
    <p className="text-[20px] text-center mt-[15px] text-slate-500 font-medium">
      Country is loading...
    </p>
  );
  const errorMessage = <p>{error}</p>;

  const handleRemoveCountry = (name) => {
    const filter = filteredCountries.filter(
      (country) => country.name.common !== name
    );
    setFilteredCountries(filter);
  };

  const handleSearch = (searchValue) => {
    let value = searchValue.toLowerCase();
    const newCountries = countries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value);
    });
    setFilteredCountries(newCountries);
  };

  return (
    <>
      <div className="w-[1000px] mx-auto p-[15px]">
        <h1 className="pt-[80px] text-center text-[40px] font-bold">
          Country App
        </h1>
        <Search onSearch={handleSearch} />
        {isLoading && loadingMessage}
        {error && errorMessage}
        {countries && (
          <Countries
            countries={filteredCountries}
            onRemoveCountry={handleRemoveCountry}
          />
        )}
      </div>
    </>
  );
};

export default Main;
