function string(statements){
   return typeof statements === typeof String();
}
function type(statements){
   return typeof statements;
}

function isTrue(statements){
   mBool(statements, 'statements in isTrue function must be typeof Boolean');
   return statements ;
}
function int(statements){
   return typeof statements == typeof Number();
}

function bool(statements){
   return typeof statements === typeof Boolean();
}

function func(statements){
   return typeof statements === typeof func;
}

function array(statements){
   return typeof statements === typeof Array();
}

function object(statements){
   return typeof statements === typeof Object({});
}

function defined(statements){
   return typeof statements !== typeof undefined;
}
// does not need must
function mString(statements,stack){
   return must(string(statements),stack)
}

function mInt(statements, stack){
   return must(-typeof statements == typeof Number(),stack);
}

function mBool(statements,stack){
   return must(typeof statements === typeof Boolean(),stack);
}

function mFunc(statements,stack){
   return must(typeof statements === typeof Function(),stack);
}

function mArray(statements,stack){
   return must(typeof statements === typeof Array(), stack);
}
function mObject(statements, stack){
   return  must(typeof statements === typeof Object({}), stack);
}
function mDefined(statements,stack){
   return must(typeof statements !== typeof undefined, stack);
}

function mTrue(statements, stack){
   must(statements === true, stack)
}

function must(condition, stack){
   if(!stack){
      stack = "there's an error occourd";
      setTimeout(function() {if(typeof stack !== typeof String()){
         throw new TypeError("stack must be typeof string")
      }},300)
   }
   if(condition === false){
      throw new TypeError(stack)
   } else if(condition === undefined){
      throw new TypeError("condition must be set");
   } 

}

function ifTrue(condition,cb){
   if(condition === undefined){
      throw new TypeError("condition must be set");
   } else if(condition === true){
      cb();
      return true
   }
}
// if(defined callback)

function ifString(statements, cb){
    if(typeof statements === typeof String()){
       cb(); return true;
    } else {
       return false;
    }
}

function ifInt(statements){
   if(typeof statements == typeof Number()){
      cb(); return true;
   } else {
       return false;
    }
}

function ifBool(statements){
   if(typeof statements === typeof Boolean()){
      cb(); return true;
   } else {
       return false;
    }
}

function ifFunc(statements, cb){
   if(typeof statements === typeof must){
      cb(); return true;
   } else {
       return false;
    }
}

function ifArray(statements,cb){
   if(typeof statements === typeof Array()){
      cb(); return true;
   }
}
function ifObject(statements, cb){
   if(typeof statements === typeof Object({})){
      cb()
   }
}

function ifDefined(statements, cb){
   mFunc(cb, "callback is a function and is required");
 if(typeof statements !== typeof undefined){
      cb(); return true;
   } else {
       return false;
    }
}

const t= {
   str : 'string',
   int : 'number',
   func : 'function',
   bool : 'boolean',
   obj : 'object'
   
}
console.log(type(String) === t.func);

function tatch(cb,err){
   mFunc(cb, 'callback must be a function'),
   ifTrue(!defined(err), () => {
      err = function(e){
         console.log(e);
      }
   });
   ifTrue(defined(err), () => {
      mFunc(err,'err handler must be a function')
   })
   
   try {
      cb()
   } catch (error) {
      err(error)
   }
}

const toExport = {t,tatch,must,mInt,mString,mBool,mTrue,mFunc,mArray,mObject,mDefined,int,string,bool,func,array,object,defined, isTrue,ifString,ifInt,ifBool,ifFunc,ifArray,ifObject,ifDefined,ifTrue, type};

module.exports = toExport