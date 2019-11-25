import { GameActionType } from './game/actions';

const defaultGameStore = {
  player: 0,
  computer: 0
};

export type GameStoreType = typeof defaultGameStore;

export const game = (state = defaultGameStore, action: GameActionType) => {
  if (action.type === '[GAME] add goal') {
    switch (action.player) {
      case 'computer':
        return { ...state, computer: state.computer + 1 };
      case 'player':
        return { ...state, player: state.player + 1 };
    }
  }

  return state;
};
