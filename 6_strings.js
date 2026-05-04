let a = "67";
const str = `use back ticks to do this ${a}`;
console.log(str);
console.log(typeof (str));//string

x = new String("hii");//object containing string
console.log(x);
console.log(typeof (x)); //object 
console.log(x.__proto__);
console.log(x.length);
console.log(x.toUpperCase());
//x = x.toUpperCase(); //this changes the original value
console.log(x);
console.log(x.charAt(2));
console.log(x.indexOf('i')); //gives the first occurance
const substr = x.substring(0, 2);
console.log(substr);
const slc = x.slice(-5, 2);
console.log(slc);


const y = "      kushan      ";
console.log(y);
console.log(y.trim()); //removes the trailing spaces



const url = "https://kushan.com/kushan%20gajbe";
console.log(url.replace('%20', '-'));
console.log(url.includes('kushan'));//true

console.log(url.split('%20')); //splits the string on removal of %20