"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive !");

// function logger() {
//   console.log("My name is Samarkand");
// }

// // callin/running/invoking the function
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// function calcTip(bill, pourcentageTip) {
//   const tip = bill * pourcentageTip;
//   const totalBill = bill + tip;
//   return totalBill;
// }

// const samTotalBill = calcTip(30, 0.15);
// console.log(`The total bill of Sam is ${samTotalBill}$🤑`);

// Function declaration

// Ici on créer la logique de ce qu'on souhaite calculer ou récuperer
// On veux calculer l'âge de quelqu'un en l'an 2037
// On créer une fonction qui calcule l'âge avec comme paramètre l'année de naissance de la personne
// Cette fonction nous permettra d'afficher et recuperer ce que l'année de naissance de la personne MOINS l'année actuelle donne = l'âge de la personne !
// Pour  "stocker" le résultat de cette opération on créer une variable en dessous qui s'appelle AGE (oui parce qu'on veux calculer l'âge d'une personne grâce à notre fonction de calcul d'âge juste au dessus !)

// function calcAge1(birthyear) {
//   return 2037 - birthyear;
// }

// const age1 = calcAge1(1995);
// console.log(age1);

// // Function expression
// // Expression produce values

// // Ici on créer la logique de ce qu'on souhaite calculer ou récuperer
// // On veux calculer l'âge de quelqu'un en l'an 2037
// const calcAge2 = function (birthyear) {
//   return 2037 - birthyear;
// };

// const age2 = calcAge2(1995);
// console.log(age1, age2);

// // ARROW FUNCTION

// const calcAge2 = function (birthyear) {
//   return 2037 - birthyear;
// };

// const calcAge3 = (birthyear) => 2037 - birthyear;
// const age3 = calcAge3(1995);
// console.log(age3);

// // Plusieurs paramètres = ()
// // Plusieurs opérations = {}

// const yearsUntilRetirement = (birthyear, firstName) => {
//   const age = 2037 - birthyear;
//   const retirement = 65 - age;
//   // return retirement
//   return `${firstName} retires in ${retirement} years !`;
// };

// console.log(yearsUntilRetirement(1995, "Samarkand"));
// console.log(yearsUntilRetirement(1986, "Riko"));

// Function calling a function

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangesPieces = cutFruitPieces(oranges);
//   const juice = `Juice with ${applePieces} apple pieces and ${orangesPieces} orange pieces.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthyear) {
//   return 2037 - birthyear;
// };

// const yearsUntilRetirement = function (birthyear, firstName) {
//   const age = calcAge(birthyear);
//   const retirement = 65 - age;
//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years !`);
//     return retirement;
//   } else {
//     console.log(`${firstName} is retired !`);
//     return -1;
//   }

//   // return `${firstName} retires in ${retirement} years !`;
// };

// console.log(yearsUntilRetirement(1995, "Samarkand"));
// console.log(yearsUntilRetirement(1965, "Jeremiah"));

// const friend1 = "Wendy";
// const friend2 = "Gillian";
// const friend3 = "Hannah";

// const friends = ["Wendy", "Gillian", "Hannah"];
// console.log(friends[0]);
// console.log(friends[2]);

// // Savoir combien de choses il y a à l'intérieur du tableau !
// console.log(friends.length);

// console.log(friends[friends.length - 1]);

// friends[2] = "Jonah";
// console.log(friends);

// const firstName = "Samarkand";
// const samarkand = [firstName, "Guinot", 2022 - 1995, "web developer", friends];

// console.log(samarkand);
// console.log(samarkand.length);

// const calcAge = function (birthyear) {
//   return 2037 - birthyear;
// };

// const years = [1990, 1992, 1998, 2000, 2004];
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[2]);
// const age3 = calcAge(years[4]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[2]), calcAge(years[4])];

// console.log(ages);
