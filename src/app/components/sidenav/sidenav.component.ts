import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  navigation = [];
  icons = [];
  constructor() { 
    
  }

  ngOnInit() {
     this.navigation = [
       {title:"Bootstrap" , link:"/page1"},
       {title:"Materialize",link:"/page2"},
       {title:"Home", link:"/"}
     ],
     this.icons = [
      {icon:"fab fa-github", margin:"5px",font:"1.6rem", link:"https://github.com/VranceanuM/"},
      {icon:"fab fa-twitter-square",margin:"5px",font:"1.6rem",link:"https://twitter.com/Vmark26/"},
      {icon:"fab fa-google-plus-square",margin:"5px",font:"1.6rem",link:"https://www.google.com/"},
      {icon:"fab fa-facebook", margin:"5px",font:"1.6rem",link:"https://www.facebook.com/vranceanu.madalin"}
     ]

     
    
    //init for sidenav
    $(document).ready(function(){
      $('.sidenav').sidenav();
    });
  
  }

}
