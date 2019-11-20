class Paddle implements IGameEntity {
  private _x: number;
  private _y: number;
  private _width: number;
  private _height: number;
  private _context: CanvasRenderingContext2D;

  private _xSpeed = 0;
  private _ySpeed = 0;

  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    context: CanvasRenderingContext2D
  ) {
    this._x = x;
    this._y = y;
    this._width = width;
    this._height = height;
    this._context = context;
  }

  public render = () => {
    this._context.fillStyle = '#0000FF';
    this._context.fillRect(this._x, this._y, this._width, this._height);
  };

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
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
}

export default Paddle;
