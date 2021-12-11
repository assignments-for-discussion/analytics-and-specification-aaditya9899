function average(numbers) {
  
  //Used Filter Function to clear out any Garbage inputs.
   numbers=numbers.filter(Boolean);
   return numbers.reduce((p, c)=> p + c, 0) / numbers.length;
}

module.exports = {average};
