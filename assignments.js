// "use strict";

// function describeCountry(country, population, capitalCity) {
//   const description = `${country} has ${population} million people and its capital city is ${capitalCity}`;
//   return description;
// }

// const finland = describeCountry("Finland", 6, "Helsinki");
// console.log(finland);
// const france = describeCountry("France", 65, "Paris");
// console.log(france);
// const sweden = describeCountry("Sweden", 10, "Stockholm");
// console.log(sweden);

// Function DECLARATION vs EXPRESSIONS

// FUNCTION DECLARATION

// function percentageOfWorld(population) {
//   const percentage = (population / 7900) * 100;
//   return percentage;
// }

// const chinaPercentage = percentageOfWorld(1441);
// console.log(chinaPercentage.toFixed(2) + "%");
// const peruPercentage = percentageOfWorld(33);
// console.log(peruPercentage.toFixed(2) + "%");
// const iranPercentage = percentageOfWorld(83);
// console.log(iranPercentage.toFixed(2) + "%");

// // FUNCTION EXPRESSION

// const percentageOfWorld2 = function (population) {
//   return (population / 7900) * 100;
// };
// const chinaPercentage2 = percentageOfWorld2(1441);
// console.log(chinaPercentage2.toFixed(2) + "%");
// const peruPercentage2 = percentageOfWorld2(33);
// console.log(peruPercentage2.toFixed(2) + "%");
// const iranPercentage2 = percentageOfWorld2(83);
// console.log(iranPercentage2.toFixed(2) + "%");

// ARROW FUNCTIONS

// const percentageOfWorld3 = (population) => (population / 7900) * 100;

// const chinaPercentage3 = percentageOfWorld3(1441);
// console.log(chinaPercentage3.toFixed(2) + "%");
// const peruPercentage3 = percentageOfWorld3(33);
// console.log(peruPercentage3.toFixed(2) + "%");
// const iranPercentage3 = percentageOfWorld3(83);
// console.log(iranPercentage3.toFixed(2) + "%");

// FUNCTION CALLING FUNCTION

// function percentageOfWorld(population) {
//   const percentage = (population / 7900) * 100;
//   return percentage.toFixed(2) + "%";
// }

// function describePopulation(country, population) {
//   const percentageCountry = percentageOfWorld(population);
//   const thedescription = `${country} has ${population} million people, which is about ${percentageCountry} of the world. `;

//   return thedescription;
// }

// console.log(describePopulation("India", 1552));
// console.log(describePopulation("Peru", 33));
// console.log(describePopulation("Vietnam", 99));

// const populations = [1552, 33, 99, 10];
// console.log(populations);

// function percentageOfWorld(population) {
//   const percentage = (population / 7900) * 100;
//   return percentage.toFixed(2) + "%";
// }

// console.log(populations.length === 4);

// const percentages = [
//   percentageOfWorld(populations[0]),
//   percentageOfWorld(populations[1]),
//   percentageOfWorld(populations[2]),
//   percentageOfWorld(populations[3]),
// ];

// console.log(percentages);

const neighbours = ["Belgium", "Luxembourg", "Switzerland", "Spain"];
console.log(neighbours);

neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (neighbours.includes("Germany")) {
  console.log("Perfect !");
} else {
  console.log("Probably not a central European country :D");
}

neighbours[3] = "Realm of Switzerland";
console.log(neighbours);
