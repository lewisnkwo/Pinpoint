import {Component} from '@angular/core';
import {NavController, MenuController} from 'ionic-angular';
import {LoginPage} from '../login/login';
import {SignupPage} from '../signup/signup';
import {TabsPage} from '../tabs/tabs';

@Component({
  templateUrl: 'build/pages/landing/landing.html'
})

export class LandingPage {
  
  constructor(public nav: NavController, public menu: MenuController) {
    this.nav = nav;
    this.menu = menu;
    this.menu.swipeEnable(false, 'left'); 
    this.menu.swipeEnable(false, 'right');
  }
  
  signupUser () {
    this.nav.push(SignupPage);
  }
  
  signinUser () {
    this.nav.push(LoginPage);
  }
  
  continueUser () {
    this.nav.push(TabsPage);
  }
  
}

class LandingExtended extends LandingPage {
  
  name: string;
  
  constructor(public nav: NavController, public menu: MenuController) {
    super(nav, menu)
    this.name = name;
  }
  
}