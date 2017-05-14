import {Component} from '@angular/core';
import {NavController, MenuController, Events} from 'ionic-angular';
import {NotificationsPage} from '../notifications/notifications';
import {MePage} from '../me/me';
import {TabsPage} from '../tabs/tabs';

@Component({
  templateUrl: 'build/pages/interactivity/interactivity.html',
})
export class InteractivityPage {
  constructor(public nav: NavController, public menu: MenuController, public events: Events) {
    this.nav = nav;
    this.menu = menu;
    this.events = events;
    
    this.menu.swipeEnable(true, 'left'); 
    this.menu.swipeEnable(false, 'right'); 
    
  }
  
/*    ionViewLoaded () {
      var componentName = InteractivityPage;
      this.events.publish('page:current', componentName);
    }*/

    goNext () {
    }
    
    goToNotifications () {
      this.nav.push(NotificationsPage);
    }

    goBack () {
        this.nav.popToRoot();
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
    this.nav.push(MePage);
  }

  
}
