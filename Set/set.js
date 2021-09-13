let mySet = new Set();

// add
mySet.add(1);
mySet.add(5);
mySet.add(5); // will not be added
mySet.add('some text');
let o = { a : 1, b : 2 };
mySet.add(o);
mySet.add({ a : 1, b : 2 });

// has
const has = mySet.has(1);

// delete
mySet.delete(5);

//iterate
for(let item of mySet) console.log(item);

for(let item of mySet.keys()) console.log(item);

for(let item of mySet.values()) console.log(item)'

for(let [key, value] of mySet.entries()) console.log(key, value);

//Set to Array
const myArr = [...mySet];
const myArr = Array.from(mySet);

// Array to Set
const mySet2 = new Set([1,2,3,4]);

// intersection
const intersection = new Set([...mySet].filter(x => mySet2.has(x)));

// difference
const difference = new Set([...mySet].filter(x => !mySet2.has(x)));
