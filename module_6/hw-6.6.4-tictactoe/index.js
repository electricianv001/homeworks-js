
const size = 3;

for (let i = 0; i < size; i++) {
  let row = '';
  for (let j = 0; j < size; j++) {
    row += ((i + j) % 2 === 0 ? 'x' : 'o') + (j < size - 1 ? ' ' : '');
  }
  console.log(row);
}

