import React, { useRef, useEffect } from 'react';
import './App.css';
import { Player, Computer } from '../game/Player';
import Ball from '../game/Ball';

const WIDTH = 400;
const HEIGHT = 600;

const App: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const animate = window.requestAnimationFrame;

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      if (context) {
        const player = new Player(context);
        const computer = new Computer(context);
        const ball = new Ball(200, 300, HEIGHT, WIDTH, context);

        const update = () => {
          ball.update(player.paddle, computer.paddle);
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
  }, [canvasRef, animate]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>SI Pong</h1>
        <canvas ref={canvasRef} width={WIDTH} height={HEIGHT} />
      </header>
    </div>
  );
};

export default App;
