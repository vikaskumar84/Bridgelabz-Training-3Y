'use strict';
try {
  Function('"use strict"; return (function(a, a) { return a; });')();
} catch (err) {
  console.log(`Strict duplicate parameters: ${err.name} - ${err.message}`);
}
try {
  Function('"use strict"; total = 10;')();
} catch (error) {
  console.log(`Strict undeclared assignment: ${error.name} - ${error.message}`);
}
try {
  Function('"use strict"; var total = 10; delete total;')();
} catch (error) {
  console.log(`Strict delete variable: ${error.name} - ${error.message}`);
}
function demo(a, b) {
  const subtotal = 10;
  console.log(`Correct demo: a=${a}, b=${b}, total=${subtotal}`);
}
demo(5, 10);
