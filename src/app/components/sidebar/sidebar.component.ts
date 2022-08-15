import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public isActiveNav: string = 'aboutus';

  constructor() { }

  ngOnInit(): void {
  }

  navClick(tab: string) {
    this.isActiveNav = tab;
  }

}
