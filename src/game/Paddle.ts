class Paddle implements IGameEntity {
  private x: number;
  private y: number;
  private width: number;
  private height: number;
  private context: CanvasRenderingContext2D;

  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    context: CanvasRenderingContext2D
  ) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.context = context;
  }

  public render = () => {
    this.context.fillStyle = '#0000FF';
    this.context.fillRect(this.x, this.y, this.width, this.height);
  };
}

export default Paddle;
