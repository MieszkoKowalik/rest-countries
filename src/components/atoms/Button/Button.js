import styled from "styled-components";

export const Button = styled.button`
  display: inline-block;
  padding: ${({ $isBig }) => ($isBig ? "6px 23px" : "6px 15px")};
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.secondary};
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.104931);
  transition: transform 0.2s;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ $isBig }) => ($isBig ? "0.875rem" : "0.75rem")};
  border: none;

  &:hover,
  &:focus-visible {
    transform: scale(1.1);
  }
  @media ${({ theme }) => theme.media.medium} {
    font-size: 0.875rem;
    ${({ $isBig }) => $isBig && "padding: 10px 33px"}
  }
`;
