console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

/*"==" and other comparison operators work
  differently. 
  Comparisons convert null to a number, treating it as 0 */

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined >= 0);

// "===" checks the data type too along with value
console.log(1 == "1");