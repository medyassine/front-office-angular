import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {
@Input() listMenu: string[];
color  ;
  constructor() {this.color = 'red'; }

  ngOnInit() {
  }

}
