const accountId = 1445533341;
let accountEmail = "swornodas@gmx.com";
var accountPassword = "pass@@123";
accountCity = "Jaipur";
let accountState;

//accountId = 2// This line is commented out to avoid reassignment error

accountEmail = "sd@sworno.com";
accountPassword = "new@pass123";
accountCity = "Kolkata";
console.log(accountId);
console.log(accountEmail);
console.table([accountId, accountEmail, accountCity, accountState])


/*
    Prefer not to use var 
    because of issue in block scope and function scope.
*/