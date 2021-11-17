import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;
export const ViewWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1280px;
`;
