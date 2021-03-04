/*
Given two equal-size strings s and t. 
In one step you can choose any character of t and replace it with another character.
Return the minimum number of steps to make t an anagram of s.
An Anagram of a string is a string that contains the same characters with a different (or the same) ordering.
*/

// my answer
/*
Runtime: 152 ms, faster than 66.55% of JavaScript online submissions
Memory Usage: 48.4 MB, less than 7.64% of JavaScript online submissions
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
  if (s.length < 1 || s.length > 50000 || s.length != t.length) return null;

  let lowerS = s.toLowerCase();
  let lowerT = t.toLowerCase().split("");
  let counts = {};
  let step = 0;
  let count, ch;

  for (let i = 0; i < lowerS.length; i++) {
    ch = lowerS.charAt(i);
    count = counts[ch];
    counts[ch] = count ? count + 1 : 1; // number or undefined
  }

  for (let j = 0; j < lowerT.length; j++) {
    if (counts[lowerT[j]] == 0 || counts[lowerT[j]] == undefined) {
      step++;
    } else {
      counts[lowerT[j]]--;
    }
  }

  return step;
};

// better answer
/*
Runtime: 152 ms, faster than 66.55% of JavaScript online submissions
Memory Usage: 44.9 MB, less than 46.55% of JavaScript online submissions
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
  if (s.length < 1 || s.length > 50000 || s.length != t.length) return null;

  let lowerS = s.toLowerCase();
  let lowerT = t.toLowerCase();
  let counts = {};
  let step = 0;
  let count;

  for (let l of lowerS) { // for..of
    count = counts[l];
    counts[l] = count ? count + 1 : 1;
  }

  for (let l of lowerT) {
    if (counts[l] == 0 || counts[l] == undefined) {
      step++;
    } else {
      counts[l]--;
    }
  }

  return step;
};
