import {Component} from '@angular/core';
import {NavController, MenuController, Events, Modal, Alert} from 'ionic-angular';
import {ProfilePage} from '../profile/profile';
import {NgStyle} from '@angular/common';
import {DummyService} from '../../providers/dummy/dummy';
import {Iterated} from '../../providers/app-events/app-events';
import {DummyCirclePin} from '../../providers/pins/pins';
import {NewCircleMessage} from '../../providers/messages/messages';
import {MePage} from '../me/me';
import {TabsPage} from '../tabs/tabs';

@Component({
  templateUrl: 'build/pages/circle/circle.html',
  directives: [NgStyle, Iterated],
  providers: [DummyService, DummyCirclePin, NewCircleMessage]
})
export class CirclePage {
  
  contentWidth = null;
  getDummyProfiles: any;
  getDummyCircles: any;
  imgWidth: number = 75;
  unit: string = 'px';
  
  constructor(public nav: NavController, public menu: MenuController, public events: Events, public dummy: DummyService) {
    this.nav = nav;
    this.menu = menu;
    this.events = events;
    
    this.menu.swipeEnable(false, 'left'); 
    this.menu.swipeEnable(false, 'right'); 
    
    this.getDummyProfiles = dummy.getSampleProfiles();
    this.getDummyCircles = dummy.getSampleCircles();
    
    this.events.subscribe('element:iterated', (data) => { 
        this.calculateWidth(data);
    });
      
  }
  
/*  ionViewLoaded () {
    var componentName = CirclePage;
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
  
  calculateWidth(data) {

      var imgCount = data[0].length;
      var scrollBarWidth = 25;
      var spacing = (5 * 2 * imgCount) + scrollBarWidth;
      this.contentWidth = ((imgCount * this.imgWidth) + spacing + this.unit); 
      
  }

  goToUser (member, i) {
      this.nav.push(ProfilePage, {'profile' : member});
  }
  
  pinContent() {
      let pinModal = Modal.create(DummyCirclePin, {'circle' : this.getDummyCircles});
      this.nav.present(pinModal);
  }
  
  joinedCircleAlert() {
      let alert = Alert.create({
          title: 'Signed Up',
          subTitle: 'You just joined the ' + this.getDummyCircles[0].info[0].name + ' event.',
          buttons: ['OK']
      });
          this.nav.present(alert);
  }
  
  joinedCircleEventAlerts() {
      let alert = Alert.create({
          title: 'Signed Up',
          subTitle: 'You will now receive notifications of event updates from ' + this.getDummyCircles[0].info[0].name,
          buttons: ['OK']
      });
          this.nav.present(alert);
  }
  
  sendMessage() {
      let messageModal = Modal.create(NewCircleMessage);
      this.nav.present(messageModal);
  }
  
  goToMe () {
    this.nav.push(MePage);
  }

}
