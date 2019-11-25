import Paddle from './Paddle';

const DEFAULT_Y_SPEED = 3;
const DEFAULT_X_SPEED = 0;

class Ball implements IGameEntity {
  private _x: number;
  private _y: number;
  private context: CanvasRenderingContext2D;

  private canvasWidth: number;
  private canvasHeight: number;

  private xSpeed = DEFAULT_X_SPEED;
  private ySpeed = DEFAULT_Y_SPEED;
  private radius = 5;

  private goalScoredCallback: GoalWasScoredType;

  constructor(
    x: number,
    y: number,
    canvasHeight: number,
    canvasWidth: number,
    context: CanvasRenderingContext2D,
    goalScoredListener: GoalWasScoredType
  ) {
    this._x = x;
    this._y = y;
    this.canvasHeight = canvasHeight;
    this.canvasWidth = canvasWidth;
    this.context = context;
    this.goalScoredCallback = goalScoredListener;
  }

  get x() {
    return this._x;
  }

  public render = () => {
    this.context.beginPath();
    this.context.arc(this._x, this._y, this.radius, 2 * Math.PI, 0, false);
    this.context.fillStyle = '#000000';
    this.context.fill();
  };

  public update = (playerPaddle: Paddle, computerPaddle: Paddle) => {
    this._x += this.xSpeed;
    this._y += this.ySpeed;

    const topX = this._x - this.radius;
    const topY = this._y - this.radius;
    const bottomX = this._x + this.radius;
    const bottomY = this._y + this.radius;

    const hasHitPaddle = (paddle: Paddle) => {
      return (
        topY < paddle.y + paddle.height &&
        bottomY > paddle.y &&
        topX < paddle.x + paddle.width &&
        bottomX > paddle.x
      );
    };

    // hitting walls
    if (this._x - this.radius < 0) {
      // hitting the left wall
      this._x = this.radius;
      this.xSpeed = -this.xSpeed;
    } else if (this._x + this.radius > this.canvasWidth) {
      // hitting the right wall
      this._x = this.canvasWidth - this.radius;
      this.xSpeed = -this.xSpeed;
    }

    // point was scored
    if (this._y < 0 || this._y > this.canvasHeight) {
      this.goalScoredCallback(this._y < 0 ? 'player' : 'computer');

      this.xSpeed = DEFAULT_X_SPEED;
      this.ySpeed = DEFAULT_Y_SPEED;

      // reset the ball
      this._x = this.canvasWidth / 2;
      this._y = this.canvasHeight / 2;
    }

    // hitting a paddle

    if (topY > this.canvasHeight / 2) {
      if (hasHitPaddle(playerPaddle)) {
        // hit the player's paddle
        this.ySpeed = -DEFAULT_Y_SPEED;
        this.xSpeed += playerPaddle.xSpeed / 2;
        this._y += this.ySpeed;
      }
    } else {
      if (hasHitPaddle(computerPaddle)) {
        // hit the computer's paddle

        this.ySpeed = DEFAULT_Y_SPEED;
        this.xSpeed += computerPaddle.ySpeed / 2;
        this._y += this.ySpeed;
      }
    }
  };
}

export default Ball;
