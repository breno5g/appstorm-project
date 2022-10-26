import { IFavorite } from '../interfaces/favorite';

export interface IStore {
  favorites: IFavorite[]
}

export interface IFavoriteReducer {
  type: string,
  payload: IFavorite
}