import {Component} from '@angular/core';
import {NavController, Events, MenuController} from 'ionic-angular';

@Component({

})
export class IndexPage {
  
  menuItems: any;
  
  constructor(public nav: NavController, public events: Events, public menu: MenuController) {
    
    this.nav = nav;
    this.events = events;
    this.menu = menu;
    this.menu.swipeEnable(false, 'left'); 
    this.menu.swipeEnable(false, 'right'); 
    
  }
  
/*
  ionViewLoaded () {
      var componentName = UniPage;
      this.events.publish('page:current', componentName);
  }*/
  
}
