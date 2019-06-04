import {
  REQUEST_GIFS,
  REQUEST_GIFS_SUCCESS,
  REQUEST_GIFS_FAILURE
} from "../actions";

const initialState = {
  data: [],
  isLoading: false,
  error: null
};

export default function gifs(state = initialState, action) {
  switch (action.type) {
    case REQUEST_GIFS:
      return {
        ...state,
        isLoading: true
      };
    case REQUEST_GIFS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: null
      };
    case REQUEST_GIFS_FAILURE:
      return {
        data: [],
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
}
