import {Component} from '@angular/core';
import {NavController, Events, MenuController} from 'ionic-angular';
import {MePage} from '../me/me';
import {TabsPage} from '../tabs/tabs';

@Component({
  templateUrl: 'build/pages/login/login.html',
})

export class LoginPage {
  
  user: string;
  
  constructor(public nav: NavController, public events: Events, public menu: MenuController) {
    this.nav = nav;
    this.events = events;
    this.menu = menu;
    this.menu.swipeEnable(false, 'left'); 
    this.menu.swipeEnable(false, 'right'); 
    this.user = 'Demo';

  }
  
/*  ionViewLoaded () {
      var componentName = LoginPage;
      this.events.publish('page:current', componentName);
  }*/
  
  goNext () {
      this.nav.push(MePage);
  }
  
  loginUser () {
      this.nav.push(TabsPage);
  }
  
  
}
