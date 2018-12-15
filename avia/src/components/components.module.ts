import { NgModule } from '@angular/core';
import { StatusComponent } from './status/status';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusDetailComponent } from './status-detail/status-detail';

@NgModule({
	declarations: [StatusComponent,
    StatusDetailComponent],
	imports: [
		BrowserModule,
	    IonicModule,

	],
	exports: [StatusComponent,
    StatusDetailComponent],
	
})
export class ComponentsModule {}
