// Upgrade costs go here
// old code
let upgradeCost1 = 10;
let amountBought1 = 0;
let upgradeCost2 = 50;
let amountBought2 = 0;
let upgradeCost3 = 250;
let amountBought3 = 0;
//0 is to skip javascript's first index number in a table, which is 0
let upgradeCosts = {0,10,50,250}
let amountBought = {0,0,0,0}
// Other variables go here
let automateCount = 0.01

for i=1;i<upgradeCosts.length;i++ do {
   console.log(upgradeCosts[i])
 }

document.querySelector("#upgrade1").addEventListener("click", () => {
  if (points >= upgradeCost1) {
    points -= upgradeCost1;
    multi += prMulti;
    upgradeCost1 *= 1.6;
    amountBought1++;
  }
});

let automationInterval;

document.querySelector("#upgrade2").addEventListener("click", () => {
  if (points >= upgradeCost2) {
    points -= upgradeCost2;
    automationInterval = setInterval(() => {
      points += automateCount;
    }, 10);
    upgradeCost2 *= 1.6;
    amountBought2++;
  }
});

document.querySelector("button#prestige").addEventListener("click", () => {
  clearInterval(automationInterval);
});

document.querySelector("#upgrade3").addEventListener("click", () => {
  if (points >= upgradeCost3) {
    points -= upgradeCost3;
    automateCount += 0.1;
    upgradeCost3 *= 1.6;
    amountBought3++;
  }
});
