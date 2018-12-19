import { Component, Input, SimpleChanges } from '@angular/core';
import { NavController } from 'ionic-angular'

import { BackendApiProvider } from '../../providers/backend-api/backend-api';

import { DateilPage } from '../../pages/dateil/dateil';



/**
 * Generated class for the StatusComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'status',
  templateUrl: 'status.html'
})
export class StatusComponent {
  count: number = 0;
  @Input() newObject: any;
  results: any[];

  constructor(public navCtrl: NavController,
    private backend: BackendApiProvider
    ) {
    console.log('Hello StatusComponent Component');
    // this.results = ['Hello', 'World'];
    this.grabStatusItems();
  }

  ngOnChanges(changes:SimpleChanges){
    if (changes.newObject.currentValue){
      this.results.unshift(this.newObject)
      this.newObject = null
    }
  }

  grabStatusItems(){
    const path = '/api/status/'
    this.backend.get(path, true).subscribe(data=>{
      this.count = data['count'] as number; 
      this.results = data['results'] as any[];
    }, error=>{
      console.log(error)
    })
  }

  handleClick(event, statusItem){
  	this.navCtrl.push(DateilPage, {statusItem: statusItem})
  }
}
