import {Component} from '@angular/core';
import {NavController, MenuController, Events, Alert, List} from 'ionic-angular';
import {NgClass, NgStyle} from '@angular/common';
import {ViewChild} from '@angular/core';
import {MePage} from '../me/me';
import {TabsPage} from '../tabs/tabs';
import {ProfilePage} from '../profile/profile';
import {CirclePage} from '../circle/circle';
import {DummyService} from '../../providers/dummy/dummy';
import {ShufflePipe} from '../../providers/pipes/pipes';
import {Iterated} from '../../providers/app-events/app-events';

@Component({
  templateUrl: 'build/pages/pins/pins.html',
  providers: [DummyService],
  pipes: [ShufflePipe],
  directives: [NgClass, NgStyle, Iterated]
})

export class PinsPage {
  
  @ViewChild(List) list: List;
  
  items;
  getDummyPins: any;
  searchQuery: string = '';
  contentWidth = null;
  getDummyProfiles: any;
  imgWidth: number = 75;
  unit: string = 'px';
  pinIsProfile: boolean;
  pinIsCircle: boolean;
   
  constructor(public nav: NavController, public menu: MenuController, public dummy: DummyService, public events: Events) {
    this.nav = nav;
    this.menu = menu;
    this.dummy = dummy;
    this.events = events; 
    this.getDummyPins = dummy.getSamplePins();
    this.getDummyProfiles = dummy.getSampleProfiles();
    this.initializeItems();
    this.pinIsCircle = false;
    this.pinIsProfile = false;
    this.menu.swipeEnable(true, 'left'); 
    this.menu.swipeEnable(false, 'right'); 

    this.events.subscribe('element:iterated', (data) => { 
        this.calculateWidth(data);
    });    

  }
  
/*  ionViewLoaded () {
    var componentName = PinsPage;
    this.events.publish('page:current', componentName);
  }*/
  
  goToProfile () {
    this.nav.push(MePage);
  }
 
  initializeItems() {
    this.items = this.getDummyPins;  
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

  calculateWidth(data) {

      var imgCount = data[0].length;
      var scrollBarWidth = 25;
      var spacing = (5 * 2 * imgCount) + scrollBarWidth;
      this.contentWidth = ((imgCount * this.imgWidth) + spacing + this.unit); 
      
  }
  
  goToUser (profile) {
    this.nav.push(ProfilePage, {'profile' : profile});
  }
  
  goToPin (pin, i) {
    if (pin.type == 'profile')
      this.nav.push(ProfilePage, {'profile' : pin});
    else 
      this.nav.push(CirclePage);
  }
  
  unpinAlert (pin) {
      let alert = Alert.create({
          title: 'Removed Pin',
          subTitle: 'This pin has been removed.',
          buttons: [
              {
                  text: 'OK',
                  handler: () => {
                    this.list.closeSlidingItems();
                  }
              }
          ]
      });
          this.nav.present(alert);
  }
  
  goToMe () {
    this.nav.push(MePage);
  }
  
}
