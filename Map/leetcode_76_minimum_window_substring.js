/**
 * Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

A substring is a contiguous sequence of characters within the string.

 

Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
Example 2:

Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.
Example 3:

Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
 

Constraints:

m == s.length
n == t.length
1 <= m, n <= 105
s and t consist of uppercase and lowercase English letters.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function(s, t) {
    let l = 0;
    let r = 0;
    const need = new Map();
    for(let c of t){
      need.set(c, need.has(c) ? need.get(c)+1 : 1);
    }
    let needType = need.size;
    let res = '';
    while (r < s.length) {
      const c = s[r];
      if(need.has(c)){
        need.set(c, need.get(c)-1);
        if(need.get(c) === 0) {
          needType -= 1;
        }
      }
      while(needType === 0) {
        //console.log(s.substring(l, r+1));
        const newRes = s.substring(l, r + 1);
        if (!res || newRes.length < res.length) res = newRes;
        const c2 = s[l];
        if(need.has(c2)){
          need.set(c2, need.get(c2) + 1);
          if(need.get(c2) === 1) {
            needType += 1;
          }
        }
        l += 1;
      }
      r +=1;
    }
    return res;
};

// time: o(m+n)
// space  o(m)