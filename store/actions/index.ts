import { IFavorite } from "../../interfaces/favorite";
import { IUser } from "../../interfaces/user";

// Favorites Types
const ADD_FAVORITE = 'ADD_FAVORITE';
const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
const LOAD_STORE = 'LOAD_STORE';

const addFavorite = (user: IFavorite) => ({
    type: ADD_FAVORITE,
    payload: user
});

const removeFavorite = (user: IFavorite) => ({
    type: REMOVE_FAVORITE,
    payload: user
});

const loadStore = () => ({
    type: LOAD_STORE
});

// User Types
const ADD_USER = 'ADD_USER';

const addUser = (user: IUser) => ({
    type: ADD_USER,
    payload: user
});

export {
    ADD_FAVORITE,
    REMOVE_FAVORITE,
    LOAD_STORE,
    ADD_USER,
    addFavorite,
    removeFavorite,
    loadStore,
    addUser
};