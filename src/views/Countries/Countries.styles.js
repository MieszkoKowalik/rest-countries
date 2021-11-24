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
`;
