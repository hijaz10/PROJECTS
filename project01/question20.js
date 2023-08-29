function x(cities, targetcity) {
    var output = [];
    
    for (var i = 0; i < cities.length; i++) {
        if (cities[i].city === targetcity) {
            output.push(cities[i]);
        }
    }
    
    return output;
  }
var sample= [
    { name: 'John', city: 'New York' },
    { name: 'Alice', city: 'Los Angeles' },
    { name: 'Bob', city: 'New York' }
]

  targetcity="New York";
  var result = x(sample,targetcity);
  console.log(result); 
  





