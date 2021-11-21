import styled from "styled-components";

export const StyledLabel = styled.label`
  position: relative;
  display: block;
  max-width: 480px;
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

    &::placeholder {
      color: ${({ theme }) => theme.colors.neutralDark};
    }

    @media ${({ theme }) => theme.media.medium} {
      font-size: 0.875rem;
    }
  }
`;
