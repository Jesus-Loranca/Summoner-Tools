import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-summons-available',
	templateUrl: './summons-available.component.html',
	styleUrls: ['./summons-available.component.scss']
})

export class SummonsAvailableComponent {
	constructor() {}

	heroesForm: FormGroup = new FormGroup({
		number: new FormControl(),
	});

	numberOfHeroes: number = 0;
	arrayOfHeroes: number[] = [];
	summonPointsForm: FormGroup = new FormGroup({});
	summomPointsUsed: number[] = [];
	summonsAvailable: number = 0;

	onHeroesFormChange(): void {
		this.numberOfHeroes = this.heroesForm.get('number')?.value;
		this.arrayOfHeroes = [...Array(this.numberOfHeroes).keys()];

		this.arrayOfHeroes.forEach((heroID) => {
			this.summonPointsForm.addControl(String(heroID), new FormControl('1'));
		})
	}

	resetSummonPoints(): void {
		this.summomPointsUsed = [];
	}

	getSummonPoints(): void {
		this.summonsAvailable = 0;

		Object.keys(this.summonPointsForm.controls).forEach(key => {
			const heroSummoPoints = this.summonPointsForm.get(key)?.value;
			this.summomPointsUsed.push(heroSummoPoints);
		});

		this.summomPointsUsed.sort().reverse();
	}

	calculateSummons(): void {
		let summonPointsSum = this.summomPointsUsed.reduce((partialSum, number) => partialSum + Number(number), 0);

		while (summonPointsSum > 0 && this.summomPointsUsed.length >= 5) {
			for (let index = 0; index < 5; index++) {
				this.summomPointsUsed[index]--;
			}

			this.summomPointsUsed = this.summomPointsUsed.filter(number => number !== 0);
			this.summomPointsUsed.sort().reverse();

			summonPointsSum = this.summomPointsUsed.reduce((partialSum, number) => partialSum + Number(number), 0);
			this.summonsAvailable++;
		}
	}

	onSubmit(): void {
		this.getSummonPoints();
		this.calculateSummons();
		this.resetSummonPoints();
	}
}
