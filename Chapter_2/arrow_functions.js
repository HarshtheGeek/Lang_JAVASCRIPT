// Arrow Functions
const Add= (a,b) =>{
return a+b;
}
console.log(Add(2,3));


// Good for one liner functions as well
const Sub = (a,b) => a-b;
console.log(Sub(7,5));

//Argument

const addNumbers = (...num) => {
    console.log(num)
}

addNumbers(10,20,30,40,50,60);

