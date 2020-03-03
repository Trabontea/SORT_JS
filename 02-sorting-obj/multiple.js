//Sorting multiple properties at once
//Sorting objects by a single property is great but we want a little more versatility.
//01 Let's take a look at these students and see if we can sort them by grade, then by last name.

import { students } from "./students.js";

console.table(students);
//02 Selecting properties
// To start, we will build an array of properties that we want to sort by along with the direction we want to sort.
// While we are specifying the properties we can also include a the direction.

let dir = {
  asc: 1,
  des: -1
}

let sortBy = [
  {
    prop: "grade",
    direction: dir.des
  },
  {
    prop: "firstName",
    direction: dir.des
  },

  {
    prop: "lastName",
    direction: dir.asc
  }
  
];
console.log(sortBy)

// Loop through sortBy properties
// Compare the prop of a with b (using our string compare above)
// ??? We have added a .toString() call here to ensure that numeric values are turned it to strings to make our compare more versatile
// If result is 0 the prop values are the same continue to the next property
// Multiply the result by the direction

students.sort(function(a,b){
  let i = 0, result = 0;
  while(i < sortBy.length && result === 0) {
    result = sortBy[i].direction*(
      a[ sortBy[i].prop ] < b[ sortBy[i].prop ] ? -1 : 
      (a[ sortBy[i].prop ] > b[ sortBy[i].prop ] ? 1 : 0));
    i++;
  }
  return result;
})


console.table(students);
