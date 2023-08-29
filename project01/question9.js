function x(array){
    for(var i=0;i<array.length;i++){
        for (var j = i + 1; j < array.length; j++) {
        
        if(array[i]===array[j]){
        return true
    }
        }
    }
    return false
}
input=[1, 2, 3, 2, 4];
var result=x(input)
console.log(result)