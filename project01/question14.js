function x(product) {
  var highest = 0;
  var output={};
  for (var i = 0; i < product.length; i++) {
    if (product[i].price > highest) {
      highest = product[i].price; 
      output=product[i]    
    }
  }

  return output;
}

input=[
  { name: 'Product 1', price: 10 },
  { name: 'Product 2', price: 15 },
  { name: 'Product 3', price: 12 }
]


var result = x(input);
console.log(result);


