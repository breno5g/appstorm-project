import { IFavorite } from "../../interfaces/favorite";

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

export {
    ADD_FAVORITE,
    REMOVE_FAVORITE,
    LOAD_STORE,
    addFavorite,
    removeFavorite,
    loadStore
};