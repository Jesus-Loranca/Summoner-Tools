import { NgModule } from '@angular/core';
import { SummonsAvailableComponent } from './summons-available.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
	SummonsAvailableComponent
  ],
  imports: [
	BrowserModule,
	ReactiveFormsModule
  ],
  exports: [
	SummonsAvailableComponent
  ]
})

export class SummonsAvailableModule { }
