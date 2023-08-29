function x(movies, targetgenre) {
    var output = [];
    
    for (var i = 0; i < movies.length; i++) {
        if (movies[i].genre === targetgenre) {
            output.push(movies[i]);
        }
    }
    
    return output;
  }
var sample = [
    { title: 'Movie 1', genre: 'Action' },
    { title: 'Movie 2', genre: 'Comedy' },
    { title: 'Movie 3', genre: 'Action' }
  ]

  targetgenre="Action";
  var result = x(sample,targetgenre);
  console.log(result); 
  





