import { Sorter } from './sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

// Sort array of numbers
const numbers = new NumbersCollection([10, 3, -5, 0]);
const sorter1 = new Sorter(numbers);
sorter1.sort();
console.log(numbers.data);

// Sort strings
const characters = new CharactersCollection('test');
const sorter2 = new Sorter(characters);
sorter2.sort();
console.log(numbers.data);
