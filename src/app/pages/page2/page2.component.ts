import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {
  title = "This is a responsive materialize template";
  cards = [];
  constructor() { }


  ngOnInit() {
   this.cards= [ {img:"../../../assets/data.png",link:"http://dataserver.ultimatefreehost.in/?i=1"},
   {img:"../../../assets/hero.png",link:"http://gotham.ultimatefreehost.in/"},
   {img:"../../../assets/holiday.png",link:"http://holiday-resort.ultimatefreehost.in/"},
   {img:"../../../assets/terminator.png",link:"http://terminator.ultimatefreehost.in/?i=1"}
  
]
  }
}
