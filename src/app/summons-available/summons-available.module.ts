import { NgModule } from '@angular/core';
import { SummonsAvailableComponent } from './summons-available.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
	SummonsAvailableComponent
  ],
  imports: [
	BrowserModule,
	FormsModule,
	ReactiveFormsModule
  ],
  exports: [
	SummonsAvailableComponent
  ]
})

export class SummonsAvailableModule { }
