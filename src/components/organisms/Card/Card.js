import CountryDetail from "components/atoms/CountryDetail/CountryDetail";
import SkeletonLine from "components/atoms/SkeletonLine/SkeletonLine";
import { Skeleton } from "components/atoms/Skeleton/Skeleton";
import { StyledSection, Flag, InfoWrapper, Title } from "./Card.styles";
import { Details } from "components/molecules/Details/Details";

const Card = ({ name, population, region, flags, capital }) => {
  return (
    <StyledSection>
      <Flag src={flags && flags.svg}>{flags ? null : <Skeleton />}</Flag>
      <InfoWrapper>
        <Title>{name ? name : <SkeletonLine></SkeletonLine>}</Title>
        <Details>
          <CountryDetail
            label="Population"
            info={population && population.toLocaleString()}
          />
          <CountryDetail label="Region" info={region} />
          <CountryDetail label="Capital" info={capital} />
        </Details>
      </InfoWrapper>
    </StyledSection>
  );
};

export default Card;
