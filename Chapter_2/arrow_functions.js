// Arrow Functions
const Add= (a,b) =>{
return a+b;
}
console.log(Add(2,3));


// Good for one liner functions as well
const Sub = (a,b) => a-b;
console.log(Sub(7,5));


//Argument - Hum arguments use nahi kar sakte inside the arrow functions
const addNumbers = (...num) => {
    console.log(num)
}
addNumbers(10,20,30,40,50,60);


//Hoisting - Arrow functions dosent support the hoisting 
Varnum();
const Varnum = () => {
    console.log(num)
}
// This code wont work as the arrow function dont support hoisting


//This keyword
const obj = {
    value : 20,
    function : ()=> {
        console.log(this);
    },
}
obj.function();

