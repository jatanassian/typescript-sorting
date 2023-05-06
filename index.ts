import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// Sort array of numbers
const numbers = new NumbersCollection([10, 3, -5, 0]);
numbers.sort();
console.log(numbers.data);

// Sort strings
const characters = new CharactersCollection('jWritCnmOaz');
characters.sort();
console.log(characters.data);

// Sort linked lists
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(27);

linkedList.sort();
linkedList.print();
