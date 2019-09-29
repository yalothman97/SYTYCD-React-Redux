import { FETCH_AUTHOR_DETAIL } from "../actions/actionTypes";

const initialState = {
  author: null,
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_AUTHOR_DETAIL:
      return {
        ...state,
        author: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
