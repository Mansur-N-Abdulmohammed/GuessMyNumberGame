// 'use strict';

// look at both of them inside the console
// console.log(document.querySelector('.message'));

// // what is the difference between them ?
// document.querySelector('.guess').value = 90;
// console.log(document.querySelector('.guess').value);

document.querySelector('.number');
const check = document.querySelector('.check');
let warn = document.querySelector('.warn');
let mess = document.querySelector('.message');
let body = document.querySelector('body');
let mistry = document.querySelector('.number');
let sc = document.querySelector('.score');
let hsc = document.querySelector('.highscore');
let random = Math.trunc(Math.random() * 20) + 1;
mistry.textContent = random;

check.addEventListener('click', function () {
  // you have to use let or var insted of const for input
  // bacause const dont let you change for the second time while you press the button
  let input = document.querySelector('.guess').value;
  let val = Number(input);

  if (val === 0) {
    mess.textContent = `Enter Number Except Zero ⛔`;
  } else if (val === random) {
    mess.textContent = `🎉Correct🎉`;
    random = Math.trunc(Math.random() * 10) + 1;
    mistry.textContent = random;
    ++hsc.textContent;
    sc.textContent = Number(sc.textContent) + 2;
    // changing the style
    body.style.backgroundColor = '#038750';
    body.style.color = 'yellow';
    setTimeout(() => {
      body.style.backgroundColor = 'grey';
      body.style.color = 'yellow';
      mess.textContent = `Start guessing...`;
    }, 2000);
  } else if (val > random && Number(sc.textContent) !== 0) {
    --sc.textContent;
    mess.textContent = `too high 📈`;
  } else if (val < random && Number(sc.textContent) !== 0) {
    --sc.textContent;
    mess.textContent = `You are too low 📉`;
  }

  if (Number(sc.textContent) === 0) {
    warn.textContent = 'MISSION FAILED';
    body.style.backgroundColor = '#000';
    warn.style.color = '#f00';

    setTimeout(() => {
      location.reload();
    }, 5000);
  }
});

const again = document.querySelector('.again');
again.addEventListener('click', function () {
  location.reload();
});
