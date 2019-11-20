import Paddle from './Paddle';
import { KeysDownType } from '../../components/App';
import Ball from './Ball';

abstract class GamePlayer implements IGameEntity {
  private _paddle: Paddle;

  constructor(paddle: Paddle) {
    this._paddle = paddle;
  }

  get paddle() {
    return this._paddle;
  }

  public render = () => this._paddle.render();
}

export class Player extends GamePlayer {
  constructor(canvasWidth: number, context: CanvasRenderingContext2D) {
    super(new Paddle(175, 580, 50, 10, canvasWidth, context));
  }

  public update = (keysDown: KeysDownType) => {
    const moveSpeed = 4;
    Object.keys(keysDown)
      .map(key => Number(key))
      .forEach(key => {
        if (key === 37) {
          // left arrow
          this.paddle.move(-moveSpeed, 0);
        } else if (key === 39) {
          // right arrow
          this.paddle.move(moveSpeed, 0);
        } else {
          // stop moving
          this.paddle.move(0, 0);
        }
      });
  };
}

export class Computer extends GamePlayer {
  constructor(canvasWidth: number, context: CanvasRenderingContext2D) {
    super(new Paddle(175, 10, 50, 10, canvasWidth, context));
  }

  public update = (ball: Ball) => {
    const maxSpeed = 4;

    const xPos = ball.x;

    let diff = -(this.paddle.x + this.paddle.width / 2 - xPos);

    if (diff < 0 && diff < -maxSpeed) {
      diff = -5;
    } else if (diff > 0 && diff > maxSpeed) {
      diff = 5;
    }

    this.paddle.move(diff, 0);

    if (this.paddle.x < 0) {
      this.paddle.x = 0;
    } else if (this.paddle.x + this.paddle.width > 400) {
      this.paddle.x = 400 - this.paddle.width;
    }
  };
}
