import styled from "styled-components";

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
  user-select: none;

  @media ${({ theme }) => theme.media.medium} {
    font-size: 1rem;
  }
  path {
    stroke: ${({ theme }) => theme.colors.primary};
  }

  input {
    opacity: 0;
    position: absolute;
    cursor: pointer;
  }
`;
