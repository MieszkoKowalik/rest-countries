import useFetch from "hooks/useFetch";
import { useParams } from "react-router";
import { Details } from "components/molecules/Details/Details";
import CountryDetail from "components/atoms/CountryDetail/CountryDetail";
import { Title } from "components/atoms/Title/Title";
import SkeletonLine from "components/atoms/SkeletonLine/SkeletonLine";
import { Skeleton } from "components/atoms/Skeleton/Skeleton";
import BorderList from "components/molecules/BorderList/BorderList";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ReactComponent as ArrowIcon } from "assets/images/arrow-icon.svg";
import { ButtonWithIcon } from "components/atoms/ButtonWithIcon/ButtonWithIcon";
import { useState } from "react";

export const BorderWrapper = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  margin-top: 32px;
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
  @media ${({ theme }) => theme.media.large} {
    margin-top: 80px;
  }
`;

export const StyledMain = styled.main`
  padding: 0 28px 40px;
  width: 100%;
`;
export const Flag = styled.div`
  width: 100%;
  max-width: 560px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 50%;
  min-height: 150px;
  height: 100%;
`;

export const ImgWrapper = styled.div`
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.0594384);
  border-radius: 10px;
  overflow: hidden;
  height: min-content;
  img {
    display: block;
    width: 100%;
  }
`;
export const TopBar = styled.div`
  margin-top: 40px;
  margin-bottom: 64px;
  @media ${({ theme }) => theme.media.medium} {
    margin-top: 80px;
    margin-bottom: 80px;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  flex-direction: column;
  gap: 44px;
  @media ${({ theme }) => theme.media.medium} {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;

export const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media ${({ theme }) => theme.media.large} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const API_URL = "https://restcountries.com/v3.1/name/";
const PARAMS = {
  fields:
    "flags,name,population,region,subregion,capital,tld,currencies,languages,borders",
  fullText: true,
};

const defaultData = {
  infos: {
    "Native Name": null,
    Population: null,
    "Sub Region": null,
    Capital: null,
  },
  additionalInfos: {
    "Top Level Domain": null,
    Currencies: null,
    Languages: null,
  },
  name: null,
  flag: null,
  borders: [],
};

const Country = () => {
  const { name } = useParams();
  const { data, isLoading, updateUrl } = useFetch(API_URL + name, PARAMS);
  const [countryData, setCountryData] = useState(defaultData);
  console.log(countryData, "state");
  console.log(data);

  useEffect(() => {
    if (!data) return;
    const [country] = data;
    setCountryData({
      infos: {
        "Native Name": Object.values(country.name.nativeName)[0]
          ? Object.values(Object.values(country.name.nativeName)[0])[0]
          : null,
        Population: country.population.toLocaleString(),
        "Sub Region": country.subregion,
        Capital: country.capital,
      },
      additionalInfos: {
        "Top Level Domain": country.tld.join(", "),
        Currencies: Object.values(country.currencies)
          .map((currency) => currency.name)
          .join(", "),
        Languages: Object.values(country.languages)
          .map((language) => language)
          .join(", "),
      },
      name: country.name.common,
      flag: country.flags.svg,
      borders: country.borders,
    });
  }, [data]);
  useEffect(() => {
    updateUrl(API_URL + name);
  }, [name, updateUrl]);

  return (
    <StyledMain>
      <Wrapper>
        <TopBar>
          <ButtonWithIcon $isBig as={Link} to="/">
            <ArrowIcon />
            Back
          </ButtonWithIcon>
        </TopBar>

        <InfoWrapper>
          <Flag>
            {isLoading ? (
              <Skeleton />
            ) : (
              <ImgWrapper>
                <img src={countryData.flag} alt="" />
              </ImgWrapper>
            )}
          </Flag>

          <div>
            <Title isResponsive>
              {!isLoading ? countryData.name : <SkeletonLine></SkeletonLine>}
            </Title>

            <DetailsWrapper>
              <Details hasBigGaps>
                {Object.entries(countryData.infos).map(([key, val]) => (
                  <CountryDetail
                    isResponsive
                    key={key}
                    isLoading={isLoading}
                    label={key}
                    info={val}
                  />
                ))}
              </Details>
              <Details hasBigGaps>
                {Object.entries(countryData.additionalInfos).map(
                  ([key, val]) => (
                    <CountryDetail
                      isResponsive
                      key={key}
                      isLoading={isLoading}
                      label={key}
                      info={val}
                    />
                  )
                )}
              </Details>
            </DetailsWrapper>

            <BorderWrapper>
              {data && !isLoading ? (
                <>
                  <span>Border Countries:</span>
                  <BorderList countries={countryData.borders} />
                </>
              ) : (
                <SkeletonLine></SkeletonLine>
              )}
            </BorderWrapper>
          </div>
        </InfoWrapper>
      </Wrapper>
    </StyledMain>
  );
};

export default Country;
