import { useEffect, useState } from "react";
import Card from "components/molecules/Card/Card";
import { StyledMain, CardsWrapper, CardsGrid } from "./Countries.styles";
const API =
  "https://restcountries.com/v2/all?fields=name,flags,region,population,capital";

const skeletonDummies = [{}, {}, {}, {}, {}, {}, {}, {}];

const Countries = () => {
  const [countries, setCountries] = useState(skeletonDummies);
  const [displayedCountries, setDisplayedCountries] = useState(countries);

  const [inputValue, setInputValue] = useState("");
  const fetchData = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      setCountries(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    setDisplayedCountries(countries);
  }, [countries]);

  useEffect(() => {
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    const formatedInput = e.target.value.toLowerCase().trim();
    const filteredCountries = countries.filter((country) => {
      const formatedName = country.name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      return formatedName.startsWith(formatedInput);
    });
    console.log(filteredCountries);
    setDisplayedCountries(filteredCountries);
  };
  return (
    <StyledMain>
      <CardsWrapper>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <CardsGrid>
          {displayedCountries.map((country, index) => (
            <Card key={index} {...country} />
          ))}
        </CardsGrid>
      </CardsWrapper>
    </StyledMain>
  );
};

export default Countries;
