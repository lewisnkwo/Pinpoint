import {Component} from '@angular/core';
import {NavController, MenuController, Events, Modal} from 'ionic-angular';
import {MePage} from '../me/me';
import {TabsPage} from '../tabs/tabs';
import {ProfilePage} from '../profile/profile';
import {UniPage} from '../uni/uni';
import {CirclePage} from '../circle/circle';
import {AddCirclePage} from '../add-circle/add-circle';
import {DummyService} from '../../providers/dummy/dummy';
import {ShufflePipe} from '../../providers/pipes/pipes';
import {CirclePin} from '../../providers/pins/pins';
import {NewCircleMessage} from '../../providers/messages/messages';

@Component({
  templateUrl: 'build/pages/circles/circles.html',
  providers: [DummyService, CirclePin],
  pipes: [ShufflePipe]
})

export class CirclesPage {
  getDummyProfiles: any;
  getDummyCircles: any;
  searchQuery: string = '';
  items;
  shouldHideCancel = true;

  constructor(public nav: NavController, public menu: MenuController, public dummy: DummyService, public events: Events) {
    this.nav = nav;
    this.menu = menu;
    this.dummy = dummy;
    this.events = events; 
    
    this.menu.swipeEnable(true, 'left'); 
    this.menu.swipeEnable(false, 'right'); 
    
    this.getDummyCircles = dummy.getSampleCircles();
    this.getDummyProfiles = dummy.getSampleProfiles();
    this.initializeItems();
  }

/*  ionViewLoaded () {
    var componentName = CirclesPage;
    this.events.publish('page:current', componentName);
  }*/

  goToProfile () {
    this.nav.push(MePage);
  }
  
  goToUni () {
    this.nav.push(UniPage);
  }
  goToCircle () {
    this.nav.push(CirclePage);
  }
  
  goToAddCircle () {
    this.nav.push(AddCirclePage);
  }

  initializeItems() {
    this.items = this.getDummyCircles[0].info;  
  }

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

  getItems(searchbar) {
    
    this.initializeItems();
    
    var queryList = this.items;

    var q = searchbar.value;

    if (q.trim() == '') {
      return;
    }
    
    var results = [];

    for (var i=0 ; i < queryList.length ; i++) {
      
      var profileName = queryList[i].name.toLowerCase().replace(/ /g,'');
      var query = q.toLowerCase();
      
      if (query.indexOf(' ')) {
        var query = query.replace(/ /g,'');
      }
      
      if (profileName.indexOf(query) > -1) {
        results.push(queryList[i]);
      }
      
    }
    
    this.items = results;

  }

  removeFriend(i: number) {
        this.items.splice(i, 1);
  }

  goToUser (profile) {
    this.nav.push(ProfilePage, {'profile' : profile});
  }
  
  pinCircle (circle) {
      let pinModal = Modal.create(CirclePin, {'circle' : circle});
      this.nav.present(pinModal);
  }
  
  messageCircle () {
      let messageModal = Modal.create(NewCircleMessage);
      this.nav.present(messageModal);
  }
  
  goToMe () {
    this.nav.push(MePage);
  }
  
}