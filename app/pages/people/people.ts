import {Component} from '@angular/core';
import {NavController, MenuController, Events, Modal, Alert} from 'ionic-angular';
import {MePage} from '../me/me';
import {TabsPage} from '../tabs/tabs';
import {ProfilePage} from '../profile/profile';
import {DummyService} from '../../providers/dummy/dummy';
import {ShufflePipe} from '../../providers/pipes/pipes';
import {ProfilePin} from '../../providers/pins/pins';
import {NewBuddyMessage} from '../../providers/messages/messages';

@Component({
  templateUrl: 'build/pages/people/people.html',
  providers: [DummyService, ProfilePin, NewBuddyMessage],
  pipes: [ShufflePipe]
})
export class PeoplePage {

  getDummyProfiles: any;
  searchQuery: string = '';
  items;
  
  constructor(public nav: NavController, public menu: MenuController, public dummy: DummyService, public events: Events) {
    this.nav = nav;
    this.menu = menu;
    
    this.menu.swipeEnable(true, 'left'); 
    this.menu.swipeEnable(false, 'right'); 

    this.dummy = dummy;
    this.events = events; 
    this.getDummyProfiles = dummy.getSampleProfiles();
    this.initializeItems();
  }
  
/*  ionViewLoaded () {
    var componentName = PeoplePage;
    this.events.publish('page:current', componentName);
  }*/
  
  goToProfile () {
    this.nav.push(MePage);
  }
 
  initializeItems() {
    this.items = this.getDummyProfiles;  
  }
  
  openLeftMenu() {
    this.menu.open('left');
  }
  
  openRightMenu() {
    this.menu.open('right');
  }

  getItems(searchbar) {
    
    this.initializeItems();
    
    var queryList = this.items;

    var q = searchbar.srcElement.value;

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
  
  removeFriend (i: number) {
        this.items.splice(i, 1);
  }
  
  goToUser (people) {
    this.nav.push(ProfilePage, {'profile' : people});
  }
  
  pinFriend (profile) {
      let pinModal = Modal.create(ProfilePin, {'profile' : profile});
      this.nav.present(pinModal);
  }
  
  messageFriend (profile) {
      let messageModal = Modal.create(NewBuddyMessage);
      this.nav.present(messageModal);
  }
  
  goToMe () {
    this.nav.pop();
  }

  addFriend(people) {

      let alert = Alert.create({
          title: 'Added',
          subTitle: 'You have just added ' + people.name + ' as a friend!',
          buttons: ['OK']
      });
          this.nav.present(alert);
  }
  
}


