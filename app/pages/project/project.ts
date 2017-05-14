import {Component} from '@angular/core';
import {NavController, MenuController, Events, Modal, Alert, NavParams} from 'ionic-angular';
import {ProfilePage} from '../profile/profile';
import {NgStyle} from '@angular/common';
import {DummyService} from '../../providers/dummy/dummy';
import {Iterated} from '../../providers/app-events/app-events';
import {ProjectPin} from '../../providers/pins/pins';
import {NewProjectMessage} from '../../providers/messages/messages';
import {MePage} from '../me/me';
import {TabsPage} from '../tabs/tabs';

@Component({
  templateUrl: 'build/pages/project/project.html',
  directives: [NgStyle, Iterated],
  providers: [DummyService, ProjectPin, NewProjectMessage]
})
export class ProjectPage {
  
  contentWidth = null;
  getDummyProfiles: any;
  getDummyProjects: any;
  imgWidth: number = 75;
  unit: string = 'px';
  project: any;
  
  constructor(public nav: NavController, public menu: MenuController, public events: Events, public dummy: DummyService, public params: NavParams) {

    this.nav = nav;
    this.menu = menu;
    this.events = events;
    this.params = params;

    this.project = this.params.get('project');
    
    this.menu.swipeEnable(false, 'left'); 
    this.menu.swipeEnable(false, 'right'); 
    
    this.getDummyProfiles = dummy.getSampleProfiles();
    this.getDummyProjects = dummy.getSampleProjects();
    
    this.events.subscribe('element:iterated', (data) => { 
        this.calculateWidth(data);
    });
      
  }
  
/*  ionViewLoaded () {
    var componentName = ProjectPage;
    this.events.publish('page:current', componentName);
  }*/

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
  
  calculateWidth(data) {

      var imgCount = data[0].length;
      var scrollBarWidth = 25;
      var spacing = (5 * 2 * imgCount) + scrollBarWidth;
      this.contentWidth = ((imgCount * this.imgWidth) + spacing + this.unit); 
      
  }

  goToUser (member, i) {
      this.nav.push(ProfilePage, {'profile' : member});
  }
  
  pinContent() {
      let pinModal = Modal.create(ProjectPin, {'project' : this.project});
      this.nav.present(pinModal);
  }
  
  joinProject() {
      let alert = Alert.create({
          title: 'Signed Up',
          subTitle: 'You just joined the ' + this.project.name + ' project.',
          buttons: ['OK']
      });
          this.nav.present(alert);
  }
  
  joinAlerts() {
      let alert = Alert.create({
          title: 'Signed Up',
          subTitle: 'You will now receive notifications of project updates from ' + this.project.admin.name,
          buttons: ['OK']
      });
          this.nav.present(alert);
  }
  
  sendMessage() {
      let messageModal = Modal.create(NewProjectMessage);
      this.nav.present(messageModal);
  }
  
  goToMe () {
    this.nav.push(MePage);
  }

}
