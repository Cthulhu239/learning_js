const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
//const arr3 = arr1.concat(arr2); //mreged properly

const arr3 = [...arr1, ...arr2]; //spread
console.log(arr3);


const unflat = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10]]]];
const fl = unflat.flat(4); //depth of the array, can use infinity for ease
console.log(fl);


console.log(Array.isArray("Kushan"));
console.log(Array.from("Kushan"));
