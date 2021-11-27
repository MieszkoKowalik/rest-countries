import styled from "styled-components";

export const Skeleton = styled.span`
  display: inline-block;
  width: ${({ width }) => width || "100%"};
  height: 100%;
  background-color: ${({ theme }) => theme.colors.neutralDark};
`;
