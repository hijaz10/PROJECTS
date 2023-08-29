/*Write a function that takes an array of strings and returns a new array with the first letter of each string capitalized.
    Sample input: ['apple', 'banana', 'cherry']
    Expected output: ['Apple', 'Banana', 'Cherry']
*/
function capitalize(wordsarray) {
    var output = [];
    
    for (var i = 0; i < wordsarray.length; i++) {
        var currentword = wordsarray[i];

        var firstletter = currentword[0].toUpperCase();
        
        var restword = currentword.slice(1);
        
        var words = firstletter + restword;
        
        output.push(words);
    }
    
    return output;
}

var sample = ['apple', 'banana', 'cherry'];

var result = capitalize(sample);

console.log(result);


