var help = "HELLLLLLLPPPP";
console.log (help)

var temperature = 80;
var isHotOutside = "It's HOTTTTT!!!";

if(temperature > 70) {
    console.log(isHotOutside);
} else {
    console.log("Not hot today");
}

var isHotOutside = true;
var isWeekday = !true;
var hasMoneyInPocket = true;

let costOfMilk = 1.89;
let moneyInWallet = 20.00;
let thirstLevel = 2;

var shouldBuyIcecream = (isHotOutside && hasMoneyInPocket);

if (shouldBuyIcecream) {
    console.log("YES!! Icecream!! YUMMMM");
} else {
    console.log("No Icecream today, bummer");
}

var willGoSwimming = (isHotOutside && !isWeekday);

if (willGoSwimming) {
    console.log("Let me get my bathing suit!");
} else {
    console.log("No swimming today");
}

var isAGoodDay = (isHotOutside && hasMoneyInPocket && !isWeekday);

if (isAGoodDay) {
    console.log("Today Is GREAT!");
    } else {
        console.log("I've had better days");
    }

var willBuyMilk = (isHotOutside && thirstLevel >= 3 && moneyInWallet >= (costOfMilk*2));

if(willBuyMilk) {
    console.log("Milk is good for you");
} else {
    console.log("I'll wait");
}

if (isHotOutside && thirstLevel >= 3) {
    console.log("Water Me");
  } if (isHotOutside && thirstLevel >= 3 && moneyInWallet) {
      console.log("Milk Me");
  }
    
