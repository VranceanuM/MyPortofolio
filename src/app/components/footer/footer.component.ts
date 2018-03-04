import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  icons = [];
  social=[];
 description:string;
 title:string;
  constructor() {
   
   }

  ngOnInit() {
    this.icons = [
     {icon:"fab fa-vuejs", margin:"20px"},
     {icon:"fab fa-git" ,margin:"20px"},
     {icon:"fab fa-css3-alt",margin:"20px"},
     {icon:"fab fa-sass",margin:"20px"},
     {icon:"fab fa-angular",margin:"20px"},
     {icon:"fab fa-js",margin:"20px"},
     {icon:"fab fa-html5",margin:"20px"},
     {icon:"fab fa-linux",margin:"20px"}
    ],
    this.social = [
      {icon:"fab fa-github", margin:"5px",font:"1.6rem", link:"https://github.com/VranceanuM/"},
      {icon:"fab fa-twitter-square",margin:"5px",font:"1.6rem",link:"https://twitter.com/Vmark26/"},
      {icon:"fab fa-google-plus-square",margin:"5px",font:"1.6rem",link:"https://www.google.com/"},
      {icon:"fab fa-facebook", margin:"5px",font:"1.6rem",link:"https://www.facebook.com/vranceanu.madalin"},
     ]
     this.description =`Web Developer  with 1 year of
     experience in designing and developing user interfaces,
      debugging, experience working with Sass Vue.Js React.Js 
      Angular4+ JavaScript jQuery Bootstrap Materialize.`;
     this.title = 'My skill set';
  }

}
