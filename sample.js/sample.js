// types in must.js is not declared but validate
// sample 
const  {string, bool, object,func, defined, array, int, type, must} = require("must.js");
// or
// import  {string, bool, object,func, defined, array, int, type, must} = from "must.js";
int(123) // true 
int("1234") // false 
must(int("1234"), 'not a number') // TypeError not a number
console.log(type(123) === type(0)); // true ;
// it can also used ass 
console.log(type(123) === 'number'); // true
// 

each type validation  work the same 
int for intergers or number 
string for strings 
bool for boolean
object for arrays or objects
array for arrays or objects
func for functions
defined for defined or undefined

# syntax <type>(statement) 
change <type> for any types 
return true or false if typeof statement == <type>
example 
int(123) //  true ;
string(123) // false;


must(condition);
condition must be typeof boolean 
if true it will continue the execution 
if false it will return TypeError

#ex  no error 
function sample(){
   must(1 == 1) // 
   console.log("no error");
}
sample() // no error

function sample(){
   must(1 == 2, '1 is not equal to 2') // 
   console.log("no error");
}
var stringWord = "this is a string "
// must can have any argument as long as it is a type of bollean 
must(stringWord.length > 5) // true


// sample TypeError 1 is not equal to 2


// type(statement) 
return typeof statement 
ex 
type("string") // string
type(123456789) // number
type ({a : 1, b : 2}) // object
type[{1,2,3}] // object

// usecases 
if(type(1) == "number"){
   // code
}

but to use it better if the comparison uses type function 
ex 
if(type("this is a string") == type("")){
   // code
}

if(type({a : 1, b: 2}) == type({})){
   // code
}


m<type>(statement, stack)
// is a type validation used without must 
using only <type> and must 
must(string("string"), "error stack is here");
using m<Type> 
mString(123, `not String`) // not String

if<Type>(statement, cb);
if types is used for conditionals without else 
it works like 

if(typeof statement === type){
   callback();
}

Donate now 
