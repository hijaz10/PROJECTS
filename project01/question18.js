/*Implement a function that checks if an object is an array and returns a boolean value accordingly.
    Sample input: [1, 2, 3]
    Expected output: true
*/
function x(obj) {
    return Array.isArray(obj);
  }
  
  var sampleInput = [1, 2, 3];
  var result = x(sampleInput);
  
  console.log(result);
  