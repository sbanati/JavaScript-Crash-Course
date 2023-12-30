/*In JS an operator is a symbol that is used to perform 
operations on values and variables 

The operators are; 
* Assignment operator: assigns values to variables
* Arithmetic operator
* Comparison operator
* Logical operator
* String operator
* Other operator 
*/

// Assignment operators
let x = 10 // = is the assignment operator 
let y = 5 
console.log(x + y) // Arithmetic operators 
console.log(++x) // adds +1 
console.log(--y) // subtract 1 

// Comparison Operators
console.log(x == y) // checks if x and y are equal , should be False
console.log(x != y) // not equal to y, return True
console.log(x === y) // compares data type and value , return False
console.log(x !== y) // strictly not equal returns True 
console.log( x > y) // greater than , returns True

/* Logical Operators, return true or false and work with 
comparison operators to make decisions 
*/

const isValidNumber = x > 8 && 8 > y
// && = logical AND operator, returns True if BOTH operants are True
console.log(isValidNumber) // valuates True 
const isValidNumber2 = x > 8 || 8 > y 
// || = logical OR operator, returns True if EITHER operants is True
console.log(isValidNumber2)

const isValid = true 
console.log(!isValid); // returns false

/*String operators   */

console.log('Bruce' + 'Wayne') 
// plus operator adds with numbers, but concatinates with strings

