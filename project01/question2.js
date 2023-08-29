/*2. Create a function that accepts an array of objects representing employees and returns the average salary of all the employees.
   Sample input: [
     { name: 'John', salary: 50000 },
     { name: 'Alice', salary: 60000 },
     { name: 'Bob', salary: 70000 }
   ]
   Expected output: 60000
*/

function avr(x) {
    var sum = 0;
    var avrg=0;
    for (var i = 0; i < x.length; i++) {
        sum = sum + x[i].salary;
    }
    avrg = sum / x.length;
    return avrg;
}

var sample = [
    { name: 'John', salary: 50000 },
    { name: 'Alice', salary: 60000 },
    { name: 'Bob', salary: 70000 }
];

var result = avr(sample);
console.log("THE AVERAGE OF THEIR SALARY IS:", result);
