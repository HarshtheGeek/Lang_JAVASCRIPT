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

```markdown
# JavaScript Conditional Statements

Conditional statements in JavaScript allow you to execute different blocks of code based on specific conditions.

---

## **Types of Conditional Statements**

### 1. **if Statement**
The `if` statement executes a block of code if a specified condition is `true`.

**Syntax:**
```javascript
if (condition) {
  // code to execute if condition is true
}
```

**Example:**
```javascript
let age = 18;

if (age >= 18) {
  console.log("You are eligible to vote.");
}
```

---

### 2. **if...else Statement**
The `if...else` statement provides an alternative block of code to execute if the condition is `false`.

**Syntax:**
```javascript
if (condition) {
  // code to execute if condition is true
} else {
  // code to execute if condition is false
}
```

**Example:**
```javascript
let age = 16;

if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}
```

---

### 3. **if...else if...else Statement**
The `if...else if...else` statement tests multiple conditions sequentially.

**Syntax:**
```javascript
if (condition1) {
  // code to execute if condition1 is true
} else if (condition2) {
  // code to execute if condition2 is true
} else {
  // code to execute if none of the conditions are true
}
```

**Example:**
```javascript
let marks = 85;

if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 75) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}
```

---

### 4. **switch Statement**
The `switch` statement evaluates an expression against multiple cases and executes the matching block.

**Syntax:**
```javascript
switch (expression) {
  case value1:
    // code to execute if expression === value1
    break;
  case value2:
    // code to execute if expression === value2
    break;
  default:
    // code to execute if no cases match
}
```

**Example:**
```javascript
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}
```

---

### 5. **Ternary Operator**
The ternary operator (`? :`) is a shorthand for `if...else` and is used for simple conditional expressions.

**Syntax:**
```javascript
condition ? expressionIfTrue : expressionIfFalse;
```

**Example:**
```javascript
let age = 18;
let message = age >= 18 ? "You are eligible to vote." : "You are not eligible to vote.";
console.log(message);
```

---

### 6. **Logical Operators in Conditions**
Logical operators are often used in conditional statements to combine multiple conditions.

- **AND (`&&`)**: Returns `true` if both conditions are true.
- **OR (`||`)**: Returns `true` if at least one condition is true.
- **NOT (`!`)**: Reverses the truth value of a condition.

**Example:**
```javascript
let age = 20;
let isCitizen = true;

if (age >= 18 && isCitizen) {
  console.log("You can vote.");
} else {
  console.log("You cannot vote.");
}
```

---

## **Best Practices**
- Always use `===` and `!==` for strict equality and inequality checks.
- Use `default` in `switch` statements to handle unmatched cases.
- Avoid deeply nested `if` statements for better readability.

---

This guide provides an overview of JavaScript conditional statements for quick reference!
```



