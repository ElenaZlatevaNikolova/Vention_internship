const Person = require('./Person');
const User = require('./User');


const user = new User('Amy', 'Sears', 30, 'NYC', 'amy_sears', 'Amy123');

const person = new Person('Paul', 'Johnson', 23, 'Boston');


user.displayInfo(); 
console.log();

person.displayInfo();
console.log();

user.getFullName();

