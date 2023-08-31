function x(fruits) {
    var y = 0; 
    for (var i = 0; i < fruits.length; i++) {
        y += fruits[i].length; 
    }
    
    return y;
}

sample = ['apple', 'banana', 'cherry'];
var result = x(sample);
console.log(result);
