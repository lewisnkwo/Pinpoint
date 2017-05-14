import {Component} from '@angular/core';
import {NavController, MenuController, Events} from 'ionic-angular';
import {SearchPage} from '../search/search';
import {ExplorePage} from '../explore/explore';
import {ProfilePage} from '../profile/profile';
import {MePage} from '../me/me';
import {DummyService} from '../../providers/dummy/dummy';
import {ShufflePipe} from '../../providers/pipes/pipes';


@Component({
  templateUrl: 'build/pages/results-search/results-search.html',
  providers: [DummyService],
  pipes: [ShufflePipe]
})

export class ResultsSearchPage {   
    
dummyProfiles: any;
    
  constructor (public nav: NavController, public menu: MenuController, public events: Events, public dummy: DummyService) {
    this.nav = nav;
    this.menu = menu;
    this.events = events;
    this.dummy = dummy;
    this.dummyProfiles = dummy.getSampleProfiles();
    
    this.menu.swipeEnable(false, 'left'); 
    this.menu.swipeEnable(false, 'right'); 
  }

/*    ionViewLoaded () {
        var componentName = ResultsSearchPage;
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
        this.nav.push(ExplorePage);
    }
    
    goToProfile (slide) {
        this.nav.push(ProfilePage, {'profile' : slide});
    }
    
    goToMe () {
        this.nav.push(MePage);
    }

}
