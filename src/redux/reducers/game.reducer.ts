import { GameActionType } from './game/actions';

const defaultGameStore = {
  player: 0,
  computer: 0
};

export type GameStoreType = typeof defaultGameStore;

export const game = (state = defaultGameStore, action: GameActionType) => {
  return state;
};
