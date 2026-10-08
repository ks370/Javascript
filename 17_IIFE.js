//Immediately Invoker Fucniton Expression (IIFE)

//global scope ke pollution se problem hoti h kyi baar
// to remove pollution of global scope we use iife

(function chai(){ // named iife having chai as name 
    console.log(`DB CONNECTED`);
})();  // need to stop by semi colon

// syntax-> ()()
   // firts braket -> writing defintion of function
   // second braket -> for execution

//writing with arrow funcrion
( () => { // unnamed iife 
    console.log(`DB CONNECT - 2`)

})();

// parameter passed iife
( (name) => { // unnamed iife 
    console.log(`DB CONNECT - 2 ${name}`)

})("abcd");