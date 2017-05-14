import {Component} from '@angular/core';
import {NavController, MenuController, Alert, ActionSheet, Events} from 'ionic-angular';
import {History} from '../../providers/history/history';
import {TabsPage} from '../tabs/tabs';

// Plunker demoing list functionality http://plnkr.co/edit/KVuXxDp0qinGDyo307QW?p=preview

@Component({
  templateUrl: 'build/pages/search-history/search-history.html',
  providers: [History]
})
export class SearchHistoryPage {
  
  profileSearchHistory: [any];
  circleSearchHistory: [any];
  profileSetting: any;
  
  constructor(public nav: NavController, public menu: MenuController, public history: History, public events: Events) {
    
    this.nav = nav;
    this.menu = menu;
    this.events = events;
    
    this.menu.swipeEnable(false, 'left'); 
    this.menu.swipeEnable(false, 'right'); 
    
    this.profileSearchHistory = history.getProfileSearchHistory();
    this.circleSearchHistory = history.getCircleSearchHistory();
    
    this.events.subscribe('profile:setting', (action) => { 
        this.profileSetting = action;
        this.runSetting();
    });
    
  }

/*    ionViewLoaded () {
        var componentName = SearchHistoryPage;
        this.events.publish('page:current', componentName);
    }*/
  
    goBack () {
    this.nav.pop();
    }
    
    goNext () {
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
    
    deleteProfile(i: number) {
         this.profileSearchHistory.splice(i, 1);
    }
    
    deleteCircle(i: number) {
         this.circleSearchHistory.splice(i, 1);
    }
    
    runSetting () {
        if (this.profileSetting[0].type === 'Alert')
            this.presentAlert();
        else if (this.profileSetting[0].type === 'ActionSheet')
            this.presentActionSheet();
        else if (this.profileSetting[0].component != null)
            this.goToPage();     
    }
    
    presentAlert() {
        this.deleteHistory();       
        let alert = Alert.create(this.profileSetting[0].data);
        this.nav.present(alert); 
    }
    
    deleteHistory() {
        delete this.profileSearchHistory;
        delete this.circleSearchHistory; 
    }
    
    presentActionSheet() {
        let actionSheet = ActionSheet.create(this.profileSetting[0].data);
        this.nav.present(actionSheet); 
    }
    
    goToPage () {
        this.nav.push(this.profileSetting[0].component);   
    }
    
    goToMe () {
        this.nav.push(TabsPage);
    }
    
}
