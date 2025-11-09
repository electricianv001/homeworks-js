

const obj = {
  some: 'some',
  dom: 'text',
  arr: [1, 2, 3, 4, 5],
  tom: 'there',
};

const arrValues = Object.values(obj).flatMap(v => Array.isArray(v) ? v : [v]);

console.log(arrValues);
