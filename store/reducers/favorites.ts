import { ADD_FAVORITE, REMOVE_FAVORITE } from "../actions";

const initialState = [
  {
    username: "breno5g",
    url: "https://www.github.com/breno5g",
    image: "https://avatars.githubusercontent.com/u/51424478?v=4"
  }
];

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return { ...state, ...action.payload };
    case REMOVE_FAVORITE:
      return state.filter((user) => user.username !== action.payload.username);
    default:
      return state;
  }
};

export default reducer;