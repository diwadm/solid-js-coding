(function() {
  var initConfig = 'some config';
  var init = function init(config) {
    console.log('init()');
    console.log(config);
  };

  init(initConfig);
}());