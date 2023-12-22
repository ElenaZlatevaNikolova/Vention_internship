function filterOutGeese(names) {
    const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    const filteredBirds = names.filter(bird => !geese.includes(bird));
  
    return filteredBirds;
  }
  

  const inputBirds = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"];
  const result = filterOutGeese(inputBirds);
  
  console.log(result);