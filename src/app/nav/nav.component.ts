import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  selected:string;
  menuItems:Object[]=[
    {
      item: "Home",
      description:"dnkjndjkwn"
    },
   {

      item:"About",
      description:"about sbjhbshxj"

   },
    {
      item:"Resume",
      description:"resume djkdnjk"

    },
    {
      item:"Services",
      description:"services cjnjcbjbjk"

    },
    {
      item:"Contact",
      description:"Contact"

    }
    ]

  select(name:string)
  {
    this.selected=name;
  }






}
