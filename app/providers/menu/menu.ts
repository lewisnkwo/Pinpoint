import {Injectable} from '@angular/core';
import {Events} from 'ionic-angular';
import {LandingPage} from '../../pages/landing/landing';
import {SearchPage} from '../../pages/search/search';
import {MePage} from '../../pages/me/me';
import {ExplorePage} from '../../pages/explore/explore';
import {UniPage} from '../../pages/uni/uni';
import {BuddiesPage} from '../../pages/buddies/buddies';
import {WhatsOnPage} from '../../pages/whats-on/whats-on';
import {InteractivityPage} from '../../pages/interactivity/interactivity';
import {SettingsPage} from '../../pages/settings/settings';
import {NotificationsPage} from '../../pages/notifications/notifications';
import {AddCirclePage} from '../../pages/add-circle/add-circle';
import {CirclesPage} from '../../pages/circles/circles';
import {PinsPage} from '../../pages/pins/pins';

@Injectable()
export class MenuService {
  actionSheet: any;
  promptClear: any;
  innerClassName: any;
  outerClassName: any;
  items: any;

  constructor(public events: Events) {
      
    this.events = events;
    var MenuItems = this.getMenuItems();
    
    this.events.subscribe('page:current', (componentName) => {
        var constructorString: string = componentName[0].toString();
        this.innerClassName = constructorString.match(/\w+/g)[1]; // Current Page Component
 
        for (var i=0 ; i < MenuItems.length ; i++) {
            this.outerClassName = MenuItems[i].component.name; // Component from List
            
            if (MenuItems[i].component.name == this.innerClassName) {
                this.items = this.getProfileSettings();
                var menuData = this.items[0];
                this.events.publish('component:match', menuData);
            }
        }
    });

    this.actionSheet = {
    title: 'Not happy with something?',
    buttons: [
    {
        text: 'Don\'t want to see this',
        handler: () => {
        console.log('Destructive clicked');
        }
    },
    {
        text: 'Report Abuse',
        role: 'destructive',
        handler: () => {
        console.log('Archive clicked');
        }
    },
    {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
        console.log('Cancel clicked');
        }
    }
    ]
    };
    
    this.promptClear = {
      title: 'History Cleared',
      subTitle: 'Your search history has been deleted.',
      buttons: ['OK']
    };  

  }
  
    getMenuItems() : [any] {
        
        return [   
/*        { title: 'Explore', component: ExplorePage, settings: [] },  
        { title: 'Search', component: SearchPage, settings: [] },  
        { title: 'Me', component: MePage, settings: [] },  
        { title: 'Friends', component: BuddiesPage, settings: [] },  
        { title: 'Pins', component: PinsPage, settings: [] },  
        { title: 'Community', component: UniPage, settings: [] },  */
        { title: 'Interactivity', component: InteractivityPage, settings: [] },  
/*        { title: 'Notifications', component: NotificationsPage, settings: [] },  */
        { title: 'Settings', component: SettingsPage, settings: [] },  
        { title: 'Logout', component: LandingPage, settings: [] }
              
    ];

    }

    getMeSettings() : [any] {
        
        return [null];

    }

    getProfileSettings() : [any] {
        
        return [
            { title: 'Report', data: this.actionSheet, component: null, type: 'ActionSheet' },
            { title: 'Clear All History', data: this.promptClear, component: null , type: 'Alert' }
        ];

    }
    
    getSearchSettings() : [any] {
        
        return [
            { title: 'Clear All History', data: this.promptClear, component: null , type: 'Alert' }
        ];

    }

}

