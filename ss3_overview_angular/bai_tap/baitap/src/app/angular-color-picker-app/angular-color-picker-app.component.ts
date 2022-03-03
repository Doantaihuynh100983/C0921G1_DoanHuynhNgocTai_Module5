import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-color-picker-app',
  templateUrl: './angular-color-picker-app.component.html',
  styleUrls: ['./angular-color-picker-app.component.css']
})
export class AngularColorPickerAppComponent implements OnInit {
    colorCode: string;
  constructor() { }

  ngOnInit(): void {
  }
  code(color) : void{
    color = this.colorCode ;
    console.log(color);
  }

  changeValue($event: any) {
    this.colorCode = ($event.target.value);
    console.log(this.colorCode)
  }
}
