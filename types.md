# must.js documentation 
in this page contains the the documentation about <b>must</b>
in defination must.js is a framework which is inspired from the require() function in solidity, used for validating types and inputs on common js and even on es6 
withiut the use of typescript, this good for aplication which has to require a type for aurguments of functions or input on forms.


### for example
without using must.js
```javascript 
   function noMust(I_WANT_THIS_AS_STRING, I_WANT_THIS_AS_NUMBER){
      if(typeof I_WANT_THIS_AS_STRING !== 'string' || typeof I_WANT_THIS_AS_NUMBER !== 'number'){
         return new TypeError('wrong argument types');
      } else {
         console.log(I_WANT_THIS_AS_STRING , I_WANT_THIS_AS_NUMBER);
      }
   }
```
<br>
<p>with must.js</p>

```javascript
const must = require("must");
function withMust(I_WANT_THIS_AS_STRING,I_WANT_THIS_AS_NUMBER){
   must(string(I_WANT_THIS_AS_STRING), int(I_WANT_THIS_AS_NUMBER));
   console.log(I_WANT_THIS_AS_STRING , I_WANT_THIS_AS_NUMBER);
}
```

<p>noMust and withMust works desame but withMust has shorter and cleaner code that could
save seconds of your time</p>

<h1>Types</h1>
this types doesnt declare types but check if it is the type that you want or what type it is 

<h3><pre>must.type(statement)</pre></h3>
<p> this returns the typeof statement passed to must.type function</p>



```javascript
   const {type} = require('must');
   type("string") // "string";
   type({}) // "object",
   type(type) // "function",
   type(true) // "boolean",
   type(123) // "number"
```


<h3>

```javascript
typeChecker(statement)
```
</h3>

   type checker functions return true or false if it meet a certain 
   <h3>list of type checker functions</h3>
   <ul>
      <li>
      <pre>must.string(statement) </pre>  <p>return true if statement is typeof string</p>
      </li>
      <li>
      <pre> must.int(statement) </pre> <p>return true if statement is typeof number</p>
      </li>
      <li>
      <pre>must.bool(statement) </pre> <p>return true if statement is typeof boolean</p>
      </li>
      <li>
      <pre>must.object(statement)</pre><p>return true if statement is typeof object</p>
      </li>
      <li>
     <pre> must.array(statement)</pre><p>return true if statement is typeof object for arrays array</p>
      </li>
      <li>
      <pre>must.func(statement) </pre> <p>return true if statement is typeof function</p>
      </li>
      <li>
      <pre>must.defined(statement)</pre>  <p>return true if statement is not typeof undefined</p>
      </li>
      <li>
      <pre>must.true(statement)</pre>  <p>return true if statement is true</p>
      </li>
   </ul>
      
      
<h3>

```javascript

must.t 
```
</h3>
is an object that has all string value for each type. <br> 
this will be use less or never but it is included for simple use cases <br>
<b>example:</b>

```javascript
const {t, type} = require("must");
function sampleFunction(d){
   if(type(d) === t.str ){
      console.log(type(d)) 
   } else {
      console.log('d is not a string');
   }
}

sampleFunction(1) // d is not a string
sampleFunction("1234")
```
<h3>

```javascript

must.must(condition,stack);

```
</h3>


this return a type error with <b>stack</b> as the message  if <b>condition</b> is not true.
<br>example 

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
// no error 
// {age : 22, name : "john doe"}


