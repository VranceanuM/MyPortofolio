import { Component, OnInit } from '@angular/core';


declare var $:any;

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {
  navigation = [];
  constructor() { }

  ngOnInit() {
    this.navigation = [
      {link:"/page1",title:"page one"},
      {link:"/page2",title:"page two"}
    ]
    $(document).ready(function(){
      $('.parallax').parallax();
    });
    
  //for stick navbar
  window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
  }

}
