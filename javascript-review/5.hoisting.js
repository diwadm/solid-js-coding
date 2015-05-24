b = 'bee';

function func() {
  console.log(b);

  // 'b' will get hoisted, i.e. interpreter declares before execution.
  var b = 'local bee';

  console.log(b);
}

func();