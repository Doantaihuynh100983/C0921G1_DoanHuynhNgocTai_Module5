export class Education {
    private _id? : number;
    private _name? : string;

  constructor() {
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }


}
