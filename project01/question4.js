//input: ['apple', 'banana', 'cherry', 'date']//
/*function x(a,b,c,d){
    var output=[];
    output.push(d,c,b,a)

    return d,c,b,a;
}
var input=['apple', 'banana', 'cherry', 'date']
var result=x(input);
console.log(result)*/

function x(array){
    var sort=array.sort().reverse();
    return sort

} 
var input=['apple', 'banana', 'cherry', 'date']
var result=x(input);
console.log(result)