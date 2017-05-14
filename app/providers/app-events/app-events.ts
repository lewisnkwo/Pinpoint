import {Directive} from '@angular/core';
import {Events} from 'ionic-angular';
import {DummyService} from '../../providers/dummy/dummy';

export class AppEventsService {
}

@Directive ({
    selector: '[iteratedItems]'
})

export class Iterated { 
  
  public data: any;
  
  constructor(public events: Events, public dummy: DummyService) {
    this.data = dummy.getSampleProfiles();
    this.events = events;
    this.initiateEvent(this.data);
  } 
  
  initiateEvent(data) {
    this.events.publish('element:iterated', data);
  }   
  
}