function x(books, targetyear) {
  var output = [];
  
  for (var i = 0; i < books.length; i++) {
      if (books[i].year === targetyear) {
          output.push(books[i].title);
      }
  }
  
  return output;
}

var sample = [
  { title: 'Book 1', year: 2010 },
  { title: 'Book 2', year: 2015 },
  { title: 'Book 3', year: 2010 }
];
targetyear=2010;
var result = x(sample,targetyear);
console.log(result); 
