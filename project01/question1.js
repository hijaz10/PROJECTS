/*
**1. Write a function that takes an array of numbers as input and returns a new array with only the numbers greater than 5.
   Sample input: [2, 7, 10, 4, 8]
   Expected output: [7, 10, 8]**

for(x=0;x < sampleInput.length;x++){
  if(sampleInput[x]> 5){
    console.log(sampleInput[x])
  }
  */
  function x(array) {
    var output=[];
    for (var i = 0; i < array.length; i++) {  
      var number = array[i];

      if (number > 5) {
        output.push(number);
        //console.log(number)// 
      }
    }
  return output;
  }
  
  var sampleInput=[2, 7, 10, 4, 8];
  var result = x(sampleInput);
  console.log(result)


  
  