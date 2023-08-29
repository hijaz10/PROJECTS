function x(numbers) {
    var highest = numbers[0]; 
    var lowest = numbers[0];  
    
    for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] > highest) {
            highest = numbers[i]; // Update highest if a larger number is found
        }
        
        if (numbers[i] < lowest) {
            lowest = numbers[i];  // Update lowest if a smaller number is found
        }
    }
    
    var objectresult = { Highest: highest,Lowest: lowest };
    
    return objectresult;
}

var sample = [2, 7, 4, 9, 1];

var result = x(sample);
console.log(result); 