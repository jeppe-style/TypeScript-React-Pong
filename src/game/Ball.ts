import Paddle from './Paddle';

const DEFAULT_Y_SPEED = 3;
const DEFAULT_X_SPEED = 0;

class Ball implements IGameEntity {
  private x: number;
  private y: number;
  private context: CanvasRenderingContext2D;

  private canvasWidth: number;
  private canvasHeight: number;

  private xSpeed = DEFAULT_X_SPEED;
  private ySpeed = DEFAULT_Y_SPEED;
  private radius = 5;

  constructor(
    x: number,
    y: number,
    canvasHeight: number,
    canvasWidth: number,
    context: CanvasRenderingContext2D
  ) {
    this.x = x;
    this.y = y;
    this.canvasHeight = canvasHeight;
    this.canvasWidth = canvasWidth;
    this.context = context;
  }

  public render = () => {
    this.context.beginPath();
    this.context.arc(this.x, this.y, this.radius, 2 * Math.PI, 0, false);
    this.context.fillStyle = '#000000';
    this.context.fill();
  };

  public update = (playerPaddle: Paddle, computerPaddle: Paddle) => {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    const topX = this.x - this.radius;
    const topY = this.y - this.radius;
    const bottomX = this.x + this.radius;
    const bottomY = this.y + this.radius;

    const hasHitPaddle = (paddle: Paddle) => {
      return (
        topY < paddle.y + paddle.height &&
        bottomY > paddle.y &&
        topX < paddle.x + paddle.width &&
        bottomX > paddle.x
      );
    };

    // hitting walls
    if (this.x - this.radius < 0) {
      // hitting the left wall
      this.x = this.radius;
      this.xSpeed = -this.xSpeed;
    } else if (this.x + this.radius > this.canvasWidth) {
      // hitting the right wall
      this.x = this.canvasWidth - this.radius;
      this.xSpeed = -this.xSpeed;
    }

    // point was scored
    if (this.y < 0 || this.y > this.canvasHeight) {
      this.xSpeed = DEFAULT_X_SPEED;
      this.ySpeed = DEFAULT_Y_SPEED;

      // reset the ball
      this.x = this.canvasWidth / 2;
      this.y = this.canvasHeight / 2;
    }

    // hitting a paddle

    if (topY > this.canvasHeight / 2) {
      if (hasHitPaddle(playerPaddle)) {
        // hit the player's paddle
        this.ySpeed = -DEFAULT_Y_SPEED;
        this.xSpeed += playerPaddle.xSpeed / 2;
        this.y += this.ySpeed;
      }
    } else {
      if (hasHitPaddle(computerPaddle)) {
        // hit the computer's paddle

        this.ySpeed = DEFAULT_Y_SPEED;
        this.xSpeed += computerPaddle.ySpeed / 2;
        this.y += this.ySpeed;
      }
    }
  };
}

export default Ball;
