import styled from "styled-components";
export const StyledMain = styled.main`
  padding: 24px 16px;
  @media ${({ theme }) => theme.media.medium} {
    padding: 48px 16px;
  }
`;

export const CardsWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;
export const CardsGrid = styled.div`
  width: 100%;
  justify-content: center;
  display: grid;
  gap: 74px;
  grid-template-columns: repeat(auto-fill, 264px);

  a {
    transition: transform 0.2s;
    text-decoration: none;
    &:hover,
    &:focus {
      transform: scale(1.1);
    }
  }
`;
export const SearchBar = styled.div`
  display: flex;
  gap: 40px;
  padding-bottom: 32px;
  flex-wrap: wrap;
  justify-content: space-between;
`;
