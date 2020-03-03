//https://dev.to/adamkdean/proper-sorting-with-javascript-1m55

const list = ['10', '12', '14', '16', '18', '20', '8'];

console.log('1', list); //(7) ["10", "12", "14", "16", "18", "20", "8"]

// list.sort(function(a,b) {
//   return a - b
// })

list.sort(function (a, b) {
  const ai = parseFloat(a), bi = parseFloat(b);
  return (isNaN(ai) || isNaN(bi))
      ? a > b ? 1 : a < b ? -1 : 0
      : ai > bi ? 1 : ai < bi ? -1 : 0;
});

console.log('2', list) //(7) ["8", "10", "12", "14", "16", "18", "20"]

//

const list2 = ['FF', 'GG', 'F', 'DD', 'K', 'E', 'G', 'D', 'JJ', 'J', 'HH', 'KK', 'H'];

//list2.sort(function(a, b) { return a - b; });
// outputs: 
// ["FF", "H", "F", "DD", "K", "E", "GG", "D", "JJ", "J", "HH", "KK", "G"]


const fnSort = (a, b) => {
  var ai = parseFloat(a), bi = parseFloat(b);
  return (isNaN(ai) || isNaN(bi)) 
      ? a > b ? 1 : a < b ? -1 : 0
      : ai > bi ? 1 : ai < bi ? -1 : 0;
};

list2.sort((a, b) => {
  var ai = parseFloat(a), bi = parseFloat(b);
  return (isNaN(ai) || isNaN(bi)) 
      ? a > b ? 1 : a < b ? -1 : 0
      : ai > bi ? 1 : ai < bi ? -1 : 0;
});
console.log('3', list2)
// outputs: 
// ["D", "DD", "E", "F", "FF", "G", "GG", "H", "HH", "J", "JJ", "K", "KK"]


const items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];

items.sort(function (a, b) {
  return a.value - b.value;
});

console.table('items', items);

// sort by name
items.sort(function(a, b) {
  const nameA = a.name.toUpperCase(); // ignore upper and lowercase
  const nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});
console.table('items2', items);

const items2 = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];

items2.sort(fnSort(a,b))
console.table('items3', items2);

