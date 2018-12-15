import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DateilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dateil',
  templateUrl: 'dateil.html',
})
export class DateilPage {
	statusItem: any;
	newObject: {title:string, id:number};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	console.log(NavParams)
    this.statusItem = navParams.get("statusItem")
    this.newObject = {
    	title:"New Object Title", id:12
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DateilPage');
  }

}
