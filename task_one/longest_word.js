function findLongestWords(sentence) {
    const words = sentence.split(' ');
   
  
    if (words.length === 0) {
      console.log("No words found");
      return;
    }
  
   let maxLength = 0;
  let longestWords = [];
  
    for (const word of words) {
      if (word.length > maxLength) {
        maxLength = word.length;
        longestWords = [word]; 
      } else if (word.length === maxLength) {
        longestWords.push(word); 
      }
    }

    
    console.log(`The longest words contain ${maxLength} letters.`);
    
    console.log(longestWords);
    for(const word of longestWords ){
        console.log(word);
}
}
  
    
    
  
  
  
  const sentence = "JavaScript is a scripting or programming language that allows you to implement complex features on web pages";
  
  findLongestWords(sentence);
