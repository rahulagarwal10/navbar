import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent  {
  @Input('menuItem') item;

  updateText(){
    let updatevalue: string;
    updatevalue=(<HTMLInputElement>document.getElementById("item_desc")).value;
    this.item.description=updatevalue;

  }
}
