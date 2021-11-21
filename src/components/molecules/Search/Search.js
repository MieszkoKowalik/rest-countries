import React from "react";
import { ReactComponent as SearchIcon } from "assets/images/search-icon.svg";
import { useEffect, useState } from "react";
import { StyledLabel } from "./Serach.styles";

const Search = ({ filterCountries }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    filterCountries(inputValue);
  }, [inputValue, filterCountries]);

  return (
    <StyledLabel>
      <SearchIcon />
      <input
        name="Search"
        type="text"
        id="search"
        placeholder="Search for a country…"
        value={inputValue}
        onChange={handleInputChange}
      ></input>
    </StyledLabel>
  );
};

export default Search;
