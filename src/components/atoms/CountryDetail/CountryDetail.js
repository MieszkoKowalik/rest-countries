import SkeletonLine from "components/atoms/SkeletonLine/SkeletonLine";
import React from "react";
import { StyledP } from "./CountryDetail.styles";
const CountryDetail = ({ label, info, isResponsive = false, isLoading }) => {
  return (
    <StyledP isResponsive={isResponsive}>
      {!isLoading ? (
        <>
          <span>{label}:&nbsp;</span>
          {info && info.length ? info : "N/A"}
        </>
      ) : (
        <SkeletonLine></SkeletonLine>
      )}
    </StyledP>
  );
};

export default CountryDetail;
