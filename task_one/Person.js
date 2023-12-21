class Person {
    constructor (firstName, lastName, age, homeCity){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.homeCity = homeCity;
        
    }

    fullName(){
        return(`Full name: ${this.firstName} ${this.lastName}`);
    }

    displayInfo(){
        console.log(firstName);
        console.log(lastName);
        console.log(fullName());
        console.log(age);
        console.log(homeCity);
    }

    
}

const johnSmith = new Person ('John', 'Smith', 25, 'Sofia' );

console.log(johnSmith.age);
console.log(johnSmith.fullName());

