import {Component} from '@angular/core';
import {NavController, MenuController, Events} from 'ionic-angular';
import {NgStyle} from '@angular/common';
import {ProfilePage} from '../profile/profile';
import {CirclePage} from '../circle/circle';
import {MePage} from '../me/me';
import {TabsPage} from '../tabs/tabs';
import {SearchHistoryPage} from '../search-history/search-history';
import {DummyService} from '../../providers/dummy/dummy';
import {Iterated} from '../../providers/app-events/app-events';

@Component({
  templateUrl: 'build/pages/explore/explore.html',
  directives: [NgStyle, Iterated],
  providers: [DummyService]
})

export class ExplorePage {
   
  contentWidth = null;
  getDummyProfiles: any;
  getDummyCircles: any;
  imgWidth: number = 150;
  unit: string = 'px';
  imgPath: string = 'https://pinp-draft.s3-eu-west-1.amazonaws.com/gym.jpg';
  imgPath2: string = 'https://pinp-draft.s3-eu-west-1.amazonaws.com/founders.jpg';
  imgPath3: string = 'https://pinp-draft.s3-eu-west-1.amazonaws.com/lab.jpg';
  imgPath4: string = 'https://pinp-draft.s3-eu-west-1.amazonaws.com/rowing.jpg';
   
  constructor (public nav: NavController, public menu: MenuController, public dummy: DummyService, public events: Events) {
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
  
/*    ionViewLoaded () {
        var componentName = ExplorePage;
        this.events.publish('page:current', componentName);
    }*/
  
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
    
    goBack () {
        this.nav.pop();
    }
    
    goNext () {
        this.nav.push(SearchHistoryPage);
    }
    
    calculateWidth(data) {
  
        var imgCount = data[0].length;
        var scrollBarWidth = 25;
        var spacing = (10 * 2 * imgCount) + scrollBarWidth;
        this.contentWidth = ((imgCount * this.imgWidth) + spacing + this.unit); 
       
    }
    
    goToUser (buddy, i) {
        this.nav.push(ProfilePage, {'profile' : buddy});
    }
    
    goToCircle (circle) {
        this.nav.push(CirclePage);
    }
    
    goToMe() {
        this.nav.push(MePage);
    }

}