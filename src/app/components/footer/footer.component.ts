import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  year: number;
  nombre: string;
  constructor() {
    this.year = new Date().getFullYear();
    this.nombre = "Sergi Morales & Dani Mendez"
   }

  ngOnInit() {
  }

}
