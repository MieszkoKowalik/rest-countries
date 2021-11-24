import { useEffect, useState } from "react";
import Card from "components/molecules/Card/Card";
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

const API_URL = "https://restcountries.com/v2/all";
const PARAMS = {
  fields: "name,flags,region,population,capital",
};

const Countries = () => {
  const [currentCountries, setCurrentCountries] = useState([]);
  const { data, isLoading } = useFetch(API_URL, PARAMS);
  const [nameFilter, setNameFilter] = useState("");
  const [regionsFilter, setRegionsFilter] = useState([]);

  const filterCountries = (value) => {
    const formatedValue = value.toLowerCase().trim();
    setNameFilter(formatedValue);
  };
  const filterCountriesbyRegion = (value) => {
    setRegionsFilter(value);
  };

  useEffect(() => {
    if (!data) return;
    const filteredCountries = data.filter((country) => {
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
  }, [data, nameFilter, regionsFilter]);

  useEffect(() => {
    if (!data) return;
    setCurrentCountries(data);
  }, [data]);

  return (
    <StyledMain>
      <CardsWrapper>
        <SearchBar>
          <Search filterCountries={filterCountries} />
          <RegionFilter filterCountriesbyRegion={filterCountriesbyRegion} />
        </SearchBar>

        <CardsGrid>
          {isLoading
            ? skeletonDummies.map((country, index) => (
                <Card key={country.id} {...country} />
              ))
            : currentCountries.map((country, index) => (
                <Link to={`country/${country.name}`} key={country.name}>
                  <Card {...country} />
                </Link>
              ))}
        </CardsGrid>
      </CardsWrapper>
    </StyledMain>
  );
};

export default Countries;
