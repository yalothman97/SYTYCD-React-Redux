import { FETCH_AUTHORS, FILTER_AUTHORS } from "../actions/actionTypes";

const initialState = {
  authors: [],
  filteredAuthors: [],
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_AUTHORS:
      return {
        ...state,
        authors: action.payload,
        filteredAuthors: action.payload,
        loading: false
      };

    case FILTER_AUTHORS:
      return {
        ...state,
        filteredAuthors: state.authors.filter(author => {
          return `${author.first_name} ${author.last_name}`
            .toLowerCase()
            .includes(action.payload);
        })
      };
    default:
      return state;
  }
};

export default reducer;
