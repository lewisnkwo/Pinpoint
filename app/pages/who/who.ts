import {Component} from '@angular/core';
import {NavController, MenuController, Alert} from 'ionic-angular';
import {Camera} from 'ionic-native';
import {JoinPage} from '../join/join';
import {TabsPage} from '../tabs/tabs';

@Component({
  templateUrl: 'build/pages/who/who.html',
})
export class WhoPage {
  
photo: any;
photoTaken = false;
DoB: any;

  constructor(public nav: NavController, public menu: MenuController) {
    this.nav = nav;
    this.menu = menu;
    this.menu.swipeEnable(false, 'left'); 
    this.menu.swipeEnable(false, 'right'); 
  }

  goNext () {
      this.nav.push(JoinPage);
  } 
  
  takePhoto(){

      this.photoTaken = true;
    
      var option = {
          sourceType: 1,
          quality: 75,
          destinationType: 0,
          encodingType: 0,
          allowEdit: true,
          correctOrientation: true
      };
      
      Camera.getPicture(option).then((imageData)=>{
          this.photo = "data:image/jpeg;base64," + imageData;
      },(error)=>{
      });
            
  } 

/*  getDate () {
    DatePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: 4
      
    }).then(
      date => {
        this.DoB = date;
        var newString = this.DoB.toString();
        this.DoB = newString.substring(0,15);    
    }    
      ,
      err => console.log("Error occurred while getting date:", err)
    );
  }*/

  uploadPhoto () {
      let alert = Alert.create({
      title: 'Uploaded Successfully',
      subTitle: 'Your profile photo has sucessfully been uploaded.',
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
