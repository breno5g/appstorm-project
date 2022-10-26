import { IFavorite } from '../interfaces/favorite';
import { IUser } from './user';

export interface IStore {
  favorites: IFavorite[]
}

export interface IFavoriteReducer {
  type: string,
  payload: IFavorite
}

export interface IUserReducer {
  type: string,
  payload: IUser
}