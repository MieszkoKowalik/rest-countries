import styled from "styled-components";

export const Wrapper = styled.div`
  width: 200px;
  position: relative;
  button {
    padding: 14px 36px 14px 24px;
    width: 100%;
    text-align: left;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 5px;
    border: none;
    position: relative;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0px 2px 4px hsla(0, 0%, 0%, 0.2);

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    &:hover {
      cursor: pointer;
    }

    @media ${({ theme }) => theme.media.medium} {
      font-size: 0.875rem;
    }
    svg {
      fill: ${({ theme }) => theme.colors.primary};
      position: absolute;
      top: 50%;
      right: 19px;
      transform: translateY(-50%);
    }
  }
`;

export const List = styled.ul`
  position: absolute;
  bottom: -4px;
  left: 0;
  transform: translateY(100%);
  width: 100%;
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  padding: 16px 24px;
  list-style: none;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 0px 2px 4px hsla(0, 0%, 0%, 0.2);

  li {
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.primary};
    transition: transform 0.2s;
    cursor: pointer;
    display: flex;
    gap: 3px;
    @media ${({ theme }) => theme.media.medium} {
      font-size: 0.875rem;
    }
  }
`;
