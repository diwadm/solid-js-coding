var title = {};
title.onclick = function() {
  console.log(this.name + ' click');
};

var span = {};
span.onclick = function() {
  console.log(this.name + ' click');
};

var jQuery = function(elements) {
  this.elements = elements;

  this.bind = function(self, callback) {
    return function() {
      callback.apply(self, []);
    }
  };

  this.clickAll = function() {
    var max = this.elements.length;
    console.log('Total elements: ' + max);

    for(var i = 0; i < max; i++) {
      //this.elements[i].onclick();
      this.elements[i].name = 'element ' + i;
      this.bind(this.elements[i], this.elements[i].onclick)();
    }
  };
};

var $ = new jQuery([title, span]);
$.clickAll();