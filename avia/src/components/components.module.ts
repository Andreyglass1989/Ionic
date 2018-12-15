import { NgModule } from '@angular/core';
import { StatusComponent } from './status/status';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
	declarations: [StatusComponent],
	imports: [BrowserModule],
	exports: [StatusComponent],
	
})
export class ComponentsModule {}
