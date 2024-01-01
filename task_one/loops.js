// for loop
let beers = 5;
for (i = 0; i <= beers; i++) {
    if (i !== 1) 
    { console.log(i + " beers");}
    
    else { console.log(i + " beer") }
}
console.log();




// for...in loop
const car = {
    brand: "Ford",
    model: "Focus",
    year: 2009,
    seats: 5,
    doors: 5,
    color: "blue"
};

for (let property in car) {
    console.log(`${property} : ${car[property]}`);
}
console.log();



// for...of loop
const books = ["The Hitchhiker's Guide to the Galaxy", "Long Day's Journey Into Night", "The Elegant Universe", "Foucault's Pendulum"];

for (const book of books) {
    console.log(book);
}

console.log();




// do... while loop
let beer = 5

do {
    console.log(beer);
    beer++;
}
while (beer <= 4);

console.log();



// while loop
let counter = 5;

while (counter <= 10) {
    console.log(counter);
    counter++;
}



