import React, { createContext, useReducer, useContext } from "react";
import { UPDATE_SEARCH_RESULTS, FILTER_SEARCH_RESULTS, LOAD_FAVORITES, PAGE_CHANGE } from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
  case UPDATE_SEARCH_RESULTS:
    return {
      ...state,
      searchResults: action.searchResults,
    };

    case FILTER_SEARCH_RESULTS:
        return {
          ...state,
          searchResults: action.searchResults,
        };

    case LOAD_FAVORITES:
    return {
        ...state,
        savedBooks: action.favorites,
        currentPage: action.page
    };

    case PAGE_CHANGE:
      return {
          ...state,
          currentPage: action.page
      };

  default:
    return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    savedBooks: [],
    searchResults: [],
    currentPage: '',
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
