import styled from "styled-components";
import { Button } from "../Button/Button";

export const ButtonWithIcon = styled(Button)`
  display: flex;
  width: max-content;
  gap: 8px;
  svg {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;
