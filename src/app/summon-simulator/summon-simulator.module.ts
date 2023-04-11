import { NgModule } from '@angular/core';
import { SummonSimulatorComponent } from './summon-simulator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    SummonSimulatorComponent
  ],
  imports: [
	BrowserModule,
	ReactiveFormsModule
  ],
  exports: [
	SummonSimulatorComponent
  ]
})

export class SummonSimulatorModule { }
