
try {
  const result = divide(10, 2);
  console.log(result);
}
catch (error) {
  console.error('An error occurred:', error.message);
}
finally {
  console.log("This code always executes")
}



