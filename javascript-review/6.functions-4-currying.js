var add = function add(x, y) {
  if(typeof(y) === 'undefined') {
    return function(newY) {
      return x + newY;
    };
  }

  return x + y;
};

// Full
console.log(add(1, 2));

// Partial
var partialAdd = add(10);
console.log(partialAdd(1))
console.log(partialAdd(2))