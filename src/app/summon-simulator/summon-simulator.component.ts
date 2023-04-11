import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Rarity, rarities } from 'src/@types/rarities';

@Component({
	selector: 'app-summon-simulator',
	templateUrl: './summon-simulator.component.html',
	styleUrls: ['./summon-simulator.component.scss']
})

export class SummonSimulatorComponent {
	constructor() {
		this.resetOdds();
	}

	rarities = rarities;
	reversedRarities: Rarity[] = (JSON.parse(JSON.stringify(rarities))).reverse();

	initialOdds: number[] = [0.2, 0.8, 3, 10, 30, 56];
	currentOdds: number[] = [];

	heroesForm = new FormGroup({
		1: new FormControl('0'),
		2: new FormControl('0'),
		3: new FormControl('0'),
		4: new FormControl('0'),
		5: new FormControl('0'),
	});

	resetOdds(): void {
		this.currentOdds = this.initialOdds;
	}

	calculateOdds(): void {
		Object.keys(this.heroesForm.controls).forEach(key => {
			const heroValue = this.heroesForm.get(key)?.value;

			if (heroValue === '0') {
				return;
			}

			this.currentOdds = this.currentOdds.map(
				(number, index) => number + this.rarities[heroValue - 1].odds[index]
			);
		});
	}

	roundOdds(): void {
		this.currentOdds.forEach(
			(value, index) => this.currentOdds[index] = Math.round((value + Number.EPSILON) * 100) / 100
		)
	}

	onOptionSelected(): void {
		this.resetOdds();
		this.calculateOdds();
		this.roundOdds();
	}

	onSubmit() {
		//
	}
}
