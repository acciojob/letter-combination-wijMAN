"use strict";
function letterCombinations(input_digit) {
  //Complete the function
  let ans = [],
    temp = "";
  fun(input_digit, ans, temp);
  return ans;
}

let map = ["0", "1", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];

let fun = (input, ans, temp) => {
  if (input.length === 0) {
    ans.push(temp);
    return;
  }

  let a = input.charAt(0) - "0";
  let b = input.substring(1);
  let c = map[a];
  for (let i = 0; i < c.length; i++) {
    let z = c.charAt(i);
    fun(b, ans, temp + z);
  }
};

// console.log(letterCombinations("013"));
module.exports = letterCombinations;
