export class Sorter {
	constructor(public collection /* TODO: add type */) {}

	sort(): void {
		const { length } = this.collection;

		for (let i = 0; i < length; i++) {
			for (let j = 0; j < length - i - 1; j++) {
				if (this.collection[j] > this.collection[j + 1]) {
					const leftSide = this.collection[j];
					this.collection[j] = this.collection[j + 1];
					this.collection[j + 1] = leftSide;
				}
			}
		}
	}
}