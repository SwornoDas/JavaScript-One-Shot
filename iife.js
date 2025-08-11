// Immediately Invoked Function Expression (IIFE)
(function chai (){
    // Named IIFE
    console.log(`DB Connection Established`);
})();
// chai();


( (name) => {
    console.log(`DB Connection Established Two ${name}`);
})('sworno');

