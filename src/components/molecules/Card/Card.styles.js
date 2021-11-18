import styled from "styled-components";

export const StyledSection = styled.section`
  width: 264px;
  height: 346px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.0294384);
  overflow: hidden;
  color: ${({ theme }) => theme.colors.primary};
`;

export const InfoWrapper = styled.div`
  padding: 24px;
`;

export const Flag = styled.div.attrs(
  ({ src }) =>
    src && {
      style: {
        backgroundImage: `url(${src})`,
      },
    }
)`
  height: 160px;
  width: 100%;
  display: flex;
  justify-content: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: inset 0 0 3px #00000028;
`;

export const Title = styled.h1`
  font-size: 1.125rem;
  margin-bottom: 16px;

  @media ${({ theme }) => theme.media.medium} {
    ${({ isResponsive }) => isResponsive && `font-size:2rem`}
  }
`;
export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  ${({ hasBigGaps }) => hasBigGaps && `gap:9px`}
`;
