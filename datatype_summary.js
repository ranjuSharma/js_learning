// primitive 

// 7 types: string ,number , boolean ,null , undefined,symbol,bigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 123456789345676765n


//Reference ( non primitive)

//Array , objects , functions


//**********arrays ********* */
const heros =  ["shaktiman" , "naagraj" ,"doga"];


//**********objects********** *

let myObj = {
    name: "ranju",
    age: 22,
}


//**********functions********** 
const myFunction = function() {
    console.log(" hello");

}

//**********identify datatype********** 

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof heros);

// undefined = undefined 
// null = object
// boolean = boolean 
// number =  number
// string = string 
// object (native and doesnot implement [[call]]) = function
// object (host and does not implement [[call]]) = implementation defined 
// except may not be " undefined " , "boolean", "numeber", 
// or " string "
 

/************* memory ****************/

// stack (primitive ) , heap (Non - Primitive )

let myYoutubename = "stimulateyuvaa"

let anothername = myYoutubename
anothername = "chai and chaos"

console.log(myYoutubename);
console.log(anothername) ;

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "ranju@google.com"

console.log(userOne.email) ;
console.log(userTwo.email);

