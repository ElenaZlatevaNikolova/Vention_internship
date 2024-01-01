function replace(input) {
  
  return input.replace(/ /g, '_');
}


const original = "I love Javascript";


console.log(replace(original));
