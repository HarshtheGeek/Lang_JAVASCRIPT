//ARRAYS- Collection of value of same datatype

const students = ["Piyush", "Harsh", "Harry", "Abhinav"];
console.log(students);
// You cannot change the Variable since we are using the const keyword but you can change the inside value of the variable that is applicable//


// Javscript homogeneous nahi hoti toh usme kaisi bhi value ka collection bana sakte hai
const JSArray = ["hello", 10, "kaise ho"];
JSArray.push(1230);
console.log(JSArray);
// Some common methods include push, pop, IndexOf

//High order functions in array

//forEach
const NumeroUno = [10, 20, 30, 40, 50];
function Values(n) {
    console.log(n);
}
NumeroUno.forEach(Values);

//Same code for the arrow function
const NumeroDos = [11, 22, 33, 44, 55];
NumeroDos.forEach((val) => console.log(val));


//Map



//Find




//FindIndex