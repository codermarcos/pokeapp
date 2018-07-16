export class Pagination {

  public current: number;
  public limit: number;
  public max: number;

  constructor(limit: number, current?: number, length?: number) {
    this.limit = limit;
    this.current = current || 0;
    this.max = Math.ceil(length / limit);
  }

  next() {
    if (this.current === this.max) {
      return false;
    } else {
      this.current++;
      return true;
    }
  }

  prev() {
    if (this.current === 0) {
      return false;
    } else {
      this.current--;
      return true;
    }
  }

  get length(): number {
    return this.max * this.limit;
  }

  set length(value: number) {
    this.max = Math.ceil(value / this.limit);
  }

  get offset() {
    return this.current * this.limit;
  }
}
