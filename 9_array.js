arr = ["kushan", 19, "it's like python lists"];
arr.push(67);
arr.push(12);
console.log(arr);
arr.pop();
console.log(arr);

arr.unshift(1000);//adds at the start
console.log(arr);

arr.shift(); //removes from start
console.log(arr);
console.log(arr.includes(67));
console.log(arr.indexOf(67));

const str = arr.join(); //into a string
console.log(typeof str);
console.log(str);


//slice,splice
// console.log("A ", arr);
const slc1 = arr.slice(1, 3); //1,2
const slc2 = arr.splice(1, 3); //1,2,3 //also manipulates the original array

console.log(slc1);
console.log(slc2);
console.log(arr);

const arr2 = [0, 1, 2, 3, 4, 5, 6];
const splc = arr2.splice(1, 4);
console.log(arr2); //0,5,6
console.log(splc); //1,2,3,4