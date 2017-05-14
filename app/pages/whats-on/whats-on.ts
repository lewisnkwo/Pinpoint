import {Component} from '@angular/core';
import {NavController, MenuController, Modal, NavParams, ViewController, ActionSheet, Alert, Events} from 'ionic-angular';
import {NgStyle} from '@angular/common';
import {Calendar} from 'ionic-native';
import {ProfilePage} from '../profile/profile';
import {AddCirclePage} from '../add-circle/add-circle';
import {TabsPage} from '../tabs/tabs';
import {DummyService} from '../../providers/dummy/dummy';
import {ShufflePipe} from '../../providers/pipes/pipes';
import {DummyCirclePin} from '../../providers/pins/pins';
import {Iterated} from '../../providers/app-events/app-events';


@Component({
  templateUrl: 'build/pages/whats-on/whats-on.html',
  directives: [NgStyle, Iterated],
  providers: [DummyService, DummyCirclePin]
})
export class WhatsOnPage {
  
  contentWidth = null;
  getDummyProfiles: any;
  getDummyCircles: any;
  imgWidth: number = 75;
  unit: string = 'px';
  d: any;
 
  constructor(public nav: NavController, public menu: MenuController, public dummy: DummyService, public events: Events) {
      
    this.nav = nav;
    this.menu = menu;
    this.events = events;
    
    this.menu.swipeEnable(true, 'left'); 
    this.menu.swipeEnable(false, 'right'); 
    
    this.getDummyProfiles = dummy.getSampleProfiles();
    this.getDummyCircles = dummy.getSampleCircles(); 
    
    this.events.subscribe('element:iterated', (data) => { 
        this.calculateWidth(data);
    });

    this.d = new Date(new Date().getTime() + 3*24*60*60*1000);
    
  }

/*    ionViewLoaded () {
      var componentName = WhatsOnPage;
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
    
    joinedEventAlert() {
    let alert = Alert.create({
        title: 'Signed Up',
        subTitle: 'You just joined the ' + this.getDummyCircles[0].info[0].name + ' event.',
        buttons: ['OK']
    });
        this.nav.present(alert);
    }
    
    
    createCalendarEvent() {
        let title = "Demo PinPoint Event";
        let location = "London, SW7 2AZ"
        let notes = "Don't be late!"
        let startDate = Date();
        Calendar.openCalendar(this.d);
    }
    
    addCircle () {
        this.nav.push(AddCirclePage);
    }
    
    goToMe () {
      this.nav.push(TabsPage);
    }
     
}


