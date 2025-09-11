#!/usr/bin/node

var size = parseInt(process.argv[2]);

if (isNaN(size) || size <= 0) {
  console.log('Missing size');
} else {
  for (var i = 0; i < size; i++) {
    var row = '';
    for (var j = 0; j < size; j++) {
      row += 'X';
    }
    console.log(row);
  }
}