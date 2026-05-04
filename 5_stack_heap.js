let user1 = {
    name: "Kushan",
    age:19,
}

let user2 = user1;

user2.age = 20;
console.log(user1); //original age changed to 20
//happenend because object being a non-primitive typed
//is stored inside the heap and it is called by reference everytime


let a = "apple";
b = a;
b = 2;
console.log(a, b);
//here the value of a does not change as it is primitive and called by value
//stored in stack