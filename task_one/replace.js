function replaceSpacesWithUnderscores(inputString) {
    const resultString = inputString.replace(' ', '_');
    return resultString;
  }
  

  const originalString = "I love Javascript";
  const result = replaceSpacesWithUnderscores(originalString);
  
  console.log(result);
  