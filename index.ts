import { Sorter } from './sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

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

// Sort linked lists
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(27);

const sorter3 = new Sorter(linkedList);
sorter3.sort();
linkedList.print();
