function Positive(numbers) {
    var output = [];
    var checking=0;
    for (var i=0;i<numbers.length;i++) {
        checking=numbers[i];
        if (checking >= 0) {
            output.push(checking);
        }
    }

    return output;
}

var  input = [-2, 3, -4, 7, -1];
var result = Positive(input);
console.log(result); 
