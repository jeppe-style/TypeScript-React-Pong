import React from 'react';
import { useSelector } from 'react-redux';

import { IStoreState } from '../redux/reducers/root-reducer';

const Score: React.FC = ({ children }) => {
  const playerScore = useSelector((state: IStoreState) => state.game.player);
  const computerScore = useSelector(
    (state: IStoreState) => state.game.computer
  );

  return (
    <div>
      <p>Computer: {computerScore}</p>
      {children}
      <p>You: {playerScore}</p>
    </div>
  );
};

export default Score;
