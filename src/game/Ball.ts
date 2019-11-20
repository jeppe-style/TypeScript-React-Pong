class Ball implements IGameEntity {
  private x: number;
  private y: number;
  private context: CanvasRenderingContext2D;

  private xSpeed = 0;
  private ySpeed = 3;
  private radius = 5;

  constructor(x: number, y: number, context: CanvasRenderingContext2D) {
    this.x = x;
    this.y = y;
    this.context = context;
  }

  public render = () => {
    this.context.beginPath();
    this.context.arc(
      this.x,
      this.y,
      this.radius,
      2 * Math.PI,
      0,
      false
    );
    this.context.fillStyle = '#000000';
    this.context.fill();
  };
}

export default Ball;
