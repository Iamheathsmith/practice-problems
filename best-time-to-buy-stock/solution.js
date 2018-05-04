'use strict';


module.exports = new class {
  maxProfit(prices) {
    var len = prices.length;

    // checks to see if the length is 0
    if (len === 0)
      return 0;

    //build 3 arrays for the sell, buy and rest(cooldown)
    let sell = []
    let buy = []
    let rest = [];

    //iterate through the array
    for (var i = 0; i < len; i++) {
      let item = prices[i]; // set each item to variable.

      //starting at idex 0, set the starting items if bought, sold or rest.
      if (i === 0) {
        sell[i] = 0; //cant make any money if nothing to sell
        buy[i] = -item; //we go negitive if bought
        rest[i] = 0; //rest
      } else { //everything after index 0
        sell[i] = Math.max(sell[i - 1], buy[i - 1] + item); //profit after selling
        buy[i] = Math.max(buy[i - 1], rest[i - 1] - item); //amount me own.
        rest[i] = Math.max(rest[i - 1], sell[i - 1]); //rest
      }
    }

    return Math.max(sell[len - 1], buy[len - 1], rest[len - 1]); //return the highest amount
  }
}
