import {Component} from '@angular/core';
import {NavController, MenuController, Events, Slides} from 'ionic-angular';
import {ViewChild} from '@angular/core';
import {ProfilePage} from '../profile/profile';
import {CirclePage} from '../circle/circle';
import {MePage} from '../me/me';
import {TabsPage} from '../tabs/tabs';
import {NgStyle} from '@angular/common';
import {DummyService} from '../../providers/dummy/dummy';
import {Iterated} from '../../providers/app-events/app-events';

@Component({
  templateUrl: 'build/pages/join/join.html',
  directives: [NgStyle, Iterated],
  providers: [DummyService]
})
export class JoinPage {
  
  @ViewChild('mySlider') slider: Slides;
  
  contentWidth = null;
  getDummyProfiles: any;
  imgWidth: number = 75;
  unit: string = 'px';
  
  circleSlideOptions = {
    loop: true
  };
  
  constructor(public nav: NavController, public menu: MenuController, public events: Events, public dummy: DummyService) {
    this.nav = nav;
    this.menu = menu;
    this.events = events;
    
    this.menu.swipeEnable(false, 'left'); 
    this.menu.swipeEnable(false, 'right'); 
    
    this.getDummyProfiles = dummy.getSampleProfiles();
    
    this.events.subscribe('element:iterated', (data) => { 
        this.calculateWidth(data);
    });
      
  }
  
/*  ionViewLoaded () {
    var componentName = JoinPage;
    this.events.publish('page:current', componentName);
  }*/

  goNext () {
      this.nav.push(TabsPage);
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
  
  goToSlide() {
  }
  
  goToCircle() {
    this.nav.push(MePage);
  }
  
  goToMe () {
    this.nav.push(MePage);
  }

}
