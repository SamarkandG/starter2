"use strict";

function describeCountry(country, population, capitalCity) {
  const description = `${country} has ${population} million people and its capital city is ${capitalCity}`;
  return description;
}

const finland = describeCountry("Finland", 6, "Helsinki");
console.log(finland);
const france = describeCountry("France", 65, "Paris");
console.log(france);
const sweden = describeCountry("Sweden", 10, "Stockholm");
console.log(sweden);
