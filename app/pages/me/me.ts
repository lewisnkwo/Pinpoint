import {Component} from '@angular/core';
import {NavController, MenuController, Modal, NavParams, ViewController, ActionSheet, Alert, Events, Tabs} from 'ionic-angular';
import {LandingPage} from '../landing/landing';
import {SearchPage} from '../search/search';
import {EditMePage} from '../edit-me/edit-me';
import {BuddiesPage} from '../buddies/buddies';
import {CirclesPage} from '../circles/circles';
import {PinsPage} from '../pins/pins';
import {PeoplePage} from '../people/people';
import {ProfileDetailPage} from '../profile-detail/profile-detail';
import {AddProjectPage} from '../add-project/add-project';
import {NotificationsPage} from '../notifications/notifications';
import {DummyService} from '../../providers/dummy/dummy';
import {ViewChild} from '@angular/core';

@Component({
  templateUrl: 'build/pages/me/me.html',
  providers: [DummyService]
})
export class MePage {
    
@ViewChild('myTabs') tabRef: Tabs;

    actionData: any;
    dummyProfile: any;
    navType = false;
    currentProfile;

    constructor (public nav: NavController, public menu: MenuController, public events: Events, public dummy: DummyService, public params: NavParams) {

    this.nav = nav;
    this.menu = menu;
    this.events = events;
    this.dummyProfile = dummy.getSampleProfiles();
    this.params = params;
    this.currentProfile = this.dummyProfile[(Math.floor(Math.random() * 8) + 1)];

    this.menu.swipeEnable(true, 'left'); 
    this.menu.swipeEnable(false, 'right'); 

/*    this.events.subscribe('menu:setting', (action) => { 
        this.actionData = action;
        this.runSetting();
    });
*/
    }
  
/*    ionViewLoaded () {
        var componentName = MePage;
        this.events.publish('page:current', componentName);
    } */

    goNext () {
        this.nav.push(SearchPage);
    }

    editMe () {
        this.nav.push(EditMePage, {'profile' : this.currentProfile});    
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
    
    goToPeople () {
        this.nav.push(PeoplePage);
    }
    
    goToProjects () {
        this.nav.push(SearchPage, { paramTab: this.navType });
    }
    
    showDetail () {
        this.nav.push(ProfileDetailPage, {'profile' : this.currentProfile});        
    }
    
    addProject () {
        this.nav.push(AddProjectPage);        
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

    presentSkillModal() {
        let profileModal = Modal.create(AddSkill);
        this.nav.present(profileModal);
        profileModal.onDismiss(data => {
            let newArray = this.dummyProfile[0].skills;
            if (data != null)
            newArray.unshift(data);
            this.dummyProfile[0].skills = newArray;
        });
    }

    presentInterestModal() {
        let profileModal = Modal.create(AddInterest);
        this.nav.present(profileModal);
        profileModal.onDismiss(data => {
            let newArray = this.dummyProfile[0].interests;
            if (data != null)
            newArray.unshift(data);
            this.dummyProfile[0].interests = newArray;
        });
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
    
    goToNotifications () {
        this.nav.push(NotificationsPage);
    }
}

@Component({ 
  template: `
  <ion-navbar *navbar crimson hideBackButton>
      
      <ion-title><img class="navbar-logo" src="https://pinp-draft.s3-eu-west-1.amazonaws.com/navbar-logo.png"></ion-title>
      
      <ion-buttons end>
          <button (click)="close()"> 
              <ion-icon name='close'></ion-icon>
          </button>
      </ion-buttons>
       
  </ion-navbar>
  <ion-content padding>
    <h2>Add Skill</h2>
    <ion-list>

        <ion-item>
            <ion-label fixed>Name</ion-label>
            <ion-input type="text" placeholder="e.g. 'Darts'" [(ngModel)]="newSkill.name" (blur)="buttonState($event)"></ion-input>
        </ion-item>

        <ion-item>
            <ion-label stacked>Description</ion-label>
            <ion-textarea placeholder="e.g. 'My total bullseye record is...'" [(ngModel)]="newSkill.description"></ion-textarea>
        </ion-item>

    </ion-list> 
    <button crimson block (click)="showAlert()" [disabled]="emptyInput"><ion-icon name="add"></ion-icon> Add Skill</button>
  </ion-content>`,
  providers: [DummyService]
})

class AddSkill {
    
    newSkill: any;
    emptyInput: boolean = true;

    constructor(params: NavParams, public viewCtrl: ViewController, public nav: NavController, public dummy: DummyService) {
        this.viewCtrl = viewCtrl;
        this.newSkill = dummy.getSkillModel();
    }

    close() {
        this.viewCtrl.dismiss(null);
    }
    
    showAlert() {
        let alert = Alert.create({
        title: 'Skill Added',
        subTitle: 'This makes you more discoverable on PinPoint!',
        buttons: [
            {
                text: 'OK',
                handler: () => {
                    let data = this.newSkill;
                    this.viewCtrl.dismiss(data);
                }
            }
        ]
        });
        this.nav.present(alert);
    }
    
    buttonState (event) {
        this.emptyInput = this.newSkill.name != '' ? false : true;
    }

}

@Component({ 
  template: `
  <ion-navbar *navbar crimson hideBackButton>
      
      <ion-title><img class="navbar-logo" src="https://pinp-draft.s3-eu-west-1.amazonaws.com/navbar-logo.png"></ion-title>
      
      <ion-buttons end>
          <button (click)="close()"> 
              <ion-icon name='close'></ion-icon>
          </button>
      </ion-buttons>
       
  </ion-navbar>
  <ion-content padding>
    <h2>Add Interest</h2>
    <ion-list>

        <ion-item>
            <ion-label fixed>Name</ion-label>
            <ion-input type="text" placeholder="e.g. 'Drone Tech'" [(ngModel)]="newInterest.name" (blur)="buttonState($event)"></ion-input>
        </ion-item>

        <ion-item>
            <ion-label stacked>Description</ion-label>
            <ion-textarea placeholder="e.g. 'Really interested in the concept of robots flying around'" [(ngModel)]="newInterest.description"></ion-textarea>
        </ion-item>

    </ion-list> 
    <button crimson block (click)="showAlert()" [disabled]="newInterest.name == ''"><ion-icon name="add"></ion-icon> Add Interest</button>
  </ion-content>`,
  providers: [DummyService]
})

class AddInterest {
    
    newInterest: any;
    emptyInput: boolean = true;

    constructor(params: NavParams, public viewCtrl: ViewController, public nav: NavController, public dummy: DummyService) {
        this.viewCtrl = viewCtrl;
        this.newInterest = dummy.getInterestModel();
    }

    close() {
        this.viewCtrl.dismiss();
    }
    
    showAlert() {
        let alert = Alert.create({
        title: 'Interest Added',
        subTitle: 'This makes you more discoverable on PinPoint!',
        buttons: [
            {
                text: 'OK',
                handler: () => {
                    let data = this.newInterest;
                    this.viewCtrl.dismiss(data);
                }
            }
        ]
        });
        this.nav.present(alert);
    }
    
    buttonState (event) {
        this.emptyInput = this.newInterest.name != '' ? false : true;
    }
    
}