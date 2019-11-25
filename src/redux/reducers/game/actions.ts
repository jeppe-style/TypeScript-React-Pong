export const ADD_GOAL = '[GAME] add goal';

const addGoal = (player: 'player' | 'computer') => ({
    type: ADD_GOAL as typeof ADD_GOAL,
    player
});

export type AddGoalActionType = ReturnType<typeof addGoal>;

export type GameActionType = AddGoalActionType;