/*Implement a function that checks if an array contains only unique values and returns a boolean value accordingly.
    Sample input: [1, 2, 3, 4, 5]
    Expected output: true
*/
function x(array){
    var checking=0
    for(var i=1;i<array.length;i++){
        for (var j = i + 1; j < array.length; j++) {
        checking=array[i]
        if(array[i]!==array[j]){
        return true
    }
       }
       return false
}
}
var input=[1, 2, 3, 4, 5]
var result=x(input)
console.log(result)