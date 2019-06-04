export const REQUEST_GIFS = "REQUEST_GIFS";
export const REQUEST_GIFS_SUCCESS = "REQUEST_GIFS_SUCCESS";
export const REQUEST_GIFS_FAILURE = "REQUEST_GIFS_FAILURE";

/*
      const url = `https://api.giphy.com/v1/gifs/search?api_key=SYuuhbO9kh4QEGNI6rH796Kkr76j1QoV&q=${term.replace(
    /\s/g,
    "+"
  )}&limit=25&offset=0&rating=R&lang=en`;
*/

export function requestGifs(term) {
  return {
    type: REQUEST_GIFS,
    payload: term
  };
}
export function requestGifsSuccess(data = []) {
  console.log(data);
  return {
    type: REQUEST_GIFS_SUCCESS,
    payload: data.response.data
  };
}
export function requestGifsFailure(message) {
  return {
    type: REQUEST_GIFS_FAILURE,
    message
  };
}
