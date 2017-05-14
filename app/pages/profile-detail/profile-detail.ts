import {Component} from '@angular/core';
import {NavController, MenuController, Modal, NavParams, ViewController, ActionSheet, Alert, Events} from 'ionic-angular';
import {LandingPage} from '../landing/landing';
import {SearchPage} from '../search/search';
import {EditMePage} from '../edit-me/edit-me';
import {BuddiesPage} from '../buddies/buddies';
import {CirclesPage} from '../circles/circles';
import {PinsPage} from '../pins/pins';
import {TabsPage} from '../tabs/tabs';
import {MePage} from '../me/me';
import {ShufflePipe} from '../../providers/pipes/pipes';
import {ProfilePin} from '../../providers/pins/pins';
import {NewBuddyMessage} from '../../providers/messages/messages';

@Component({
  templateUrl: 'build/pages/profile-detail/profile-detail.html',
  providers: [ProfilePin],
  pipes: [ShufflePipe]
})
export class ProfileDetailPage {

  actionData: any;
  profileData: any;
  randomNum: any;
  
  constructor (public nav: NavController, public menu: MenuController, public events: Events, public params: NavParams) {
    
    this.nav = nav;
    this.menu = menu;
    this.events = events;
    this.params = params;
    this.profileData = this.params.get('profile');
    this.randomNum = {
      one: (Math.floor(Math.random() * 98) + 10),
      two: (Math.floor(Math.random() * 98) + 10)
      };
      
    this.menu.swipeEnable(true, 'left'); 
    this.menu.swipeEnable(false, 'right'); 
    
    this.events.subscribe('menu:setting', (action) => { // Note: Event service will convert 'action' data from array to blank object, so each section of data should be referenced from the key of the object: e.g. [0]
        this.actionData = action;
        this.runSetting();
    });
    
  }
  
/*    ionViewLoaded () {
        var componentName = ProfileDetailPage;
        this.events.publish('page:current', componentName);
    }*/
    
    goNext () {
        this.nav.push(SearchPage);
    }
    
    editMe () {
        this.nav.push(EditMePage, {'profile' : this.profileData});    
    }

    goBack () {
        this.nav.pop();
    }
    
    goHome () {
        this.nav.push(LandingPage);
    }
    
    goToBuddies () {
        this.nav.push(BuddiesPage);
    }
    
    goToCircles () {
        this.nav.push(CirclesPage);
    }
    
    goToPins () {
        this.nav.push(PinsPage);
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
    
    runSetting () {
        if (this.actionData[0].type === 'Alert')
            this.presentAlert();
        else if (this.actionData[0].type === 'ActionSheet')
            this.presentActionSheet();
        else if (this.actionData[0].component != null)
            this.goToPage();     
    }
    
    presentAlert() {
        let alert = Alert.create(this.actionData[0].data);
        this.nav.present(alert); 
    }
    
    presentActionSheet() {
        let actionSheet = ActionSheet.create(this.actionData[0].data);
        this.nav.present(actionSheet); 
    }
    
    goToPage () {
        this.nav.push(this.actionData[0].component);   
    }
    
    pinContent() {
        let pinModal = Modal.create(ProfilePin, {'profile' : this.profileData});
        this.nav.present(pinModal);
    }
    
    messageFriend (profile) {
        let messageModal = Modal.create(NewBuddyMessage);
        this.nav.present(messageModal);
    }
    
    addFriendAlert() {
        let alert = Alert.create({
            title: 'Buddy Added',
            subTitle: 'Now following: ' + this.profileData.name,
            buttons: ['OK']
        });
            this.nav.present(alert);
    }
    
    goToMe () {
        this.nav.pop();
    }
   
}