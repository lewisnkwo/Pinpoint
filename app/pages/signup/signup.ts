import {Component} from '@angular/core';
import {NavController, Events, MenuController} from 'ionic-angular';
import {WhoPage} from '../who/who';
import {TabsPage} from '../tabs/tabs';

@Component({
  templateUrl: 'build/pages/signup/signup.html',
})

export class SignupPage {
  constructor(public nav: NavController, public events: Events, public menu: MenuController) {
    this.nav = nav;
    this.events = events;
    this.menu = menu;
    this.menu.swipeEnable(false, 'left'); 
    this.menu.swipeEnable(false, 'right'); 
  }

/*  ionViewLoaded () {
      var componentName = SignupPage;
      this.events.publish('page:current', componentName);
  }*/
  
  goNext () {
      this.nav.push(WhoPage);
  } 
  
  goToMe () {
    this.nav.push(TabsPage);
  } 
  
}
