const obj = {};
const func = () => {};
const arr = [];

// obj instanceof Object
// func instanceof Function and Object
// arr instanceof Array and Object

Object.prototype.x = 'x';
//obj.x: 'x'

Function.prototype.y = 'y';
// func.y: 'y'
// func.x: 'x'

// Interview Question

const instanceOf = (A, B) =>{
  let p = A;
  while(p) {
    if(p === B.prototype) {
      return true;
    }
    p = p.__proto__;
  }
  return false;
}

// Interview Question
var foo = {}, 
    F = function(){};
Object.prototype.a = 'value a';
Function.prototype.b = 'value b';

console.log(foo.a);
//output: value a
console.log(foo.b);
//output: undefined
console.log(F.a);
//output: value a
console.log(F.b);
//output: value b