import { useEffect, useState } from "react";
import Card from "components/molecules/Card/Card";
import { StyledMain, CardsWrapper, CardsGrid } from "./Countries.styles";
const API =
  "https://restcountries.com/v2/all?fields=name,flags,region,population,capital";

const skeletonDummies = [{}, {}, {}, {}, {}, {}, {}, {}];

const Countries = () => {
  const [countries, setCountries] = useState(skeletonDummies);
  console.log(countries.length ? true : false);
  const fetchData = async () => {
    const response = await fetch(API);
    const data = await response.json();
    setCountries(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <StyledMain>
      <CardsWrapper>
        <CardsGrid>
          {countries.map((country, index) => (
            <Card key={index} {...country} />
          ))}
        </CardsGrid>
      </CardsWrapper>
    </StyledMain>
  );
};

export default Countries;
