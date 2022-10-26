import { IFavoriteReducer } from "../../interfaces/redux";
import { ADD_FAVORITE, REMOVE_FAVORITE } from "../actions";

const initialState = [
  {
    username: "breno5g",
    url: "https://www.github.com/breno5g",
    image: "https://avatars.githubusercontent.com/u/51424478?v=4"
  },
  {
    username: "raugusto96",
    url: "https://www.github.com/raugusto96",
    image: "https://avatars.githubusercontent.com/u/73061684?v=4"
  },
  {
    username: "felipecastanheira",
    url: "https://www.github.com/felipecastanheira",
    image: "https://avatars.githubusercontent.com/u/88142478?v=4"
  },
];

const reducer = (state = initialState, action: IFavoriteReducer) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return [...state, { ...action.payload } ];
    case REMOVE_FAVORITE:
      return state.filter((user) => user.username !== action.payload.username);
    default:
      return state;
  }
};

export default reducer;