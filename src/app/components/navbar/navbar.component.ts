import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(".dropdown").on("hover",function(){
      console.log("hola");
      $(this).addClass("show");
      $(this).children().attr("aria-haspopup","true");
    });
  }

}
