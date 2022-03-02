import { IArea } from "./IArea";
import {Shape} from "./shape";

export class Rectangle extends Shape implements IArea{
    constructor(x: number, y: number, private _width: number, private _height: number) {
        super(x, y);
    }

    area(): number {
        return this._width*this._height;
    }


}
