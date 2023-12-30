// Specify what kind of data can be stored and manipulated in a program
// 2 types of data: Primitive and Non Primitive



/* Primitive types include:
String 
Number
Boolean
Undefined
Null
BigInt
Symbol
Non primitive = Objects 
*/ 

/* String Data Type
a string is a sequence of characters that = text value   */
const name = 'Sahil'
const langauge = 'JavaScript'
const channel = `Codevolution`
// Strings can be in double or single quotes and backticks  

/*Number Data Type
represents integer and floating point numbers  */
const total = 0;
const PI = 3.14;

/* Boolean Data type
represents logical entities and have true or false value  */
const isPrimaryNumber = true
const isNewUser = false
/*Booleans are used to run code conditionally based on T/F value   */

/*Undefined dataType represents value that is not assigned
remember this means the variable is declared but not initialized    */
let result
console.log(result) // this will log as undefined because not initialized with a value

const res = undefined // undefined can also be assigned as well

/* Null Data type is a special value that means empty or unknown
  */
 const data = null // null denotes is a null value and undefined one that isnt yet defined

 /*BigInt is new and denotes an integer value larger than number type
 Symbol denotes values that are unique and unchangeable    */

 /* Primitive valeus are actually written as values like the text or number
 However! Non Primitive type is a collection of values  */

 /* Object = complex data type defined by key value pairs */

 // This is Object Literal Syntax and 1 way to store Data 
 const person = { // assign properties and values
    firstName: 'Sahil', // property : value (value = string)
    lastName : 'Banati',
    age : 22, 
    // property must be string or symbol, value can be any data type


 } 
 // to access the property use .notation
 console.log(person.firstName); /*   */

 
/*The other way to store Object Data is Array Type denoted with [,..,]  
 
To access a value in an Array we use its position. 
Arrays are 0 indexed meaning the count of items starts at 0. 
The length property of the array is +1 the max index. 
so the index of oddNumbers = 4 and the length is 5 b.c 5 total items.
*/
const oddNumbers = [1,3,5,7,9] 
console.log(oddNumbers[0]) // first element in the Array
console.log(oddNumbers[1]) // second element in the Array
/*  Multiple values can be stored in one collection variable  */

let a = 'Sahil'
a = 5
a = true // last assigned value, this doesnt cause an error 
console.log(a); /* JS is a dynamically typed language, meaning 
we dont need to specify a data type when we declare it, and as a result,
data types are automatically converted when we execute
 */