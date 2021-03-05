/*
You have a list of words and a pattern, 
and you want to know which words in words matches the pattern.
A word matches the pattern if there exists a permutation of letters p 
so that after replacing every letter x in the pattern with p(x), we get the desired word.
(Recall that a permutation of letters is a bijection from letters to letters: every letter maps to another letter, 
and no two letters map to the same letter.)
Return a list of the words in words that match the given pattern. 
You may return the answer in any order.
 */

// my answer (copy solution java)
/*
Runtime: 88 ms, faster than 48.95% of JavaScript online submissions
Memory Usage: 41.4 MB, less than 28.67% of JavaScript online submissions
*/

/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
  if(words.length>50||words.length<1) return null;
  if(pattern.length>20||pattern.length<1) return null;
  
  let ans = [];
  
  for(let aWord of words) {
      let map1 = {};
      let map2 = {};
      
      if(pattern.length != aWord.length) continue;
      
      for(let i=0;i<aWord.length;i++) {
          let p = pattern.charAt(i);
          let w = aWord.charAt(i);
          if(map1[w] == undefined) map1[w] = p;
          if(map2[p] == undefined) map2[p] = w;
          if(map1[w] != p || map2[p] != w) break;   
          if(i==aWord.length-1) ans.push(aWord);
      }
      
  }
  return ans;
};