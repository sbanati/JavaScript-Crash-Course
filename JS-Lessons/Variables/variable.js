// variables are used to store information
// there are 2 recommended ways to store values const or let 

let age = 25; // stored a value of 25 in a variable called age 
console.log(age); //

const salary = 80000 // all const declarations must be initialized and cannot be reassigned
console.log(salary); // 
// const salary // This results in an error b.c const declaration needs a value to be initialized


// let sum // unlike const salary, in console this is read as undefined and doesnt result in error
let sum = 0; // initial value is 0
sum = 5; // new value can be reassigned / changed later and sum will update
console.log(sum); //

// !Important : always use const declarations unless varialbe value is going to change and then we can make use of let.