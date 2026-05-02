let v = "jajsd";
let valueInNumber = Number(v);
console.log(valueInNumber, typeof (valueInNumber)); //NaN -> not a number (iska type number hai)

let x = null;
let a = Number(x);
console.log(a, typeof (a)); //gives 0 for null

let y = undefined;
let b = Number(y);
console.log(b, typeof (b)); //NaN

// console.log("2" + 3); //23
// console.log("2" + "3"); //23
// console.log("2" + 3 + 7); //237
// console.log(7 + 3 + "2"); //102
//defaulted to string, gets appended

console.log(true);
console.log(+true);
