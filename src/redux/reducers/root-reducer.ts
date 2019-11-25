import { GameStoreType, game } from './game.reducer';
import { combineReducers } from 'redux';

export interface IStoreState {
  game: GameStoreType;
}

export const rootReducer = combineReducers<IStoreState>({ game });
