
var a = 1;
let b = 2;
const c = 3;


b = 20;


function add(x, y) {
  return x + y;
}
const sum = add(1, 2); // 3



const add2 = (x, y) => x + y;
const sum2 = add2(3, 4); // 7


const check = (n) => {
  if (n > 0) return "pos";
  return "non-pos";
};



const person = {
  name: "Alice",
  age: 28,
  greet: function() {
    return "Hi, " + this.name;
  },
  sayHi() {
    return `Hi, ${this.name}`;
  },
};

person.name;      
person.greet();   



const nums = [1, 2, 3, 4];

const doubled = nums.map(n => n * 2);
const even = nums.filter(n => n % 2 === 0);


const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; 


const o1 = { a: 1, b: 2 };
const o2 = { ...o1, c: 3 };


const nums2 = [5, 6, 7];
Math.max(...nums2); 


const people = [
  { name:"rajan", age:21 },
  { name:"abhiyan", age:25 },
  { name:"piyush", age:18 }
];

const adults = people
  .filter(p => p.age >= 21)
  .map(p => ({ ...p, adult: true }));

