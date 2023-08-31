/*3. Implement a function that checks if an array is sorted in ascending order and returns a boolean value accordingly.
   Sample input: [1, 2, 4, 7, 9]
   Expected output: true*/

function ascending(arr) {
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;
        }
        else{
            // If the current element is not smaller, keep checking the next elements
            // We don't return 'true' here because we need to check all elements
            // before we can be sure the array is sorted in ascending order
      }    
    }

    return true;
}

var sample = [1, 2, 4, 7, 9];
var result= ascending(sample);
console.log(result); 
