import {Component} from '@angular/core';
import {NavController, MenuController, Modal, NavParams, ViewController, ActionSheet, Alert, Events} from 'ionic-angular';
import {MePage} from '../me/me';
import {TabsPage} from '../tabs/tabs';
import {DummyService} from '../../providers/dummy/dummy';

@Component({
  templateUrl: 'build/pages/edit-me/edit-me.html',
  providers: [DummyService]
})
export class EditMePage {
  
  dummyProfile: any;
  currentProfile: any;
  
  constructor(public nav: NavController, public menu: MenuController, public events: Events, public dummy: DummyService, public params: NavParams) {
      
    this.nav = nav;
    this.menu = menu;
    this.events = events;
    this.dummyProfile = dummy.getSampleProfiles();
    this.params = params;
    this.currentProfile = this.params.get('profile');
    
/*    this.menu.swipeEnable(true, 'left'); 
    this.menu.swipeEnable(false, 'right'); */
  }

/*  ionViewLoaded () {
    var componentName = EditMePage;
    this.events.publish('page:current', componentName);
  }*/
  
  goBack () {
    this.nav.pop();
  }
  
  saveProfile () {
    this.nav.push(MePage);
  }
  
  deleteSkill(i: number) {
        this.dummyProfile[0].skills.splice(i, 1);
  }
  
  deleteInterest(i: number) {
        this.dummyProfile[0].skills.splice(i, 1);
  }
  
  editSkillModal(skill) {
      let profileModal = Modal.create(EditSkill, {'userSkill': skill});
      this.nav.present(profileModal);
  }

  editInterestModal(interest) {
      let profileModal = Modal.create(EditInterest, {'userInterest': interest});
      this.nav.present(profileModal);
  }

  openLeftMenu() {
    this.menu.open('left');
  }
  
  goToMe () {
    this.nav.push(MePage);
  }

}

@Component({ 
  template: `
  <ion-content padding>
    <h2>Edit Skill</h2>
    <ion-list>

        <ion-item>
            <ion-label fixed>Name</ion-label>
            <ion-input type="text" [(ngModel)]="skillData.name"></ion-input>
        </ion-item>

        <ion-item>
            <ion-label stacked>Description</ion-label>
            <ion-textarea></ion-textarea>
        </ion-item>

    </ion-list> 
    <button crimson block (click)="showAlert()"><ion-icon name="edit"></ion-icon> Edit Skill</button>
    <button (click)="close()" crimson><ion-icon name="close"></ion-icon> Close</button>
  </ion-content>`
})

class EditSkill {
  
    skillData: any;

    constructor(params: NavParams, public viewCtrl: ViewController, public nav: NavController) {
        this.viewCtrl = viewCtrl;
        this.skillData = params.get('userSkill');
    }

    close() {
        this.viewCtrl.dismiss();
    }
    
    showAlert() {
        let alert = Alert.create({
        title: 'Skill Edited',
        subTitle: 'Your skill has been updated.',
        buttons: [
            {
                text: 'OK',
                handler: data => {
                    this.viewCtrl.dismiss();
                }
            }
        ]
        });
        this.nav.present(alert);
    }

}

@Component({ 
  template: `
  <ion-content padding>
    <h2>Edit Interest</h2>
    <ion-list>

        <ion-item>
            <ion-label fixed>Name</ion-label>
            <ion-input type="text" [(ngModel)]="interestData.name"></ion-input>
        </ion-item>

        <ion-item>
            <ion-label stacked>Description</ion-label>
            <ion-textarea></ion-textarea>
        </ion-item>

    </ion-list> 
    <button crimson block (click)="showAlert()"><ion-icon name="edit"></ion-icon> Edit Interest</button>
    <button (click)="close()" crimson><ion-icon name="close"></ion-icon> Close</button>
  </ion-content>`
})

class EditInterest {
  
    interestData: any;

    constructor(params: NavParams, public viewCtrl: ViewController, public nav: NavController) {
        this.viewCtrl = viewCtrl;
        this.interestData = params.get('userInterest');
        console.log(this.interestData)
    }

    close() {
        this.viewCtrl.dismiss();
    }
    
    showAlert() {
        let alert = Alert.create({
        title: 'Interest Edited',
        subTitle: 'Your interest has been updated.',
        buttons: [
            {
                text: 'OK',
                handler: data => {
                    this.viewCtrl.dismiss();
                }
            }
        ]
        });
        this.nav.present(alert);
    }

}