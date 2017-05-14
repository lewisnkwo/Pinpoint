import {Component} from '@angular/core';
import {NavController, MenuController, Events} from 'ionic-angular';
import {MePage} from '../../pages/me/me';

@Component({
  templateUrl: 'build/pages/notifications/notifications.html',
})
export class NotificationsPage {
  
  constructor(public nav: NavController, public menu: MenuController, public events: Events) {
    this.nav = nav;
    this.menu = menu;
    this.events = events;

    this.menu.swipeEnable(true, 'left'); 
    this.menu.swipeEnable(false, 'right'); 
  }
  
/*   ionViewLoaded () {
      var componentName = NotificationsPage;
      this.events.publish('page:current', componentName);
    }*/

    goNext () {
    }

    goBack () {
        this.nav.pop();
    }


    openLeftMenu() {
    this.menu.open('left');
    }

    openRightMenu() {
    this.menu.open('right');
    }

    closeLeftMenu() {
    this.menu.close('left');
    }

    closeRightMenu() {
    this.menu.close('right');
    }
    
    goToMe () {
      this.nav.pop();
    }
    
}
