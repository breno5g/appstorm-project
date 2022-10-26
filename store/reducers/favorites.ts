import { IFavorite } from "../../interfaces/favorite";
import { IFavoriteReducer } from "../../interfaces/redux";
import { ADD_FAVORITE, LOAD_STORE, REMOVE_FAVORITE } from "../actions";

const initialState: IFavorite[] = [];

const reducer = (state = initialState, action: IFavoriteReducer) => {
  let storageState = [];
  
  switch (action.type) {
    case ADD_FAVORITE:
      storageState = [...state, { ...action.payload } ];
      break;
    case REMOVE_FAVORITE:
      storageState = state.filter((user) => user.username !== action.payload.username);
      break;
    case LOAD_STORE:
      const storage = localStorage.getItem("appStorm_favorites");
      if (storage) storageState = JSON.parse(storage);
      break;
    default:
      return state;
  }
  localStorage.setItem("appStorm_favorites", JSON.stringify(storageState));
  return storageState;

  // let storageState = [];
  // const {type} = action;

  // if (type === ADD_FAVORITE) {
  //   storageState = [...state, { ...action.payload } ];
  // }
  // if (type === REMOVE_FAVORITE) {
  //   storageState = state.filter((user) => user.username !== action.payload.username);
  // }
  // if (type === LOAD_STORE) {
  //   const storage = localStorage.getItem("appStorm_favorites");
  //   if (storage) storageState = JSON.parse(storage);
  // }

  // return storageState;
  
};

export default reducer;