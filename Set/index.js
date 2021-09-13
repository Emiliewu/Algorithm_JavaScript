// remove duplicate
const arr = [1,1,2,2];
const arr2 = [...new Set(arr)];

// check if contains
const set = new Set(arr);
const has = set.has(1);

// Intersection
const set2 = new Set([2, 3]);
const set3 = new Set([...set].filter(item => set2.has(item)));