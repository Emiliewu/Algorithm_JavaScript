const a = { val: 'a' };
const b = { val: 'b' };
const c = { val: 'c' };
const d = { val: 'd' };
a.next = b;
b.next = c;
c.next = d;

// iterate through linked list
let p = a; 
while(p) {
  console.log(p.val);
  p = p.next;
}
// insert
const e = { val: 'e' };
c.next = e;
e.next = d;

// delete
c.next = d;

