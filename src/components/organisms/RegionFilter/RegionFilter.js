import React from "react";
import { useSelect } from "downshift";
import { useEffect, useState } from "react";
import { ReactComponent as ChevronIcon } from "assets/images/chevron-icon.svg";
import { Wrapper, List } from "./RegionFilter.styles";

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
