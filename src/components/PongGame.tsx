import React, { useRef, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { KeysDownType } from './App';
import { Player, Computer } from '../game/entity/Player';
import Ball from '../game/entity/Ball';

import { addGoal } from '../redux/reducers/game/actions';

const WIDTH = 400;
const HEIGHT = 600;

const PongGame: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const keysDown: KeysDownType = {};

  const [isPlaying, setIsPlaying] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    let requestId: number;

    const goalWasScored: GoalWasScoredType = player => {
      dispatch(addGoal(player));
      setIsPlaying(false);
      console.log(player);
    };

    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      if (context) {
        const player = new Player(WIDTH, context);
        const computer = new Computer(WIDTH, context);
        const ball = new Ball(200, 300, HEIGHT, WIDTH, context, goalWasScored);

        window.addEventListener('keydown', (event: KeyboardEvent) => {
          keysDown[event.keyCode] = true;
        });

        window.addEventListener('keyup', (event: KeyboardEvent) => {
          delete keysDown[event.keyCode];
          if (event.keyCode === 32) {
            setIsPlaying(true);
          }
        });

        const update = () => {
          if (isPlaying) {
            ball.update(player.paddle, computer.paddle);
            player.update(keysDown);
            computer.update(ball);
          }
        };

        const render = () => {
          context.fillStyle = '#FF00FF';
          context.fillRect(0, 0, WIDTH, HEIGHT);
          player.render();
          computer.render();
          ball.render();
        };

        const step = () => {
          update();
          render();
          requestId = window.requestAnimationFrame(step);
        };

        step();
      }
    }
    return () => {
      window.cancelAnimationFrame(requestId);
    };
  }, [canvasRef, keysDown, isPlaying, dispatch]);

  return <canvas ref={canvasRef} width={WIDTH} height={HEIGHT} />;
};

export default PongGame;
