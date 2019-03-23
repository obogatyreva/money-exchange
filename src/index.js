// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  let num = parseInt(currency);
  if (num === 0) {
    return {};
  }

  if (currency > 10000) {
    return {
      error: "You are rich, my friend! We don't have so much coins for exchange"
    };
  }

  let division = function(val, by){
    return (val - val % by) / by;
  }
  let temp = {};
  let arr = {
    H : 50,
    Q : 25,
    D : 10,
    N : 5,
    P : 1
  };
  for (let k in arr) {
    let div = division (currency, arr[k]);
    if (div > 0) {
      temp[k]= div;
      currency = currency - div * arr[k];
    }
  }
  return temp;

    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
}

