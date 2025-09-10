#!/usr/bin/env node
var x = parseInt(process.argv[2]);

if (isNaN(x)) {
  console.log('Missing number of occurrences');
} else {
  for (var i = 0; i < x; i++) {
    console.log('C is fun');
  }
}
