import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
  background-color: ${({ theme }) => theme.colors.neutral};
`;
