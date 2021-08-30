/*
undefined examples:

1.variable value that is not assigned
2.function that didn't return anything
3.just wrote return at the end of the function  but didn't return any value it shows undefined
4.if we shall not pass any value for a parameter of a function then the value of this parameter will be undefined
5.if we call a property that doesn't exist in the object
6. accessing array element out of range
7.accessing deleted array element
8.explicitly set value = undefined
*/
// 1.------------------------------------------------------------------------
let first;
// console.log(first);

// 2 and 3.-------------------------------------------------------------------
/* function addition(x, y) {
    const sum = x + y;
    if (y < 10) {
        return;
    }
    else {
        return sum;
    }

}
const result = addition(12, 9);
console.log(result); */

// 4.---------------------------------------------------------------------
/* function double(a, b) {
    const result = a * 2;
    console.log(b);
    return result;
}
double(2); */

// 5.-------------------------------------------------------------------
/* const about = { job: 'developer', name: 'satu', id: 1802231 }
console.log('phone number is :', about.phone); */

// 6.------------------------------------------------------------------
/* const sixth = [1, 2, 3];
console.log('index value =', sixth[3]); */

// 7.------------------------------------------------------------------
/* const sixth = [1, 2, 3];
delete sixth[1];
console.log('deleted index value =', sixth[1]); */

// 8.------------------------------------------------------------------
/* const x = undefined;
console.log(x); */


// NB ----------------------------------------------------------------------
/* 1.'NULL' diye bujhai j kono kisuer value Nai

2.'undefined' diye onk kisu bujhai tar vitor ekta hote pare j setar value defined kori ni ba return kori ni ei type 
 */


// example of null -----------------------------------------------------------
// const personAbout = { name: 'satu', job: null }


