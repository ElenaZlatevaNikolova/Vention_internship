function replaceSpaces(inputString) {
   
    const resultString = inputString.replace(' ', '_');
    return resultString;
  }
  

  const originalString = "I love Javascript";
  const result = replaceSpaces(originalString);
  
  console.log(result);