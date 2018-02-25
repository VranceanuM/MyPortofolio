import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  icons = [];
  constructor() { }

  ngOnInit() {
    this.icons = [
     {icon:"fab fa-vuejs", margin:"20px"},
     {icon:"fab fa-react" ,margin:"20px"},
     {icon:"fab fa-css3-alt",margin:"20px"},
     {icon:"fab fa-sass",margin:"20px"},
     {icon:"fab fa-angular",margin:"20px"},
     {icon:"fab fa-js",margin:"20px"}
    ]
  }

}
