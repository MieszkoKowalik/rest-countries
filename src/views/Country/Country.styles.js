import styled from "styled-components";
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
