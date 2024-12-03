# JAVASCRIPT NOTES

## What is JavaScript?

JavaScript is a lightweight, interpreted programming language primarily used for creating interactive and dynamic content on web pages. It is one of the core technologies of the World Wide Web, along with HTML and CSS.

### Features:
- Form validations
- Animations
- Content updates
- Asynchronous operations (e.g., AJAX)

JavaScript runs on:
- **Client-side**: In web browsers
- **Server-side**: Using environments like Node.js

---

## Difference Between JavaScript and TypeScript

| Feature           | JavaScript                     | TypeScript                        |
|--------------------|--------------------------------|------------------------------------|
| **Typing**        | Dynamic (no type enforcement) | Static (enforced type definitions)|
| **Compilation**   | No (interpreted directly)      | Yes (transpiled to JavaScript)    |
| **Error Checking**| Runtime errors                | Compile-time error checking       |
| **Tooling**       | Basic support in IDEs         | Excellent IDE support (e.g., VSCode)|
| **Usage**         | Small projects, prototypes    | Large-scale, maintainable projects|

---

## Difference Between `var`, `let`, and `const`

### 1. `var`
- **Scope**: Function-scoped.
- **Hoisting**: Variables declared with `var` are hoisted to the top of their scope, but their value remains `undefined` until the declaration is executed.
- **Re-declaration**: Can be re-declared within the same scope.

#### Example:
```javascript
function exampleVar() {
  console.log(x); // Output: undefined (hoisted)
  var x = 10;
  console.log(x); // Output: 10
}
exampleVar();

var x = 5;
var x = 10; // Re-declaration allowed
console.log(x); // Output: 10
```

---

### 2. `let`
- **Scope**: Block-scoped (enclosed in `{}`).
- **Hoisting**: Variables are hoisted, but accessing them before declaration results in a `ReferenceError`.
- **Re-declaration**: Cannot be re-declared within the same scope.

#### Example:
```javascript
function exampleLet() {
  // console.log(y); // ReferenceError: y is not defined
  let y = 20;
  console.log(y); // Output: 20
}
exampleLet();

// let y = 5; Uncommenting this will cause an error
// let y = 10; Cannot re-declare y in the same scope
```

---

### 3. `const`
- **Scope**: Block-scoped (like `let`).
- **Hoisting**: Variables are hoisted, but accessing them before declaration results in a `ReferenceError`.
- **Re-declaration**: Cannot be re-declared within the same scope.
- **Mutability**: The reference is immutable, but the content of the object or array it refers to can be changed.

#### Example:
```javascript
const z = 30;
console.log(z); // Output: 30

// z = 40; Uncommenting this will cause a TypeError

const arr = [1, 2, 3];
arr.push(4); // Allowed: modifies the content of the array
console.log(arr); // Output: [1, 2, 3, 4]

// const arr = []; Uncommenting this will cause a re-declaration error
```

---

## Summary Table of `var`, `let`, and `const`

| Feature            | `var`                         | `let`                          | `const`                        |
|---------------------|-------------------------------|---------------------------------|--------------------------------|
| **Scope**          | Function-scoped               | Block-scoped                   | Block-scoped                  |
| **Hoisting**       | Hoisted with `undefined`      | Hoisted but inaccessible       | Hoisted but inaccessible      |
| **Re-declaration** | Allowed                       | Not allowed                    | Not allowed                   |
| **Immutability**   | Mutable                       | Mutable                        | Reference immutable           |


# JavaScript Data Types

JavaScript has dynamic typing, meaning variables can hold values of any type. The data types in JavaScript are divided into two categories: **Primitive** and **Non-Primitive** (Reference) types.

---

## **Primitive Data Types**
Primitive types are immutable and represent single values.

1. **Number**
   - Represents both integers and floating-point numbers.
   - Example:
     ```javascript
     let age = 25;
     let price = 99.99;
     ```
   - Special numeric values: `Infinity`, `-Infinity`, and `NaN` (Not a Number).

2. **String**
   - Represents textual data.
   - Enclosed in single (`'`), double (`"`), or backticks (`` ` `` for template literals).
   - Example:
     ```javascript
     let name = "John";
     let greeting = `Hello, ${name}`;
     ```

3. **Boolean**
   - Represents logical values: `true` or `false`.
   - Example:
     ```javascript
     let isLoggedIn = true;
     ```

4. **Undefined**
   - A variable that has been declared but not assigned a value.
   - Example:
     ```javascript
     let x; // undefined
     ```

5. **Null**
   - Represents an explicitly empty or non-existent value.
   - Example:
     ```javascript
     let user = null;
     ```

6. **Symbol** (introduced in ES6)
   - Used to create unique identifiers.
   - Example:
     ```javascript
     let id = Symbol('uniqueId');
     ```

7. **BigInt** (introduced in ES11/ES2020)
   - Represents integers larger than `Number.MAX_SAFE_INTEGER`.
   - Example:
     ```javascript
     let bigNumber = 123456789012345678901234567890n;
     ```

---

## **Non-Primitive (Reference) Data Types**
Non-primitive types can hold collections of values and more complex entities.

1. **Object**
   - A collection of key-value pairs.
   - Example:
     ```javascript
     let user = {
       name: "John",
       age: 30,
     };
     ```

2. **Array**
   - Ordered list of values.
   - Example:
     ```javascript
     let numbers = [1, 2, 3, 4];
     ```

3. **Function**
   - Block of code designed to perform a particular task.
   - Example:
     ```javascript
     function greet() {
       return "Hello, world!";
     }
     ```

4. **Date**
   - Represents dates and times.
   - Example:
     ```javascript
     let now = new Date();
     ```

5. **RegExp**
   - Represents regular expressions.
   - Example:
     ```javascript
     let pattern = /abc/;
     ```

---

## **Type Checking**
Use the `typeof` operator to determine the type of a value.
```javascript
console.log(typeof 42);         // "number"
console.log(typeof "hello");    // "string"
console.log(typeof true);       // "boolean"
console.log(typeof undefined);  // "undefined"
console.log(typeof null);       // "object" (a historical quirk)
console.log(typeof Symbol());   // "symbol"
console.log(typeof BigInt(123)); // "bigint"
console.log(typeof {});         // "object"
console.log(typeof []);         // "object" (arrays are objects)
console.log(typeof function(){}); // "function"
```

---

## **Dynamic Typing**
JavaScript allows variables to change types dynamically.
```javascript
let value = 42;       // Number
value = "Hello";      // Now a String
value = true;         // Now a Boolean
```

---



