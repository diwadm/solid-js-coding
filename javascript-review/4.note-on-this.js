function func() {
  funcVar = 'var inside func()';

  // Note: non-constructor functions have 'this' point to global by default.
  this.anotherFuncVar = 'anotherFuncVar inside func()';
}

func();

// Logically they are the same.

console.log(funcVar);
console.log(global.funcVar);
console.log(anotherFuncVar);
console.log(global.anotherFuncVar);
