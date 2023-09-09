/*Implement a function that calculates the factorial of a given number and returns the result.
    Sample input: 5
    Expected output: 120
*/
function factorial(n){
    if (n==1 || n==0){
        return 1}
    else{
        return n*factorial(n-1)
    }
}
console.log(factorial(5))