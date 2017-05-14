import {Component} from '@angular/core';
import {NavController, MenuController, Tabs, Events} from 'ionic-angular';
import {WhatsOnPage} from '../../pages/whats-on/whats-on';
import {ExplorePage} from '../../pages/explore/explore';
import {SearchPage} from '../../pages/search/search';
import {NotificationsPage} from '../../pages/notifications/notifications';
import {MePage} from '../../pages/me/me';
import {PeoplePage} from '../../pages/people/people';
import {BuddiesPage} from '../../pages/buddies/buddies';
import {ViewChild} from '@angular/core';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html',
})
export class TabsPage {
  
@ViewChild('myTabs') tabRef: Tabs;
  
  whatsOn: any = WhatsOnPage;
  people: any = PeoplePage;
  explore: any = ExplorePage;
  search: any = SearchPage;
  notifications: any = NotificationsPage;
  me: any = MePage;
  menuPage: any;
  
  constructor(public menu: MenuController, public nav: NavController, public events: Events) {
    this.nav = nav;
    this.menu = menu; 
    this.events = events;
    
    this.events.subscribe('menu:navigate', (navigateTo) => {
      this.menuPage = navigateTo;
      this.goToPage();
    })

  }
  
  goToPage() {
    this.nav.push(this.menuPage[0]);
  }
  
  openLeftMenu() {
    this.menu.open('left');
  }

  openRightMenu() {
    this.menu.open('right');
  }
  
  goToNotifications() {
    this.nav.push(NotificationsPage);
  }
  
  goBack () {
    this.nav.pop();
  }
  
  goToMe () {
    this.nav.push(MePage);
  }
  
  goToPeople () {
    console.log('false');
    this.tabRef.select(0);
  }
  
  goToProjects () {
    console.log('false');
    this.tabRef.select(2);
  }
  
}
