import {Component} from '@angular/core';
import {NavController, MenuController, Modal, NavParams, ViewController, ActionSheet, Alert, Events} from 'ionic-angular';
import {DummyService} from '../../providers/dummy/dummy';
import {ProjectsPage} from '../../pages/projects/projects';

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
    <h2>New Circle Message</h2>
    <ion-list>

        <ion-item>
            <ion-label fixed>Title</ion-label>
            <ion-input type="text" placeholder="e.g. 'Joining...'" [(ngModel)]="newMessage.title" (blur)="buttonState($event)"></ion-input>
        </ion-item>

        <ion-item>
            <ion-label stacked>Message</ion-label>
            <ion-textarea placeholder="e.g. 'Hey there! Your group seems interesting...'" [(ngModel)]="newMessage.message"></ion-textarea>
        </ion-item>

    </ion-list> 
    <button crimson block (click)="showAlert()" [disabled]="emptyInput"><ion-icon name="send"></ion-icon> Send Message</button>
  </ion-content>`,
  providers: [DummyService]

})

export class NewCircleMessage {
    
    newMessage: any;
    emptyInput: boolean = true;

    constructor(params: NavParams, public viewCtrl: ViewController, public nav: NavController, public dummy: DummyService) {
        this.viewCtrl = viewCtrl;
        this.newMessage = dummy.getCircleMessageModel();
    }

    close() {
        this.viewCtrl.dismiss();
    }
    
    showAlert() {
        let alert = Alert.create({
        title: 'Message Sent',
        subTitle: 'Your message has been sent to organisers of this circle.',
        buttons: [
            {
                text: 'OK',
                handler: () => {
                    this.viewCtrl.dismiss();
                }
            }
        ]
        });
        this.nav.present(alert);
    }
    
    buttonState (event) {
        this.emptyInput = this.newMessage.title != '' ? false : true;
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
    <h2>New Buddy Message</h2>
    <ion-list>

        <ion-item>
            <ion-label fixed>Title</ion-label>
            <ion-input type="text" placeholder="e.g. 'For Tonight...'" [(ngModel)]="newMessage.title" (blur)="buttonState($event)"></ion-input>
        </ion-item>

        <ion-item>
            <ion-label stacked>Message</ion-label>
            <ion-textarea placeholder="e.g. 'When we meeting up?" [(ngModel)]="newMessage.message"></ion-textarea>
        </ion-item>

    </ion-list> 
    <button crimson block (click)="showAlert()" [disabled]="emptyInput"><ion-icon name="send"></ion-icon> Send Message</button>
    <button crimson block (click)="close()"><ion-icon name="close"></ion-icon> Cancel</button>
  </ion-content>`,
  providers: [DummyService]

})

export class NewBuddyMessage {
    
    newMessage: any;
    emptyInput: boolean = true;

    constructor(params: NavParams, public viewCtrl: ViewController, public nav: NavController, public dummy: DummyService) {
        this.viewCtrl = viewCtrl;
        this.newMessage = dummy.getBuddyMessageModel();
    }

    close() {
        this.viewCtrl.dismiss();
    }
    
    showAlert() {
        let alert = Alert.create({
        title: 'Message Sent',
        subTitle: 'Your message has been sent to your buddy.',
        buttons: [
            {
                text: 'OK',
                handler: () => {
                    this.viewCtrl.dismiss();
                }
            }
        ]
        });
        this.nav.present(alert);
    }
    
