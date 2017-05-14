import {Component} from '@angular/core';
import {NavController, Events, MenuController} from 'ionic-angular';
import {MePage} from '../me/me';
import {WhatsOnPage} from '../whats-on/whats-on';
import {TabsPage} from '../tabs/tabs';

@Component({
  templateUrl: 'build/pages/uni/uni.html',
})
export class UniPage {
  
  constructor(public nav: NavController, public events: Events, public menu: MenuController) {
    
    this.nav = nav;
    this.events = events;
    this.menu = menu;
    this.menu.swipeEnable(true, 'left'); 
    this.menu.swipeEnable(false, 'right'); 
    
  }
/*
  ionViewLoaded () {
      var componentName = UniPage;
      this.events.publish('page:current', componentName);
  }*/

  goNext () {
      this.nav.push(MePage);
  }   
  
  goBack () {
      this.nav.pop(WhatsOnPage);
  }
  
  goToWhatsOn () {
      this.nav.push(TabsPage);
  }
  
    goToMe () {
        this.nav.push(TabsPage);
    }
  
}
