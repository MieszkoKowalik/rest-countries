import { useEffect, useState } from "react";
import Card from "components/organisms/Card/Card";
import {
  StyledMain,
  CardsWrapper,
  CardsGrid,
  SearchBar,
} from "./Countries.styles";
import Search from "components/molecules/Search/Search";
import RegionFilter from "components/organisms/RegionFilter/RegionFilter";
import useFetch from "hooks/useFetch";
import { Link } from "react-router-dom";

const skeletonDummies = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
];

const API_URL = "https://restcountries.com/v3.1/all";
const PARAMS = {
  fields: "name,flags,region,population,capital",
};

const Countries = () => {
  const [currentCountries, setCurrentCountries] = useState([]);
  const [countriesData, setCountriesData] = useState([]);
  const { data, isLoading } = useFetch(API_URL, PARAMS);
  const [nameFilter, setNameFilter] = useState("");
  const [regionsFilter, setRegionsFilter] = useState([]);

  const filterCountriesByName = (value) => {
    const formatedValue = value.toLowerCase().trim();
    setNameFilter(formatedValue);
  };
  const filterCountriesbyRegion = (value) => {
    setRegionsFilter(value);
  };

  useEffect(() => {
    if (!data) return;
    const filteredCountries = countriesData.filter((country) => {
      const formatedName = country.name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      return (
        formatedName.startsWith(nameFilter) &&
        (regionsFilter.length ? regionsFilter.includes(country.region) : true)
      );
    });
    setCurrentCountries(filteredCountries);
  }, [data, countriesData, nameFilter, regionsFilter]);

  useEffect(() => {
    if (!data) return;
    const countries = data.map((country) => ({
      name: country.name.common,
      flag: country.flags.svg,
      population: country.population.toLocaleString(),
      capital: country.capital,
      region: country.region,
    }));
    countries.sort((a, b) => {
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    setCountriesData(countries);
  }, [data]);

  return (
    <StyledMain>
      <CardsWrapper>
        <SearchBar>
          <Search filterCountries={filterCountriesByName} />
          <RegionFilter filterCountriesbyRegion={filterCountriesbyRegion} />
        </SearchBar>

        <CardsGrid>
          {isLoading
            ? skeletonDummies.map((country, index) => (
                <Card isLoading key={country.id} {...country} />
              ))
            : currentCountries.map((country, index) => (
                <Link
                  to={`country/${encodeURIComponent(country.name)}`}
                  key={country.name}
                >
                  <Card isLoading={isLoading} {...country} />
                </Link>
              ))}
        </CardsGrid>
      </CardsWrapper>
    </StyledMain>
  );
};

export default Countries;
