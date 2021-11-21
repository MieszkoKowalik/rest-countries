import { useEffect, useState, useCallback } from "react";
import Card from "components/molecules/Card/Card";
import { StyledMain, CardsWrapper, CardsGrid } from "./Countries.styles";
import Search from "components/molecules/Search/Search";
const API =
  "https://restcountries.com/v2/all?fields=name,flags,region,population,capital";

const skeletonDummies = [{}, {}, {}, {}, {}, {}, {}, {}];

const Countries = () => {
  const [countriesData, setCountriesData] = useState(skeletonDummies);
  const [currentCountries, setCountries] = useState(countriesData);
  const [isLoaded, setIsLoaded] = useState(false);
  const fetchData = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      setCountriesData(data);
      setIsLoaded(true);
    } catch (err) {
      console.error(err);
    }
  };

  const filterCountries = useCallback(
    (value) => {
      if (!isLoaded) return;
      const formatedValue = value.toLowerCase().trim();
      const filteredCountries = countriesData.filter((country) => {
        const formatedName = country.name
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");
        return formatedName.startsWith(formatedValue);
      });
      console.log(filteredCountries);
      setCountries(filteredCountries);
    },
    [countriesData, isLoaded]
  );

  useEffect(() => {
    setCountries(countriesData);
  }, [countriesData]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <StyledMain>
      <CardsWrapper>
        <Search filterCountries={filterCountries}></Search>
        <CardsGrid>
          {currentCountries.map((country, index) => (
            <Card key={index} {...country} />
          ))}
        </CardsGrid>
      </CardsWrapper>
    </StyledMain>
  );
};

export default Countries;
