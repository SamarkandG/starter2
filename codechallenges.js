"use strict";
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const scoreDolphins1 = calcAverage(44, 23, 71);
// const scoreKoalas1 = calcAverage(65, 54, 49);
// const scoreDolphins2 = calcAverage(85, 54, 41);
// const scoreKoalas2 = calcAverage(23, 34, 27);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win 🏆 (${avgDolphins} vs ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win 🏆 (${avgKoalas} vs ${avgDolphins})`);
//   } else {
//     console.log("No one wins...");
//   }
// };

// checkWinner(scoreDolphins1, scoreKoalas1);
// checkWinner(scoreDolphins2, scoreKoalas2);

// Pour remplacer le avg dans la fonction WINNER on les utilise lorsqu'on appel la fonction

// Tu peux utiliser comme values dans l'appel d'une fonction une variable directement là on utilise scoreDolphins dans le paramètre avgDolphins

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

console.log(calcTip(100));

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(bills, tips);

const totals = [bills[0] + tips[0], [bills[1] + tips[1]], [bills[2] + tips[2]]];

console.log(totals);
