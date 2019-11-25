interface IGameEntity {
  public render: () => void;
}

type GoalWasScoredType = (player: 'computer' | 'player') => void;
