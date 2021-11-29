import styled from "styled-components";

export const StyledSection = styled.section`
  width: 264px;
  height: 346px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  box-shadow: 0px 1px 3px hsla(0, 0%, 0%, 0.2);
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
  box-shadow: inset 0 -1px 3px -1px #00000028;
`;
