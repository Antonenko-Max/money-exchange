// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if (currency <= 0) return {};
    if (currency > 10000) return { error: "You are rich, my friend! We don't have so much coins for exchange" };
    var remainder = currency;
    var change = {};
    if (currency >= 50) {
        change.H = Math.floor(currency / 50);
        remainder = currency % 50;
    }
    if (remainder >= 25) {
        change.Q = Math.floor(remainder / 25);
        remainder = remainder % 25;
    }
    if (remainder >= 10) {
        change.D = Math.floor(remainder / 10);
        remainder = remainder % 10;
    }
    if (remainder >= 5) {
        change.N = Math.floor(remainder / 5);
        remainder = remainder % 5;
    }
    if (remainder >= 1) {
        change.P = remainder;
    }
    return change;
}
