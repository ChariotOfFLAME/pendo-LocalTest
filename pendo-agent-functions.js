function debugging() {
  if (
    document.getElementById('enableDebugging').innerHTML ===
    'pendo.enableDebugging()'
  ) {
    pendo.enableDebugging();
    document.getElementById('enableDebugging').innerHTML =
      'pendo.disableDebugging()';
  } else {
    pendo.disableDebugging();
    document.getElementById('enableDebugging').innerHTML =
      'pendo.enableDebugging()';
  }
}

function logging() {
  if (
    document.getElementById('enableLogging').innerHTML ===
    'pendo.enableLogging()'
  ) {
    console.log(`%c${pendo.enableLogging()}`, 'color: teal');
    document.getElementById('enableLogging').innerHTML =
      'pendo.disableLogging()';
  } else {
    console.log('%clogging disabled', 'color: teal');
    pendo.disableLogging();
    document.getElementById('enableLogging').innerHTML =
      'pendo.enableLogging()';
  }
}

function pluck() {
  console.log(pendo._.pluck(pendo.guides, 'name'));
}
