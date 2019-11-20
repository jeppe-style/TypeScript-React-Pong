class Paddle implements IGameEntity {
  private _x: number;
  private _y: number;
  private _width: number;
  private _height: number;
  private canvasWidth: number;
  private _context: CanvasRenderingContext2D;

  private _xSpeed = 0;
  private _ySpeed = 0;

  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    canvasWidth: number,
    context: CanvasRenderingContext2D
  ) {
    this._x = x;
    this._y = y;
    this._width = width;
    this._height = height;
    this.canvasWidth = canvasWidth;
    this._context = context;
  }

  get x() {
    return this._x;
  }

  set x(x: number) {
    this._x = x;
  }

  get y() {
    return this._y;
  }
  set y(y: number) {
    this._y = y;
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  get xSpeed() {
    return this._xSpeed;
  }

  get ySpeed() {
    return this._ySpeed;
  }

  public render = () => {
    this._context.fillStyle = '#0000FF';
    this._context.fillRect(this._x, this._y, this._width, this._height);
  };

  public move = (x: number, y: number) => {
    this._x += x;
    this._y += y;
    this._xSpeed = x;
    this._ySpeed = y;

    if (this._x < 0) {
      // all the way to the left
      this._x = 0;
      this._xSpeed = 0;
    } else if (this._x + this.width > this.canvasWidth) {
      // all the  way to the right
      this._x = 400 - this.width;
      this._xSpeed = 0;
    }
  };
}

export default Paddle;
