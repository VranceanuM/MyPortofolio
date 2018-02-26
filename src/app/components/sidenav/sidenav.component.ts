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
       {title:"Demo Template", link:"/page3"}
     ],
     this.icons = [
      {icon:"fab fa-github", margin:"5px",font:"1.6rem"},
      {icon:"fab fa-behance-square" ,margin:"5px",font:"1.6rem"},
      {icon:"fab fa-pinterest-square",margin:"5px",font:"1.6rem"},
      {icon:"fab fa-twitter-square",margin:"5px",font:"1.6rem"},
      {icon:"fab fa-google-plus-square",margin:"5px",font:"1.6rem"}
     ]

     
    
    //init for sidenav
    $(document).ready(function(){
      $('.sidenav').sidenav();
    });
  
  }

}
