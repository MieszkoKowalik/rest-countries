import styled from "styled-components";

export const StyledP = styled.p`
  font-size: 0.875rem;
  font-weight: 300;
  span {
    font-weight: 600;
  }

  @media ${({ theme }) => theme.media.medium} {
    ${({ isResponsive }) => isResponsive && `font-size:1rem`}
  }
`;
