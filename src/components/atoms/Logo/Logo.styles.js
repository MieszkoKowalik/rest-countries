import styled from "styled-components";

export const StyledH1 = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: clamp(1rem, 0.7111rem + 1.2327vw, 1.5rem);
  font-weight: 800;
`;
