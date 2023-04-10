import { Component } from '@angular/core';

@Component({
	selector: 'app-summon-simulator',
	templateUrl: './summon-simulator.component.html',
	styleUrls: ['./summon-simulator.component.scss']
})

export class SummonSimulatorComponent {
	constructor() {
		this.currentOdds = this.initialOdds[0];
	}

	rarities: string[] = [
		'1 Star',
		'2 Star',
		'3 Star',
		'4 Star',
		'5 Star',
		'Crimson',
	];

	reversedRarities: string[] = [
		'Crimson',
		'5 Star',
		'4 Star',
		'3 Star',
		'2 Star',
		'1 Star',
	];

	initialOdds: number[][] = [
		[0.2, 0.8, 3, 10, 30, 56],
		[0, 0, 0, 0, 7.2, -7.2],
		[0, 0, 0, 5.2, 4, -9.2],
		[0, 0, 3.4, 8.8, -2, -10.2],
		[0.56, 2.24, 7.4, 4, -4, -10.2],
		[1.96, 5.84, 7.4, 0, -5, -10.2],
		[3.96, 6.84, 5.4, -1, -5, -10.2],
	];

	currentOdds: number[] = [];
}
