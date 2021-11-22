import React from "react";
import { useSelect } from "downshift";
import { useEffect, useState } from "react";
import { ReactComponent as ChevronIcon } from "assets/images/chevron-icon.svg";

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
    box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);

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

function stateReducer(state, actionAndChanges) {
  const { changes, type } = actionAndChanges;
  switch (type) {
    case useSelect.stateChangeTypes.MenuKeyDownEnter:
    case useSelect.stateChangeTypes.MenuKeyDownSpaceButton:
    case useSelect.stateChangeTypes.ItemClick:
      return {
        ...changes,
        isOpen: true, // keep menu open after selection.
        highlightedIndex: state.highlightedIndex,
      };
    default:
      return changes;
  }
}

const RegionFilter = ({ filterCountriesbyRegion }) => {
  const items = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  const [selectedItems, setSelectedItems] = useState([]);
  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({
    items,
    stateReducer,
    selectedItem: null,
    onSelectedItemChange: ({ selectedItem }) => {
      if (!selectedItem) {
        return;
      }
      const index = selectedItems.indexOf(selectedItem);
      if (index > 0) {
        setSelectedItems([
          ...selectedItems.slice(0, index),
          ...selectedItems.slice(index + 1),
        ]);
      } else if (index === 0) {
        setSelectedItems([...selectedItems.slice(1)]);
      } else {
        setSelectedItems([...selectedItems, selectedItem]);
      }
    },
  });

  useEffect(() => {
    filterCountriesbyRegion(selectedItems);
  }, [selectedItems, filterCountriesbyRegion]);

  const buttonText = selectedItems.length
    ? `${selectedItems.join(", ")}`
    : "Filter by Region";
  return (
    <Wrapper>
      <label {...getLabelProps()}></label>
      <button type="button" {...getToggleButtonProps()}>
        {buttonText}
        <ChevronIcon />
      </button>
      <List isOpen={isOpen} {...getMenuProps()}>
        {isOpen &&
          items.map((item, index) => (
            <li
              style={
                highlightedIndex === index ? { transform: "scale(1.07)" } : {}
              }
              key={`${item}${index}`}
              {...getItemProps({
                item,
                index,
              })}
            >
              <input
                type="checkbox"
                checked={selectedItems.includes(item)}
                value={item}
                onChange={() => null}
              />

              <span />
              {item}
            </li>
          ))}
      </List>
    </Wrapper>
  );
};

export default RegionFilter;
