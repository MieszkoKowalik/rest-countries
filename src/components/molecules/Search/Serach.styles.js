import styled from "styled-components";

export const StyledLabel = styled.label`
  position: relative;
  display: block;
  max-width: 480px;
  flex-grow: 1;
  svg {
    position: absolute;
    top: 50%;
    left: 32px;
    transform: translateY(-50%);
    fill: ${({ theme }) => theme.colors.neutralDark};
  }
  input {
    width: 100%;
    padding: 14px 74px;
    background-color: ${({ theme }) => theme.colors.secondary};
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.neutralDark};
    border-radius: 5px;
    border: none;
    box-shadow: 0px 2px 4px hsla(0, 0%, 0%, 0.2);
    &::placeholder {
      color: ${({ theme }) => theme.colors.neutralDark};
    }

    @media ${({ theme }) => theme.media.medium} {
      font-size: 0.875rem;
    }
  }
`;
