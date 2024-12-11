//HIGH ORDER FUNCTIONS - These are the functions that take functions as an argument

//(High order function)//

//For normal functions
function add(a,b,cb){
    let result= a+b;
    cb(result);
}
add(10,20,function(val){
    console.log(val);
})


//For arrow functions
function add(a, b, cb) {
    let result = a + b; // Calculate the sum of a and b
    cb(result); // Call the callback function with the result
}
add(10, 20, (val) => console.log(val));


//Return function inside a function
function add(a, b, cb) {
    let result = a + b; 
    cb(result);
    return () => console.log(result);
}
let ResultFunctions= add(10, 20, () => {});
ResultFunctions();



