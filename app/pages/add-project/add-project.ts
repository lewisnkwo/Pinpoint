import {Component} from '@angular/core';
import {Alert, NavController, ViewController, MenuController, Events} from 'ionic-angular';
import {CirclePage} from '../circle/circle';
import {TabsPage} from '../tabs/tabs';
import {MePage} from '../me/me';
import {Camera} from 'ionic-native';
/*import {NewProjectMessage} from '../../providers/messages/messages';*/

@Component({
  templateUrl: 'build/pages/add-project/add-project.html'
/*  providers: [NewProjectMessage]*/
})
export class AddProjectPage {
  
  photo: string;
  photoTaken: boolean;
  
  constructor(public nav: NavController, public menu: MenuController, public events: Events) {
    this.nav = nav;
    this.menu = menu;
    this.events = events;
    
    this.menu.swipeEnable(true, 'left'); 
    this.menu.swipeEnable(false, 'right'); 
    
  }
  
/*    ionViewLoaded () {
      var componentName = AddProjectPage;
      this.events.publish('page:current', componentName);
    }*/

    goNext () {
    }

    goBack () {
        this.nav.pop();
    }

    goToCircle () {
      this.nav.push(CirclePage);
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
    
    goToMe () {
      this.nav.popToRoot();
    }
    
    takePhoto () {
      
      var options = {
          sourceType: 1,
          quality: 75,
          destinationType: 0,
          encodingType: 0,
          allowEdit: true,
          correctOrientation: true
      };
      
      Camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
          this.photo = "data:image/jpeg;base64," + imageData;
          this.photoTaken = true;
      }, (err) => {
      });
      
    } 
    
    uploadPhoto () {
        let alert = Alert.create({
        title: 'Uploaded Successfully',
        subTitle: 'Your project photo has sucessfully been updated.',
        buttons: [
            {
                text: 'OK',
                handler: () => {
                }
            }
        ]
        });
        this.nav.present(alert);
    }  

}
