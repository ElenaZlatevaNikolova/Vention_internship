const Person = require('./Person');

class User extends Person {
  constructor(firstName, lastName, age, homeCity, username, password) {
    super(firstName, lastName, age, homeCity);


    this.username = username;
    this.password = password;
  }

  // Override from Person
  displayInfo() {
    super.displayInfo();
    console.log(`Username: ${this.username}`);
    console.log(`Password: ${this.password}`);
  }


}

module.exports = User;

