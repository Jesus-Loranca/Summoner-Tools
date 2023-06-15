import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummonSimulatorModule } from './summon-simulator/summon-simulator.module';
import { SummonsAvailableModule } from './summons-available/summons-available.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	SummonSimulatorModule,
	SummonsAvailableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
