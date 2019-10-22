import { Component, OnInit } from '@angular/core';
import { InsideViewComponent } from '../inside-view/inside-view.component';

@Component({
  providers:[InsideViewComponent],
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent{
  private _opened: boolean = false;
  private _arrayIconClass: Array<String> = ["fa-facebook-f","fa-instagram","fab fa-youtube",];

  constructor(private _insideViewCmp: InsideViewComponent){}

  _homeCF(){
   /* this._insideViewCmp._homeCF();
    this._insideViewCmp._bandVisibleMainView = false;
    console.log("BYE");*/
  }
}
