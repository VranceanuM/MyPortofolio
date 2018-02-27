import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {
title = "This is a bootstrap template";
cards = [];
  constructor() { }

  ngOnInit() {
 this.cards = [
   {img:"../../../assets/spacex.png",link:"http://spacex.ultimatefreehost.in/?i=2"},
   {img:"../../../assets/hard.png",link:"http://hardware.ultimatefreehost.in/?i=1"},
   {img:"../../../assets/luxe.png",link:"http://luxor.ultimatefreehost.in/?i=1"},
   {img:"../../../assets/portofolio.png",link:"http://profilemark.ultimatefreehost.in/?i=2"},
   {img:"../../../assets/idea.png",link:"http://ideaslab.ultimatefreehost.in/?i=1"},
   {img:"../../../assets/dasha1.png",link:"http://templates.ultimatefreehost.in/"}
 ]
  }

}
