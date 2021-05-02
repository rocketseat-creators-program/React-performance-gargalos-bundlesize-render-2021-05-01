import { useCombobox as useDownshiftCombobox } from "downshift";

function useCombobox(options = {}) {
  const { itemToString = (item) => item || "" } = options;
  return useDownshiftCombobox({
    stateReducer(state, { type, changes }) {
      if (type === useDownshiftCombobox.stateChangeTypes.InputBlur) {
        return {
          ...changes,
          highlightedIndex: -1,
          selectedItem: state.selectedItem,
          inputValue: itemToString(state.selectedItem),
        };
      }
      if (type === useDownshiftCombobox.stateChangeTypes.FunctionSelectItem) {
        return {
          ...changes,
          inputValue: "",
        };
      }
      return changes;
    },
    ...options,
  });
}

export { useCombobox };
