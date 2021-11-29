import styled from "styled-components";
export const Title = styled.h2`
  font-size: 1.125rem;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.primary};

  @media ${({ theme }) => theme.media.medium} {
    ${({ isResponsive }) => isResponsive && `font-size:2rem`}
  }
`;
