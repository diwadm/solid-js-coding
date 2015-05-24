var explicitGlobal = 'explicit global';

function func() {
  funcVar = 'var inside func()';
}

function goodFunc() {
  console.log('Executing goodFunc() ...');
  var goodFuncVar = 'var inside func()';
}

console.log('explicitGlobal: ' + explicitGlobal);

// If you uncomment this, interpreter will say funcVar does not exist.
//console.log(funcVar);

console.log('executing func()');
func();

// Logically they are the same.
console.log(funcVar);
console.log(global.funcVar);

goodFunc();
// If you uncomment this, interpreter will say goodFuncVar does not exist.
//console.log(goodFuncVar);

// You can delete implied globals.
delete funcVar;
delete explicitGlobal;
console.log('typeof funcVar: ' + typeof(funcVar));
console.log('typeof explicitGlobal: ' + typeof(explicitGlobal));
