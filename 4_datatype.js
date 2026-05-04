/*
PRIMITIVE=>(uses stack)
    string
    Number
    BigInt
    Boolean
    null
    undefined
    symbol


REFERENCE(non-primitive)=>(uses heap)
    Array
    Objects
    Functions
*/

//dynamically typed language
//variable types are determined at runtime
let x = 100;
x = "Kushan" //allowed in js, but error in statically typed languages
console.log(x);

const arr = ["iiitN", "IIITH"];
let myObj = {
    name: "Kushan",
    age: 20,
}

const fun = function() {
    console.log("functions are treated as values in js, so it can be stored as a variable")
}
console.log(fun());
console.log(typeof (fun));
console.log(typeof(arr));