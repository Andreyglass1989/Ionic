import { NgModule } from '@angular/core';
import { StatusComponent } from './status/status';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

@NgModule({
	declarations: [StatusComponent],
	imports: [
		BrowserModule,
	    IonicModule,

	],
	exports: [StatusComponent],
	
})
export class ComponentsModule {}
