class Person {
  constructor(firstName, lastName, age, homeCity) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.homeCity = homeCity;
  }

  getFullName() {
    return console.log(`${this.firstName} ${this.lastName}`);
  }

  displayInfo() {
    console.log(`Name: ${this.getFullName()}`);
    console.log(`Age: ${this.age}`);
    console.log(`Home City: ${this.homeCity}`);
  }
}



module.exports = Person;