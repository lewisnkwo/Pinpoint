import {Component} from '@angular/core';
import {NavController, MenuController, Events, Modal} from 'ionic-angular';
import {ProfilePage} from '../profile/profile';
import {AddProjectPage} from '../add-project/add-project';
import {DummyService} from '../../providers/dummy/dummy';
import {ShufflePipe} from '../../providers/pipes/pipes';
import {NewProjectMessage} from '../../providers/messages/messages';
import {Iterated} from '../../providers/app-events/app-events';

@Component({
  templateUrl: 'build/pages/projects/projects.html',
  providers: [DummyService],
  pipes: [ShufflePipe],
  directives: [Iterated]
})

export class ProjectsPage {
  getDummyProfiles: any;
  getDummyProjects: any;
  searchQuery: string = '';
  items;
  shouldHideCancel = true;
  contentWidth = null;
  imgWidth: number = 75;
  unit: string = 'px';
  d: any;

  constructor(public nav: NavController, public menu: MenuController, public dummy: DummyService, public events: Events) {
    this.nav = nav;
    this.menu = menu;
    this.dummy = dummy;
    this.events = events; 
    
    this.menu.swipeEnable(true, 'left'); 
    this.menu.swipeEnable(false, 'right'); 
    
    this.getDummyProjects = dummy.getSampleCircles();
    this.getDummyProfiles = dummy.getSampleProfiles();
    this.initializeItems();
    

    this.events.subscribe('element:iterated', (data) => { 
        this.calculateWidth(data);
    });

    this.d = new Date(new Date().getTime() + 3*24*60*60*1000);

  }

/*  ionViewLoaded () {
    var componentName = CirclesPage;
    this.events.publish('page:current', componentName);
  }*/
  
  goToAddProject () {
    this.nav.push(AddProjectPage);
  }

  initializeItems() {
    this.items = this.getDummyProjects[0].info;  
  }

  goNext () {
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

  getItems(searchbar) {
    
    this.initializeItems();
    
    var queryList = this.items;

    var q = searchbar.value;

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

  removeFriend(i: number) {
        this.items.splice(i, 1);
  }

  goToUser (profile) {
    this.nav.push(ProfilePage, {'profile' : profile});
  }
  
  pinProject () {
/*      let pinModal = Modal.create(ProjectPin, {'message' : message});
      this.nav.present(pinModal);*/
  }
  
  messageProject () {
      let messageModal = Modal.create(NewProjectMessage);
      this.nav.present(messageModal);
  }
  
  calculateWidth(data) {

      var imgCount = data[0].length;
      var scrollBarWidth = 25;
      var spacing = (5 * 2 * imgCount) + scrollBarWidth;
      this.contentWidth = ((imgCount * this.imgWidth) + spacing + this.unit); 
      
  }
  
}