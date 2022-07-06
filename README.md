# Must-type.js
is a framework which is inspired from the require() in solidity, used for validating types and inputs on common js and even on es6 
withiut the use of typescript, this good for aplication which has to require a type for aurguments of functions or input on forms
## install
```bash
npm i must-type
```

## usage

#### commonjs
```javascript
   const {must, string} = require("must.js");
   const isString = string(100) // false
   const must(isString) "this is not type of string") // return type error
   function sampleFunction(name,age){
   must(string(name) && name.length >= 6, 'name is not a typeof string or it\'s length is less than 6');
   must(age === type(0), `age must be type ${type}`);
   must(age >= 18, 'you are less than 18');
   must(age <= 50, 'only for 50 and younger');
   console.log({age : age, name : name})
}
sampleFunction(123, 1)
// only the first error are displayed because it will stop the execution
// TypeError name is not a typeof string or it's length is less than 6

sampleFunction("john doe", 13);
// TypeError you are less than 18
sampleFunction("john doe", 60);
// TypeError only for 50 and younger

sampleFunction("john doe", 22);
// {age : 22, name : "john doe"}

```

#### es6
```javascript
import {must, number, type} from "must.js";
const isNumber = number("jhone doe")  // false 
must(isNumber);

function sampleFunction(name,age){
   must(string(name) && name.length >= 6, 'name is not a typeof string or it\'s length is less than 6');
   must(age === type(0), `age must be type ${type}`);
   must(age >= 18, 'you are less than 18');
   must(age <= 50, 'only for 50 and younger');
   console.log({age : age, name : name})
}
sampleFunction(123, 1)
// only the first error are displayed because it will stop the execution
// TypeError name is not a typeof string or it's length is less than 6

sampleFunction("john doe", 13);
// TypeError you are less than 18
sampleFunction("john doe", 60);
// TypeError only for 50 and younger

sampleFunction("john doe", 22);
// {age : 22, name : "john doe"}
```

### what is the use cases for must.js
0. validate types on function aurguments 

```javascript
   const {must, object}
   function myFunction(aurgumentA, aurgumentB){
      must(object(aurgumentA), `this aurgument must be an object`);
      // it requires aurgumentA to be an object if it is indeed 
      // an object it will continue the execution else return TypeError
      console.log(aurgumentA, aurgumentB);
   }

```
2. for the use of conditionals 
```javascript
const {type, t} require("must")
const identifier = {name : "john doe", age : 37}
if(type(identifier.age) == t.num ){
   console.log(identifier);
}
```
3. in api requests 

```javascript
   const express = require("express");
   const app = express();
   const {must} = require("must/es");
   app.get("/:id", (req,res) => {
      must(req.params.id.length > 5, 'id must be higher than 5 characters');
      // if req.params.id.length < 5 then there will be an error
      res.send("no error occured");
   })
   app.listen(5000, () => console.log(server is running on port 5000))

```


to learn must.js please visit the [documentation](http://localhost:5000) for more information 
