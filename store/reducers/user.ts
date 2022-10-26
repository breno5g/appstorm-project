import { IFavoriteReducer } from "../../interfaces/redux";
import { IUser } from "../../interfaces/user";
import { ADD_USER } from "../actions";

const initialState: IUser | null = null;

const reducer = (state = initialState, action: IFavoriteReducer) => {
  switch (action.type) {
    case ADD_USER:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;