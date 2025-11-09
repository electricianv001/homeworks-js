
const rl = require('readline').createInterface({ input: process.stdin, output: process.stdout });

rl.question('Введите неотрицательное целое N: ', (ans) => {
  const n = Number(ans);
  if (!Number.isInteger(n) || n < 0) {
    console.log('Некорректное N');
  } else {
    console.log(Array.from({ length: n + 1 }, (_, i) => i));
  }
  rl.close();
});
