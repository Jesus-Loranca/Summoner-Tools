import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummonSimulatorComponent } from './summon-simulator/summon-simulator.component';

const routes: Routes = [
	{path: 'summon-simulator', component: SummonSimulatorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
