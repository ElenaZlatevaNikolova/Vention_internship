const User = require('./User');


const user = new User('Amy', 'Sears', 30, 'NYC', 'amy_sears', 'Amy123');


user.displayInfo();
console.log(`Username: ${user.username}`);