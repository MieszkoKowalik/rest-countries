import SkeletonLine from "components/atoms/SkeletonLine/SkeletonLine";
import React from "react";
import { StyledP } from "./CountryDetail.styles";
const CountryDetail = ({ label, info, isResponsive = false }) => {
  return (
    <StyledP isResponsive={isResponsive}>
      {info !== undefined ? (
        <>
          <span>{label}: </span>
          {info}
        </>
      ) : (
        <SkeletonLine></SkeletonLine>
      )}
    </StyledP>
  );
};

export default CountryDetail;