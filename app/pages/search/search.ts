import {Component} from '@angular/core';
import {Alert, NavController, NavParams, MenuController, Events, Modal} from 'ionic-angular';
import {ResultsSearchPage} from '../results-search/results-search';
import {SearchHistoryPage} from '../search-history/search-history';
import {ProfilePage} from '../profile/profile';
import {ProjectPage} from '../project/project';
import {TabsPage} from '../tabs/tabs';
import {MePage} from '../me/me';
import {DummyService} from '../../providers/dummy/dummy';
import {ProjectPin} from '../../providers/pins/pins';
import {FilterProjects} from '../../providers/messages/messages';
import {Iterated} from '../../providers/app-events/app-events';

@Component({
  templateUrl: 'build/pages/search/search.html',
  directives: [Iterated],
  providers: [DummyService, ProjectPin]
})
export class SearchPage {
  
  contentWidth = null;
  getDummyProfiles: any;
  getDummyCircles: any;
  getDummyProjects: any;
  imgWidth: number = 75;
  unit: string = 'px';
  d: any;
  isFromTab: boolean;
  hasSearched = false;
  showSuggested = true;
  searchQuery: string = '';
  items;
  
  constructor(public nav: NavController, public menu: MenuController, public events: Events, public dummy: DummyService, public params: NavParams) {
      
    this.nav = nav;
    this.menu = menu;
    this.events = events;
    this.params = params;
    
    this.isFromTab = this.params.get('paramTab');
/*    console.log(this.isFromTab);*/
    
    this.menu.swipeEnable(true, 'left'); 
    this.menu.swipeEnable(false, 'right'); 
    
    this.getDummyProfiles = dummy.getSampleProfiles();
    this.getDummyCircles = dummy.getSampleCircles(); 
    this.getDummyProjects = dummy.getSampleProjects(); 
    
    this.events.subscribe('element:iterated', (data) => { 
        this.calculateWidth(data);
    });

    this.d = new Date(new Date().getTime() + 3*24*60*60*1000);

    this.initializeItems();

    this.events.subscribe('show:suggested', (bool) => {
        this.menu.close('right');
        this.showSuggested = bool[0];
    });
    
  }
  
 /*   ionViewLoaded () {
        var componentName = SearchPage;
        this.events.publish('page:current', componentName);
    }*/
  
    goBack () {
    this.nav.pop();
    }
    
/*    goNext () {
    this.nav.push(ResultsSearchPage);
    }
    */
    goHistory () {
    this.nav.push(SearchHistoryPage);
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
    
    showFilters() {
        let filterModal = Modal.create(FilterProjects);
        this.nav.present(filterModal);
    }
    
    pinContent(project) {
        let pinModal = Modal.create(ProjectPin, {'project' : project});
        this.nav.present(pinModal);
    }
    
    goToMe () {
        if (this.isFromTab == false)
        this.nav.pop();
    }
    
    goToUser (member, i) {
        this.nav.push(ProfilePage, {'profile' : member});
    }

    goToProject (project) {
        this.nav.push(ProjectPage, {'project' : project});
    }
    
    joinProject(project) {
        let alert = Alert.create({
            title: 'Signed Up',
            subTitle: 'You just joined the ' + project.name + ' project!',
            buttons: ['OK']
        });
            this.nav.present(alert);
    }

    joinSuggestedProject() {
        let alert = Alert.create({
            title: 'Signed Up',
            subTitle: 'You just joined this project!',
            buttons: ['OK']
        });
            this.nav.present(alert);
    }

    initializeItems() {
        this.items = this.getDummyProjects[0].info;  
    }

    getItems(searchbar) {

        this.showSuggested = false;
        this.hasSearched = true;
        
        this.initializeItems();
        
        var queryList = this.items;

        var q = searchbar.srcElement.value;

        if (q.trim() == '') {
        return;
        }
        
        var results = [];

        for (var i=0 ; i < queryList.length ; i++) {
        
        var profileName = queryList[i].name.toLowerCase().replace(/ /g,'');
        var query = q.toLowerCase();
        
        if (query.indexOf(' ')) {
            var query = query.replace(/ /g,'');
        }
        
        if (profileName.indexOf(query) > -1) {
            results.push(queryList[i]);
        }
        
        }
        
        this.items = results;

    }

}
