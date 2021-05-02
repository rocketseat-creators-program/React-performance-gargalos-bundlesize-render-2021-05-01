import React from "react";

import Title from "../Components/Title/Title";
import SearchBar from "../Components/Search/Search";
import { Menu } from "../Components/SearchResult/SearchResult";

import { useCombobox } from "../Hooks/useCombobox";
import { getItems } from "../Utils/filterCities";
import { useForceRerender } from "../Hooks/useForceRerender";

function Search() {
  const reRender = useForceRerender();

  const [inputValue, setInputValue] = React.useState("");

  const allItems = getItems(inputValue);

  const items = allItems.slice(0, 100);

  const {
    selectItem,
    selectedItem,
    getItemProps,
    getMenuProps,
    getInputProps,
    highlightedIndex,
    getComboboxProps,
  } = useCombobox({
    items,
    inputValue,
    itemToString: (item) => (item ? item.name : ""),
    onInputValueChange: ({ inputValue: newValue }) => setInputValue(newValue),
  });

  return (
    <div className="">
      <div className="flex align-middle justify-between">
        <Title header="Search" />
        <button className="text-3xl mb-3" onClick={reRender}>
          <i className="mdi mdi-refresh"></i>
        </button>
      </div>
      <div {...getComboboxProps()} className="w-full relative">
        <SearchBar inputProps={{ ...getInputProps({ type: "text" }) }} />
        {inputValue && (
          <button
            className="absolute right-4 top-2"
            onClick={() => selectItem(null)}
          >
            &#10005;
          </button>
        )}
      </div>

      <div className="mt-10">
        <Menu
          items={items}
          getMenuProps={getMenuProps}
          getItemProps={getItemProps}
          selectedItem={selectedItem}
          highlightedIndex={highlightedIndex}
        />
      </div>
    </div>
  );
}

export default Search;
