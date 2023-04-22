import { Sorter } from './sorter';
import { NumbersCollection } from './NumbersCollection';

const numbers = new NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter(numbers);
sorter.sort();
console.log(numbers.data);
