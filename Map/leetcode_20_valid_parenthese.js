/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length % 2 === 1) { return false; }
  let stack = [];
  const checker = new Map();
  checker.set( '{', '}');
  checker.set( '(', ')');
  checker.set( '[', ']');
  for (let i = 0; i < s.length; i++) {
    const brace = s[i];
    if(checker.has(brace)) {
      stack.push(brace);
    } else {
        const topbrace = stack[stack.length -1];
        if(checker.get(topbrace) === brace)
        {
          stack.pop();
        } else {
          return false;
        }
        }
  }
  return stack.length === 0;

};

//time: o(n)
//space: o(n)