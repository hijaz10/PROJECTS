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
    var output=[];

    var reverse1=array[0];
    var reverse2=array[1];
    var reverse3=array[2];
    var reverse4=array[3];

    reverse1 == array[0]
    output.push(reverse4)
    
    reverse2 == array[1]
    output.push(reverse3)
    
    reverse3 == array[2]
    output.push(reverse2)
    
    reverse4 == array[3]
    output.push(reverse1)
    
    return output;

} 
var input=['apple', 'banana', 'cherry', 'date']
var result=x(input);
console.log(result)