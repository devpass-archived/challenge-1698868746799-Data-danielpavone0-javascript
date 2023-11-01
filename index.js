const MyDataStructure = require('./MyDataStructure');

const dataStructure = new MyDataStructure();
console.log('Initial Data Structure:', dataStructure);

dataStructure.add(1);
dataStructure.add(2);
dataStructure.add(3);

console.log('Data Structure after adding elements:', dataStructure);

dataStructure.remove();

console.log('Data Structure after removing an element:', dataStructure);

const isEmpty = dataStructure.isEmpty();
console.log('Is Data Structure empty?', isEmpty);

const length = dataStructure.length();
console.log('Data Structure length:', length);