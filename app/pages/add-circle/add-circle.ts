import {NavController, MenuController, Events} from 'ionic-angular';
import {Component} from '@angular/core';
import {CirclePage} from '../circle/circle';
import {TabsPage} from '../tabs/tabs';
import {MePage} from '../me/me';

@Component({
  templateUrl: 'build/pages/add-circle/add-circle.html',
})
export class AddCirclePage {
  constructor(public nav: NavController, public menu: MenuController, public events: Events) {
    this.nav = nav;
    this.menu = menu;
    this.events = events;
    
    this.menu.swipeEnable(true, 'left'); 
    this.menu.swipeEnable(false, 'right'); 
    
  }
  
/*    ionViewLoaded () {
      var componentName = AddCirclePage;
      this.events.publish('page:current', componentName);
    }*/

    goNext () {
    }

    goBack () {
        this.nav.pop();
    }

    goToCircle () {
      this.nav.push(CirclePage);
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
