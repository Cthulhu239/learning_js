let myDate = new Date();

console.log(myDate.toString());
console.log(myDate.toJSON());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate); //object


let myCreatedDate = new Date(2026, 4, 5); //year ,day,month
let anotherDate = new Date(2022, 2, 3, 4, 5); //4 hours 5 min
console.log(myCreatedDate.toString());
console.log(anotherDate.toString());

let withDate = new Date("2026-05-05");
console.log(withDate.toString());
console.log(withDate.getTime());

let timeStamp = Date.now(); //current date
console.log(timeStamp);


console.log(Math.floor(Date.now() / 1000));
let newdate = new Date();
console.log(newdate.getDay());
console.log(newdate.getMilliseconds()); //and many more methods



newdate.toLocaleString('default', {
    weekday: "long",
})
console.log(newdate.toString());