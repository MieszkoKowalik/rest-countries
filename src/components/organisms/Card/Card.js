import CountryDetail from "components/atoms/CountryDetail/CountryDetail";
import SkeletonLine from "components/atoms/SkeletonLine/SkeletonLine";
import { Skeleton } from "components/atoms/Skeleton/Skeleton";
import { StyledSection, Flag, InfoWrapper } from "./Card.styles";
import { Details } from "components/molecules/Details/Details";
import { Title } from "components/atoms/Title/Title";

const Card = ({ name, population, region, flag, capital, isLoading }) => {
  return (
    <StyledSection>
      <Flag source={flag}>{isLoading && <Skeleton />}</Flag>
      <InfoWrapper>
        <Title>{isLoading ? <SkeletonLine /> : name}</Title>
        <Details>
          <CountryDetail
            isLoading={isLoading}
            label="Population"
            info={population}
          />
          <CountryDetail isLoading={isLoading} label="Region" info={region} />
          <CountryDetail isLoading={isLoading} label="Capital" info={capital} />
        </Details>
      </InfoWrapper>
    </StyledSection>
  );
};

export default Card;
