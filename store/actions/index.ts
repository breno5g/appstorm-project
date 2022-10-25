// Favorites Types
const ADD_FAVORITE = 'ADD_FAVORITE';
const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

const addFavorite = (user: any) => ({
    type: ADD_FAVORITE,
    payload: user
});

const deleteFavorite = (user: any) => ({
    type: REMOVE_FAVORITE,
    payload: user
});

export {ADD_FAVORITE, REMOVE_FAVORITE, addFavorite, deleteFavorite};