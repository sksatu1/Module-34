// data types ---------------------

// primitive data types --------------------------

// 1.number 
// 2.string
// 3.boolean
// 4.undefined
// 5.null

//7.symbol 

// non primitive-------------------
// 6.object

//   example of primitive ------------
let a = 'hello';
let b = a;
// console.log(a, b);
a = 'gello';
// console.log(a, b);

// example of non primitive --------------------
let x = { job: 'web developer' };
let y = x;
console.log(x, y);
// x.job = 'front end developer';
y.job = 'front end developer';
console.log(x, y);