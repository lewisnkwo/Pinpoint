import {Component} from '@angular/core';
import {NavController, Modal, NavParams, ViewController} from 'ionic-angular';

@Component({ 
  template: `
  <ion-content padding class="pin-modal">
    <ion-card class="pin-content">
    <img class="navbar-logo pin-logo" src="https://pinp-draft.s3-eu-west-1.amazonaws.com/navbar-logo.png">
        <p class="pin-title center-text">You just pinned <strong>{{newPin?.name}}</strong></p>
        <img class="pin-image" [src]="newPin?.image">
        <div class="pin-ok">
        <button block light (click)="close()">OK</button>
        <button block light outline (click)="close()">Undo</button>
        </div>
    </ion-card>
  </ion-content>`
})

export class ProfilePin {
    
    newPin: any;
    emptyInput: boolean = true;

    constructor(params: NavParams, public viewCtrl: ViewController, public nav: NavController) {
        this.viewCtrl = viewCtrl;
        this.newPin = params.get('profile');
    }

    close() {
        this.viewCtrl.dismiss(null);
    }

}

@Component({ 
  template: `
  <ion-content padding class="pin-modal">
    <ion-card class="pin-content">
    <img class="navbar-logo pin-logo" src="https://pinp-draft.s3-eu-west-1.amazonaws.com/navbar-logo.png">
        <p class="pin-title center-text">You just pinned <strong>{{newCirclePin?.name}}</strong></p>
        <img class="pin-image" [src]="newCirclePin?.image">
        <div class="pin-ok">
        <button block orange (click)="close()">OK</button>
        <button block light outline (click)="close()">Undo</button>
        </div>
    </ion-card>
  </ion-content>`
})

export class CirclePin {
    
    newCirclePin: any;
    emptyInput: boolean = true;

    constructor(params: NavParams, public viewCtrl: ViewController, public nav: NavController) {
        this.viewCtrl = viewCtrl;
        this.newCirclePin = params.get('circle');
    }

    close() {
        this.viewCtrl.dismiss(null);
    }

}

@Component({ 
  template: `
  <ion-content padding class="pin-modal">
    <ion-card class="pin-content">
    <img class="navbar-logo pin-logo" src="https://pinp-draft.s3-eu-west-1.amazonaws.com/navbar-logo.png">
        <p class="pin-title center-text">You just pinned <strong>Shaping Technology</strong></p>
        <div class="pin-ok">
        <button block orange (click)="close()">OK</button>
        <button block light outline (click)="close()">Undo</button>
        </div>
    </ion-card>
  </ion-content>`
})

export class DummyCirclePin {
    
    newCirclePin: any;
    emptyInput: boolean = true;

    constructor(params: NavParams, public viewCtrl: ViewController, public nav: NavController) {
        this.viewCtrl = viewCtrl;
        this.newCirclePin = params.get('circle');
    }

    close() {
        this.viewCtrl.dismiss(null);
    }

}

@Component({ 
  template: `
  <ion-content padding class="pin-modal">
    <ion-card class="pin-content">
    <img class="navbar-logo pin-logo" src="https://pinp-draft.s3-eu-west-1.amazonaws.com/navbar-logo.png">
        <p class="pin-title center-text">You just pinned <strong>{{newProjectPin.name}}</strong></p>
        <div class="pin-ok">
        <button block orange (click)="close()">OK</button>
        <button block light outline (click)="close()">Undo</button>
        </div>
    </ion-card>
  </ion-content>`
})

export class ProjectPin {
    
    newProjectPin: any;
    emptyInput: boolean = true;

    constructor(params: NavParams, public viewCtrl: ViewController, public nav: NavController) {
        this.viewCtrl = viewCtrl;
        this.newProjectPin = params.get('project');
    }

    close() {
        this.viewCtrl.dismiss(null);
    }

}