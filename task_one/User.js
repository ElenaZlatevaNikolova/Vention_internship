const Person = require('./Person');

class User extends Person {
  constructor(firstName, lastName, age, homeCity, username, password) {
    // Initialize the properties specific to the User class
    super(firstName, lastName, age, homeCity);

    // Add additional properties specific to the User class
    this.username = username;
    this.password = password;
  }

  // Additional methods specific to the User class can be added here
}

// Export the User class for use in other files
module.exports = User;