```

<i>type checker functions</i> are used to check if it the type that you want 
and <pre>must.must()</pre> function is used to validate it, which throw an error if it does not meet the condition spicified.<br>
<i>must type functions are used to validate data without the use of <pre>must.must()</pre> function</i>

<h3>

```javascript
mustTypeFunction(statement,cb) 
```
</h3>
mustTypeFunctions will return new TypeError and use <i>stack</i> as error message if statement is not the type that you spicified.
<h3>list of must type funcctions</h3>
<ul>
<li><pre>must.mString(statement,stack)</pre><p>return TypeError if statemet is not 
   typeof <i>string</i> and stack is the error message</p></li>
   
<li><pre>must.mInt(statement,stack)</pre><p>return TypeError if statemet is not 
   typeof <i>number</i> and stack is the error message</p></li>
   
<li><pre>must.mBool(statement,stack)</pre><p>return TypeError if statemet is not 
   typeof <i>boolean</i> and stack is the error message</p></li>
   
<li><pre>must.mObject(statement,stack)</pre><p>return TypeError if statemet is not 
   typeof <i>object</i> and stack is the error message</p></li>
   
<li><pre>must.mFunc(statement,stack)</pre><p>return TypeError if statemet is not 
   typeof <i>funcction</i> and stack is the error message</p></li>
   
<li><pre>must.mArray(statement,stack)</pre><p>return TypeError if statemet is not 
   typeof <i>object</i> and stack is the error message</p></li>
   
<li><pre>must.mDefined(statement,stack)</pre><p>return TypeError if statemet is 
   typeof <i>undefined</i> and stack is the error message</p></li>
   
<li><pre>must.mTrue(statement,stack)</pre><p>return TypeError if statemet is not 
   <i>true</i> and stack is the error message</p></li>
</ul>
   
#### Example
 with must and type checker functions

```javascript
const {must, string,int} = require("must");
must(string(100),'not string');
   // TypeError 'not string'
must(int(100), 'not number');

```
 using must type function
   ```javascript
mString(100, 'not string');
   // TypeError  not string
mInt(100, 'not number');
   // there will no output 
   ```
</ul>

## if type functions 
<h3>

```javascript
ifTypeFunctions(statement,cb)
```
</h3>
functions that will execute cb if statement is the type spicified
<h3>list of if type functions</h3>
<ul>
   <li>
<pre>must.ifString(statement,cb);</pre>
      <p> execute <i>cb</i> if <i>statement</i> is typeof <i>string</i>
      </p>
   </li>
   
   <li>
<pre>must.ifInt(statement,cb);</pre>
      <p> execute <i>cb</i> if <i>statement</i> is typeof <i>number</i>
      </p>
   </li>
   
   <li>
<pre>must.ifBool(statement,cb);</pre>
      <p> execute <i>cb</i> if <i>statement</i> is typeof <i>boolean</i>
      </p>
   </li>
   <li>
      <pre>must.ifObject(statement,cb);</pre>
      <p> execute <i>cb</i> if <i>statement</i> is typeof <i>object</i>
      </p>
   </li>
      <li>
<pre>must.ifArray(statement,cb);</pre>
      <p> execute <i>cb</i> if <i>statement</i> is typeof <i>object</i>
      </p>
   </li>
   
   <li>
<pre>must.ifFunc(statement,cb);</pre>
      <p> execute <i>cb</i> if <i>statement</i> is typeof <i>function</i>
      </p>
   </li>
   
<li>
<pre>must.ifDefined(statement,cb);</pre>
      <p> execute <i>cb</i> if <i>statement</i> is not <i>undefined</i>
      </p>
   </li>
   
<li>
<pre>must.ifTrue(statement,cb);</pre>
      <p> execute <i>cb</i> if <i>statement</i> is  <i>true</i>
      </p>
   </li>
</ul>

#### Example 

```javascript
const {ifString} = require("must");
ifString('abcd', () => {
   console.log('this is a string')
}) // 'this is a string'

```
<h3>

```javascript
must.tatch(cb,err);

```
</h3>
<p> this is the alternative of catch and try 
cb is a function that you want to execute 
and err is called when there is an error but it will simply log the error if err is not spicified</p>


#### Example
```javascript
// with catch try 
try {
   console.log('no error');
} catch (e) {
   console.log(err);
}

// with must.tatch
const {tatch} = require("must");
tatch(() => {
   console.log(lbd);
})
// lbd is undefined


```

If this simple framework is helpful consider buying me a [coffee]()
if you have any trouble just contact me [here]()
