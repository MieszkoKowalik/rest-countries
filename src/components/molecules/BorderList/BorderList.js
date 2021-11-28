import React from "react";
import useFetch from "hooks/useFetch";
import { Link } from "react-router-dom";
import { Button } from "components/atoms/Button/Button";
import styled from "styled-components";
import { Skeleton } from "components/atoms/Skeleton/Skeleton";

export const StyledLink = styled(Link)``;

const API_URL = "https://restcountries.com/v3.1/alpha";
let params = {
  codes: "",
  fields: "name",
};

const skeletonDummies = [{}, {}, {}];
const BorderList = ({ countries }) => {
  params.codes = countries.join(",");
  const shouldSkipFetching = countries.length ? false : true;

  const { data, isLoading } = useFetch(API_URL, params, shouldSkipFetching);

  if (!countries.length) {
    return <p>There are no border countries</p>;
  }

  return (
    <>
      {(!data || isLoading) &&
        skeletonDummies.map((dummy, index) => (
          <Button key={index}>
            <Skeleton width="5em"></Skeleton>
          </Button>
        ))}
      {data &&
        !isLoading &&
        data.map((country) => (
          <Button
            as={Link}
            key={country.name.common}
            to={`/country/${country.name.common}`}
          >
            {country.name.common}
          </Button>
        ))}
    </>
  );
};

export default BorderList;
