import Paddle from './Paddle';

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
  constructor(context: CanvasRenderingContext2D) {
    super(new Paddle(175, 580, 50, 10, context));
  }
}

export class Computer extends GamePlayer {
  constructor(context: CanvasRenderingContext2D) {
    super(new Paddle(175, 10, 50, 10, context));
  }
}
