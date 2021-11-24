import styled from "styled-components";

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  ${({ hasBigGaps }) => hasBigGaps && `gap:9px`}
`;