    buttonState (event) {
        this.emptyInput = this.newMessage.title != '' ? false : true;
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
    <h2 class="center-text">Filter Projects</h2>
    <ion-searchbar class="search-searchbar" style="margin-bottom: 10px;" placeholder="Type a skill (e.g. Computing)">
    </ion-searchbar>
    <ion-searchbar class="search-searchbar" placeholder="Any more info (e.g. 'CAD')">
    </ion-searchbar>
    
   <ion-list-header class="center-text">
        MORE OPTIONS
    </ion-list-header>  
    
    <ion-list>

    <ion-item>
    <ion-label>Type</ion-label>
    <ion-select okText="Okay">
        <ion-option value="bacon" checked="true">Class</ion-option>
        <ion-option value="olives">Department</ion-option>
        <ion-option value="peppers">Faculty</ion-option>
        <ion-option value="mushrooms">Society</ion-option>
        <ion-option value="mushrooms">External</ion-option>
    </ion-select>
    </ion-item> 

    <ion-item>
    <ion-label>Level</ion-label>
    <ion-select okText="Okay">
        <ion-option value="bacon" checked="true">Vocational/Further Education</ion-option>
        <ion-option value="peppers">Undergraduate</ion-option>
        <ion-option value="mushrooms">Postgraduate</ion-option>
        <ion-option value="peppers">PhD</ion-option>
        <ion-option value="mushrooms">Alumni</ion-option>
        <ion-option value="mushrooms">Other</ion-option>
    </ion-select>
    </ion-item> 
    
    <ion-item>
    <ion-label>Experience</ion-label>
    <ion-select okText="Okay">
        <ion-option value="bacon" checked="true">Less than a year</ion-option>
        <ion-option value="olives">More than a year</ion-option>
        <ion-option value="peppers">More than 2 years</ion-option>
        <ion-option value="mushrooms">3 years+</ion-option>
    </ion-select>
    </ion-item> 
    
    </ion-list> 
    
    <button block crimson class="margin-top-small" (click)="goToProjects()"> <ion-icon name="search"></ion-icon> GO!</button>
  
  </ion-content>`,
  providers: [DummyService]

})

export class FilterProjects {
    
    newFilter: any;
    emptyInput: boolean = true;

    constructor(params: NavParams, public viewCtrl: ViewController, public nav: NavController, public dummy: DummyService) {
        this.viewCtrl = viewCtrl;
        this.newFilter = dummy.getBuddyMessageModel();
    }

    close() {
        this.viewCtrl.dismiss();
    }
    
    goToProjects () {
        this.nav.push(ProjectsPage);
    }
    
    showAlert() {
        let alert = Alert.create({
        title: 'Message Sent',
        subTitle: 'Your message has been sent to your buddy.',
        buttons: [
            {
                text: 'OK',
                handler: () => {
                    this.viewCtrl.dismiss();
                }
            }
        ]
        });
        this.nav.present(alert);
    }
    
    buttonState (event) {
        this.emptyInput = this.newFilter.title != '' ? false : true;
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
    <h2>New Project Message</h2>
    <ion-list>

        <ion-item>
            <ion-label fixed>Title</ion-label>
            <ion-input type="text" placeholder="e.g. 'Joining the project...'" [(ngModel)]="newMessage.title" (blur)="buttonState($event)"></ion-input>
        </ion-item>

        <ion-item>
            <ion-label stacked>Message</ion-label>
            <ion-textarea placeholder="e.g. 'Just a question..." [(ngModel)]="newMessage.message"></ion-textarea>
        </ion-item>

    </ion-list> 
    <button crimson block (click)="showAlert()" [disabled]="emptyInput"><ion-icon name="send"></ion-icon> Send Message</button>
    <button crimson block (click)="close()"><ion-icon name="close"></ion-icon> Cancel</button>
  </ion-content>`,
  providers: [DummyService]

})

export class NewProjectMessage {
    
    newMessage: any;
    emptyInput: boolean = true;

    constructor(params: NavParams, public viewCtrl: ViewController, public nav: NavController, public dummy: DummyService) {
        this.viewCtrl = viewCtrl;
        this.newMessage = dummy.getCircleMessageModel();
    }

    close() {
        this.viewCtrl.dismiss();
    }
    
    showExampleAlert() {
        let alert = Alert.create({
        title: 'Uploaded Successfully',
        subTitle: 'Your project photo has sucessfully been updated.',
        buttons: [
            {
                text: 'OK',
                handler: () => {
                    this.viewCtrl.dismiss();
                }
            }
        ]
        });
        this.nav.present(alert);
    }
    
    buttonState (event) {
        this.emptyInput = this.newMessage.title != '' ? false : true;
    }

}