'use strict';
const submit = document.querySelector('.submit');
let input;

document.querySelector('.submit').addEventListener('click', function () {
  input = document.querySelector('.input').value;

  // console.log('hello');
  document.querySelector('body').style.backgroundColor = input;
  console.log(input);
});

document.addEventListener('keydown', function (e) {
  input = document.querySelector('.input').value;
  console.log(e.key);
  if (e.key === 'Enter') {
    document.querySelector('body').style.backgroundColor = input;
    console.log(input);
  }
});

// let hello;
// let hello = document.querySelector('.input');
// document.querySelector('.submit').addEventListener('click', function () {
//   document.querySelector('body').style.backgroundColor = hello;
//   console.log(hello.value);
// });
