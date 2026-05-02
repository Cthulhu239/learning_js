let v = "jajsd";
let valueInNumber = Number(v);
console.log(valueInNumber, typeof (valueInNumber)); //NaN -> not a number (iska type number hai)

let x = null;
let a = Number(x);
console.log(a, typeof (a)); //gives 0 for null

let y = undefined;
let b = Number(y);
console.log(b, typeof (b)); //NaN
