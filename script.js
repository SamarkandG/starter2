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
