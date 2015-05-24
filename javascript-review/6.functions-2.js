// Callback pattern: uses anonymous functions.

function process(cb) {
  console.log('Running cb() with name ' + cb.name);
  cb();
}

function someCallback() {
  console.log('someCallback()');
}

// Pass the someCallback as reference.
process(someCallback);

// Anonymous function.
process(function() {
  console.log('It is a good day to die.');
});