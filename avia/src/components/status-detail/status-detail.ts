import { Component, Input, EventEmitter, Output } from '@angular/core';
import StatusModel from '../status/status.model';
 
/**
 * Generated class for the StatusDetailComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'status-detail',
  templateUrl: 'status-detail.html'
})
export class StatusDetailComponent {
  @Input() myObjectNameAny: StatusModel;
  @Output() statusDidChange = new EventEmitter<StatusModel>()

  text: string;

  constructor() {
    console.log('Hello StatusDetailComponent Component');
    this.text = 'Hello World yahayahha';
  }

  handleClick(event){
  	// alert("Hello world")
  	if(this.myObjectNameAny){
  		this.statusDidChange.emit(this.myObjectNameAny)
  	}
  }

}
