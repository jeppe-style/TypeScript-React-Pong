import React, { useRef, useEffect } from 'react';

import { KeysDownType } from '../components/App';
import { Player, Computer } from './entity/Player';
import Ball from './entity/Ball';

const WIDTH = 400;
const HEIGHT = 600;

const PongGame: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const animate = window.requestAnimationFrame;

  const keysDown: KeysDownType = {};

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      if (context) {
        const player = new Player(WIDTH, context);
        const computer = new Computer(WIDTH, context);
        const ball = new Ball(200, 300, HEIGHT, WIDTH, context);

        window.addEventListener('keydown', (event: KeyboardEvent) => {
          keysDown[event.keyCode] = true;
        });

        window.addEventListener('keyup', (event: KeyboardEvent) => {
          delete keysDown[event.keyCode];
        });

        const update = () => {
          ball.update(player.paddle, computer.paddle);
          player.update(keysDown);
          computer.update(ball);
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
          animate(step);
        };

        animate(step);
      }
    }
  }, [canvasRef, animate, keysDown]);

  return <canvas ref={canvasRef} width={WIDTH} height={HEIGHT} />;
};

export default PongGame;
