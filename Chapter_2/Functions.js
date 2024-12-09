//Functions 

function add(a, b) {
    console.log(a + b);
}
add(10, 20);


function multiply(a, b) {  //Arguments
    return a + b;
}
multiply(10, 20) // Parameters

// Get a good habit of using return instead of console.log inside a functions //

function Add(a, b) {
    return a + b;
}
Add(10, 20);



//WAP a program to add multiple numbers using functions
// We can do it using argument 

function AddNumbers(){
    let ans = 0 
    for (let i=0; i<arguments.length;i++){
        ans = ans + arguments[i];
    }
    return ans;
}

let result = AddNumbers(10,20,30,40);
console.log(result);



