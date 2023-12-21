class User extends Person {
    constructor(firstName, lastName, age, homeCity, username, password ) {
        super(firstName, lastName, age, homeCity);

        this.username = username;
        this.password = password;
    }

    getUsername(){
        return(username);
    }
    getPassword(){
        return(password);
    }
    displayLoginInfo(){
        console.log(`User's credentials are: ${this.username}, ${this.password}`)
    }
}

const personOne = new User("Jane", "Davis", 45, "NYC", "jane_davis", "Jane123")