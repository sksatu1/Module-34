/* 
falsy:
1.false
2.when number = 0
3. empty string
4.null
5.undefined
6.NaN

truthy:
1.true
2.any numbers (negative or positive)
3.any string including single white space
4.[] an empty array
5.{} an empty object
6.anything that is not falsy will be truthy
*/



// const x = ' ';

// example of NaN 
let x = parseInt('satu');
console.log(x);

// const x = 0;
// const x = false;
if (x) {
    console.log('variable is truthy');
}
else {
    console.log('variable is falsy');
}