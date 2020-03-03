// https://bithacker.dev/javascript-object-multi-property-sort

//Less than 0 a is sorted considered lower than b
//0 a and b are considered equal
//Greater than 0 b is considered lower than a

const array = [12, 3, 5, 22]
array.sort(function(a,b){
  //desc 
  //return b - a
  
  //cresc
  return a - b 
})
console.log(array)


const arrayObj = [
  {number:12}, 
  {number:3}, 
  {number:5}, 
  {number:22}
]
arrayObj.sort(function(a,b){
  return a.number - b.number;
})

console.table(arrayObj)

//Sorting strings

const fruits = [{fruit:'Tomato'}, {fruit:'Banana'}, {fruit:'Apple'}, {fruit:'Avocado'}, {fruit:'Orange'},  {fruit:'Olive'}]
fruits.sort(function(a,b){
  return (a.fruit < b.fruit ? -1 : (a.fruit > b.fruit ? 1 : 0));
})

console.table(fruits);


//String vs numbers
const fruits2 = [{fruit:'Tomato'}, {fruit:'Banana'}, {fruit:'Apple'}, {fruit:'Avocado'}, {fruit:'Orange'},  {fruit:'Olive'}]
fruits2.sort(function(a,b){
  if( isNaN(a.fruit) && isNaN(b.fruit) ) {
    return (a.fruit < b.fruit ? -1 : (a.fruit > b.fruit ? 1 : 0));
  } else {
    return b.fruit - a.fruit
  }
})

console.table(fruits2);

//Changing the direction
//Say you now want to flip the sort order. Thanks to the sort logic we can multiple the subtracted 
//values by -1 to reverse the value of a and b.

fruits.sort(function(a,b){
  let val = 0;

  if( isNaN(a.fruit) && isNaN(b.fruit) ) {
    val = (a.fruit < b.fruit ? -1 : (a.fruit > b.fruit ? 1 : 0));
  } else {
    val = a.fruit - b.fruit
  }
  return -1*val;
})
console.table( fruits);

//Deeper: The actual sort algorithm used is dependent on JavaScript implementation and will vary from platform to platform.