export interface Rarity {
	id: string;
	name: string;
	image: string;
	odds: number[];
};

export const rarities: Rarity[] = [
	{
		id: '1',
		name: '1 Star',
		image: '',
		odds: [0, 0, 0, 0, 7.2, -7.2],
	},
	{
		id: '2',
		name: '2 Stars',
		image: '',
		odds: [0, 0, 0, 5.2, 4, -9.2],
	},
	{
		id: '3',
		name: '3 Stars',
		image: '',
		odds: [0, 0, 3.4, 8.8, -2, -10.2],
	},
	{
		id: '4',
		name: '4 Stars',
		image: '',
		odds: [0.56, 2.24, 7.4, 4, -4, -10.2],
	},
	{
		id: '5',
		name: '5 Stars',
		image: '',
		odds: [1.96, 5.84, 7.4, 0, -5, -10.2],
	},
	{
		id: '6',
		name: 'Crimson',
		image: '',
		odds: [3.96, 6.84, 5.4, -1, -5, -10.2],
	},
];
