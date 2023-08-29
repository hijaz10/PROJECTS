function y(x) {
    var multiply=1;
    for (var i = 0; i < x.length; i++) {
        multiply *=  x[i];
    }
    return multiply
}
input=[2,3,4];
var result=y(input);
console.log(result)