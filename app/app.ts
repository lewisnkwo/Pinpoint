import 'es6-shim';
import {Component, ViewChild} from '@angular/core';
import {ionicBootstrap, Platform, MenuController, Events, NavParams} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {MePage} from './pages/me/me';
import {ProfileDetailPage} from './pages/profile-detail/profile-detail';
import {AddProjectPage} from './pages/add-project/add-project';
import {ProjectsPage} from './pages/projects/projects';
import {TabsPage} from './pages/tabs/tabs';
import {LandingPage} from './pages/landing/landing';
import {SearchPage} from './pages/search/search';
import {MenuService} from './providers/menu/menu';
/*import {Completed, Started, Deprecated, CompletedSmall, StartedSmall, DeprecatedSmall} from './providers/pinpoint-directives/pinpoint-directives';*/

@Component({
  templateUrl: 'build/pages/index/index.html'
})

export class MyApp {
  
  @ViewChild('mainNav') nav;
    
  rootPage: any = TabsPage;
  menuItems: [any];
  menuData: any;
  suggestedBool: boolean = true; // Default true to hide suggested on PeoplePage and ProjectsPage

  constructor(platform: Platform, menuService: MenuService, public menu: MenuController, public events: Events) {
    
    platform.ready().then(() => {
      StatusBar.styleDefault();
    });
    
    this.menuItems = menuService.getMenuItems();  
    this.menu = menu;
    this.events = events;
 
/*    this.events.subscribe('component:match', (menuData) => {
        this.menuData = menuData;
    });*/

  }
  
    openPage(page, i) {
      this.menu.close();
      var navigateTo = this.menuItems[i].component;
      this.events.publish('menu:navigate', navigateTo);
    }
    
    goToMe() {
      this.menu.close();
      this.nav.push(TabsPage);
    }
    
    filterPeople() {
      this.menu.close();
    }

    showSuggested() {
      this.suggestedBool = !this.suggestedBool;
      var bool = this.suggestedBool;
      this.events.publish('show:suggested', bool);
    }
  
/*  menuSetting(action) { 
    this.events.publish('menu:setting', action);
    this.menu.close();
  }*/
  
}

ionicBootstrap(MyApp, [MenuService], {
});

