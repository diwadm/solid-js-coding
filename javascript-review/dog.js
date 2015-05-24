function Dog(name) {
  this.name = name;

  this.bark = function bark() {
    console.log('Woof! My name is ' + this.name);
  };

  this.contemplate = function contemplate() {
    var answer = this instanceof(Dog) ? 'Yes' : 'No';
    console.log('Am I a dog? ' + answer);
  }
}

module.exports = Dog;