import React, { useRef, useEffect, useState } from 'react';

import { KeysDownType } from './App';
import { Player, Computer } from '../game/entity/Player';
import Ball from '../game/entity/Ball';

const WIDTH = 400;
const HEIGHT = 600;

const PongGame: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const animate = window.requestAnimationFrame;

  const keysDown: KeysDownType = {};

  const [isPlaying, setIsPlaying] = useState(false);

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
          animate(step);
        };

        animate(step);
      }
    }
  }, [canvasRef, animate, keysDown, isPlaying]);

  return <canvas ref={canvasRef} width={WIDTH} height={HEIGHT} />;
};

export default PongGame;
