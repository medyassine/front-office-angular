import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  list  ;

  constructor() {
    this.list = ['Menu', 'Dashboard' , 'Formation' , 'Reservation' , 'Informations' , 'Tools',  'Contacts'];
  }

  ngOnInit() {
  }

}
