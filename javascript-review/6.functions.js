// function declaration gets hoisted.
funcDeclare('Hello world');

// A function declaration
function funcDeclare(shout) {
  console.log('funcDeclare()');
  console.log(shout);
}

// A functional expression
var apple = function() {
  console.log('apple()');
};
apple();

// A named functional expression
var orange = function orange() {
  console.log('orange()');
};
orange();

// A named functional expression has a name property.
console.log('apple name is: ' + apple.name);
console.log('orange name is: ' + orange.name);
