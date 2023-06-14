import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummonSimulatorComponent } from './summon-simulator/summon-simulator.component';
import { SummonsAvailableComponent } from './summons-available/summons-available.component';

const routes: Routes = [
	{
		path: 'summon-simulator',
		component: SummonSimulatorComponent
	},
	{
		path: 'summons-available',
		component: SummonsAvailableComponent
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
