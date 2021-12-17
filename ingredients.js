const ingredients = [
  "eggs",
  "milk",
  "flour",
  "sugar",
  "baking soda",
  "baking powder",
  "chocolate chips",
  "bananas",
];

// Write a while loop that prints out the contents of ingredients:
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

// Write a for loop that prints out the contents of ingredients:
for (let j = 0; j < ingredients.length; j++) {
  console.log(ingredients[j]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

// reverse using for loop (makes new array backwards)
// for (let k = ingredients.length - 1; k >= 0; k--) {
//   let backwards = [];
//   backwards.push(ingredients[k]);
//   console.log(backwards);
// }

//prints backwords using for loop (SOLUTION)
for (let k = ingredients.length - 1; k >= 0; k--) {
  console.log(ingredients[k]);
}

// reverse using while loop(makes new array backwards)
// let count = ingredients.length - 1;
// while (count >= 0) {
//   let backwards1 = [];
//   backwards1.push(ingredients[count]);
//   count--;
//   console.log(backwards1);
// }

//prints backwards using while loop (SOLUTION)
let count = ingredients.length - 1;
while (count >= 0) {
  console.log(ingredients[count]);
  count--;
}
