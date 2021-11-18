import styled from "styled-components";
import { Skeleton } from "../Skeleton/Skeleton";

export const SkeletonLine = styled(Skeleton)`
  width: 10em;
  color: ${({ theme }) => theme.colors.neutralDark};
  &::before {
    content: ".";
  }
`;
