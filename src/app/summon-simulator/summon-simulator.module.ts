import { NgModule } from '@angular/core';
import { SummonSimulatorComponent } from './summon-simulator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    SummonSimulatorComponent
  ],
  imports: [
	BrowserModule,
	FormsModule,
	ReactiveFormsModule
  ],
  exports: [
	SummonSimulatorComponent
  ]
})

export class SummonSimulatorModule { }
