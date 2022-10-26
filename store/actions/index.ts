import { IFavorite } from "../../interfaces/favorite";

// Favorites Types
const ADD_FAVORITE = 'ADD_FAVORITE';
const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

const addFavorite = (user: IFavorite) => ({
    type: ADD_FAVORITE,
    payload: user
});

const deleteFavorite = (user: IFavorite) => ({
    type: REMOVE_FAVORITE,
    payload: user
});

export {ADD_FAVORITE, REMOVE_FAVORITE, addFavorite, deleteFavorite};