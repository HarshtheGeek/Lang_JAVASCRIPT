# JAVASCRIPT NOTES

## What is JavaScript?

**JavaScript** is a high-level, dynamic, and interpreted programming language. It was originally developed to make web pages interactive (e.g., respond to user actions like clicks, input, or mouse movement). Over the years, it has evolved into a powerful language used not only on the **client-side** (in browsers) but also on the **server-side** (via platforms like Node.js).

JavaScript is one of the three core technologies of the web:

* **HTML** – structures the content
* **CSS** – styles the content
* **JavaScript** – adds behavior and interactivity

---

## Features of JavaScript

### 1. **Form Validations**

JavaScript can check the data a user enters into forms before it's submitted to the server.

**Why it's useful:**

* Prevents incomplete or incorrect data submission.
* Reduces unnecessary server load.
* Improves user experience with instant feedback.

---

### 2. **Animations**

JavaScript can be used to create animations—whether simple (like sliding or fading elements) or complex (like interactive games or simulations).

**Why it's useful:**

* Adds visual engagement.
* Improves UI/UX.
* Enables smooth transitions and effects.

---

### 3. **Content Updates (DOM Manipulation)**

JavaScript can dynamically change the content of a web page **without reloading** it.

**Why it's useful:**

* Enables interactive interfaces.
* Reacts to user actions (e.g., clicks, inputs).
* Updates only parts of the page (not the whole).

---

### 4. **Asynchronous Operations (e.g., AJAX)**

JavaScript supports **asynchronous programming**, which allows it to perform tasks like data fetching **without freezing** the page.

**AJAX (Asynchronous JavaScript and XML)** is a technique to load data in the background.

**Why it's useful:**

* Improves performance and responsiveness.
* Allows real-time data fetching (e.g., live search).
* Enables single-page applications (SPAs).
---

## Where JavaScript Runs

### 1. **Client-side (Browser)**

* Code runs in the user's browser.
* Main use: Interacting with the **Document Object Model (DOM)** to update the page dynamically.
* Common in web apps, forms, menus, etc.
* Examples: Chrome, Firefox, Safari all have built-in JS engines (e.g., V8, SpiderMonkey).

### 2. **Server-side (Node.js)**

* JavaScript also runs on the server using **Node.js**, which is a runtime environment built on Chrome’s V8 engine.
* Main use: Build APIs, databases, backend services.
* Examples: Express.js (web framework), Socket.io (real-time apps).

**Why use JavaScript on the server?**

* Unified language for full-stack development.
* Fast and scalable (event-driven, non-blocking I/O).

---

## Difference Between JavaScript and TypeScript

| Feature           | JavaScript                     | TypeScript                        |
|-------------------|--------------------------------|-----------------------------------|
| **Typing**        | Dynamic (no type enforcement)  |Static (enforced type definitions) |
| **Compilation**   | No (interpreted directly)      | Yes (transpiled to JavaScript)    |
| **Error Checking**| Runtime errors                | Compile-time error checking        |
| **Tooling**       | Basic support in IDEs         | Excellent IDE support (e.g., VSCode)|
| **Usage**         | Small projects, prototypes    | Large-scale, maintainable projects|

---

## Difference Between `var`, `let`, and `const`

### 1. `var`
- **Scope**: Function-scoped and Not blocked
- **Hoisting**: Variables declared with `var` are hoisted to the top of their scope, but their value remains `undefined` until the declaration is executed.
- **Re-declaration**: Can be re-declared within the same scope. we can also change the value
- **Use** : Useful when declaring the legacy code

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
- **Hoisting**: Variables are hoisted, but accessing them before declaration results in a `ReferenceError` or error in general
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
const a = 10;
a = 20; // ❌ Not allowed — because you're changing the value of a
```

```javascript
const person = { name: "Harsh" };
person.name = "Updated"; // ✅ Allowed — we are changing inside the object
```

---

## Summary Table of `var`, `let`, and `const`

| Feature            | `var`                         | `let`                          | `const`                       |
|--------------------|-------------------------------|--------------------------------|-------------------------------|
| **Scope**          | Function-scoped               | Block-scoped                   | Block-scoped                  |
| **Hoisting**       | Hoisted with `undefined`      | Hoisted but inaccessible       | Hoisted but inaccessible      |
| **Re-declaration** | Allowed                       | Not allowed                    | Not allowed                   |
| **Immutability**   | Mutable                       | Mutable                        | Reference immutable           |

| Scope Type     | Think of it like...                                              |
| -------------- | ---------------------------------------------------------------- |
| Function Scope | You're allowed to move **freely in the house**, but not outside. |
| Block Scope    | You're only allowed to be in **one specific room**.              |


# JavaScript Data Types

JavaScript has dynamic typing, meaning variables can hold values of any type. The data types in JavaScript are divided into two categories: **Primitive** and **Non-Primitive** (Reference) types.

Absolutely, Harsh. Here's your GitHub-style JavaScript notes focusing **only on primitive data types** with clean, detailed explanations, common mistakes you made earlier, and corrected concepts:

---

## **Primitive Data Types**

Primitive types are immutable — they store **single values** and are **not objects**. When you perform operations on them, they do **not modify the original value**, but rather produce new values.

---

### 1. **Number**

* Represents both **integers** and **floating-point numbers**.
* Can also represent special numeric values like:

  * `NaN` (Not a Number)
  * `Infinity`, `-Infinity`

#### Examples:

```javascript
let age = 25;
let price = 99.99;
let invalid = Number("123abc"); // NaN
```

#### Important Details:

* `typeof NaN` is `"number"` — this is unintuitive but correct.
* `NaN === NaN` returns `false`. NaN is the only value in JS that is **not equal to itself**.
* `0.1 + 0.2 == 0.3` returns `false` because of **floating-point precision issues**.

#### Common Mistake You Made:

* You said `0.1 + 0.2 == 0.3` is `true`, but it's `false`.

---

### 2. **String**

* Represents textual data.
* Can be declared using:

  * `'single quotes'`
  * `"double quotes"`
  * `` `backticks` `` (template literals for interpolation)

#### Examples:

```javascript
let name = "Harsh";
let greeting = `Hello, ${name}`;
console.log("10" + 5); // "105" - string concatenation
```

#### Important Details:

* `"5" + 5` → `"55"` (string)
* `"5" - 5` → `0` (number) → implicit coercion
* `"hello".toUpperCase()` → `"HELLO"` (not `"Hello"`)

#### Common Mistake You Made:

* You said `"hello".toUpperCase()` returns `"Hello"` — it returns all uppercase.

---

### 3. **Boolean**

* Represents two values: `true` and `false`.

#### Falsy values in JS:

```javascript
false
0
""
null
undefined
NaN
```

#### Examples:

```javascript
Boolean("")      // false
Boolean("0")     // true (non-empty string is truthy)
Boolean(0)       // false
```

#### Common Mistake You Made:

* You said `Boolean("")`, `Boolean("0")`, `Boolean(0)` result in `null`, `error`, and `false` respectively. Correct answers:

  * `Boolean("")` → `false`
  * `Boolean("0")` → `true`
  * `Boolean(0)` → `false`

---

### 4. **Undefined**

* A variable that has been **declared but not assigned a value**.

#### Example:

```javascript
let x;
console.log(x); // undefined
```

#### Details:

* `typeof undefined` → `"undefined"`
* Commonly returned by functions that do not return anything.

---

### 5. **Null**

* Used to represent an **intentional absence of value**.

#### Example:

```javascript
let data = null;
```

#### Important:

* `typeof null` returns `"object"` — this is a known JavaScript quirk.

#### Common Mistake You Made:

* You gave no clear answer for `typeof null` — remember: it's `"object"` due to legacy reasons.

---

### 6. **Symbol** (introduced in ES6)

* Used to create **unique identifiers**.
* Even if two symbols have the same description, they are different.

#### Example:

```javascript
let id1 = Symbol('id');
let id2 = Symbol('id');
console.log(id1 === id2); // false
```

---

### 7. **BigInt** (introduced in ES2020)

* Used for very large integers beyond `Number.MAX_SAFE_INTEGER`.

#### Example:

```javascript
let big = 123456789012345678901234567890n;
```

#### Important:

* `typeof big` → `"bigint"`
* Cannot mix BigInt with regular numbers directly:

```javascript
let x = 10n + 20n;   // ✅
let y = 10n + 20;    // ❌ TypeError
```

#### Common Mistake You Made:

* You didn’t recognize the `n` as BigInt — it’s crucial for large integer literals.

---

## **Type Checking**

Use `typeof` to check the type of any value:

```javascript
typeof 42;              // "number"
typeof "hello";         // "string"
typeof true;            // "boolean"
typeof undefined;       // "undefined"
typeof null;            // "object" (quirk)
typeof Symbol();        // "symbol"
typeof 10n;             // "bigint"
typeof {};              // "object"
typeof [];              // "object" (arrays are technically objects)
typeof function () {};  // "function"
```

---

## **Dynamic Typing**

JavaScript is **dynamically typed**, meaning variables can change type at runtime.

```javascript
let value = 42;       // number
value = "hello";      // now a string
value = true;         // now a boolean
```
Sure, Harsh. Here's a detailed explanation of **Type Coercion in JavaScript** written in clean, GitHub-style Markdown format for your notes:

---

## **Type Coercion in JavaScript**

**Type coercion** is the process by which JavaScript **automatically converts values from one data type to another** when required by the context (such as operators or comparisons).

JavaScript is a **dynamically typed** and **loosely typed** language. This means:

* Variables can hold values of any type.
* The language will often try to automatically convert one type to another to make an operation valid.
* JavaScript evaluates expressions from left to right.
* If one operand is a string and the other is a number, it may convert the number to a string (concatenation).

---

## **Types of Coercion**

### 1. **Implicit Coercion**

This happens **automatically** when JavaScript needs to convert types during operations.

#### Examples:

```javascript
"5" + 1        // "51" → 1 is converted to "1" (string)
"5" - 1        // 4   → "5" is converted to 5 (number)
true + 1       // 2   → true becomes 1
false + "1"    // "false1" → false becomes string "false"
```

JavaScript decides how to coerce the values based on the **operator** and **types involved**.

**Arrays convert to primitives when compared using ==**
```js
Copy
Edit
[] == 0;      // true → [] → "" → 0
[] == "";     // true
[1] == 1;     // true → [1] → "1" → 1
[1,2] == "1,2"; // true
```

---

### 2. **Explicit Coercion**

This is when **you manually convert** the data type using built-in functions.

#### Examples:

```javascript
String(123);       // "123"
Number("456");     // 456
Boolean(0);        // false
Boolean("hello");  // true
```
---

## **Coercion Rules**

### **String Coercion**

Occurs when using the `+` operator with a string.

```javascript
"10" + 5      // "105"
"true" + true // "truetrue"
```

Any value combined with a string using `+` will be **converted to a string**.

---

### **Number Coercion**

Occurs with arithmetic operations like `-`, `*`, `/`, or comparison operators.

```javascript
"10" - 5      // 5
"3" * "2"     // 6
true + 1      // 2
false - 1     // -1
```

In these contexts, non-numbers are coerced **into numbers** if possible.

---

### **Boolean Coercion**

Happens in conditional contexts or logical operations.

#### Falsy values in JavaScript:

```javascript
false
0
-0
""
null
undefined
NaN
```

All other values are **truthy**.

```javascript
Boolean(0);        // false
Boolean("");       // false
Boolean("0");      // true
Boolean("hello");  // true
```

---

### **Null and Undefined**

```javascript
null == undefined    // true (loose equality)
null === undefined   // false (strict equality)

Number(null);        // 0
Number(undefined);   // NaN

null + 1             // 1
undefined + 1        // NaN
```

* `null` is loosely equal to `undefined` but they are **not the same type**.
* `null` is coerced to `0` when used in numeric operations.
* `undefined` becomes `NaN` in arithmetic operations.

---

## **Coercion in Equality Comparisons**

### Loose Equality (`==`)

Performs **type coercion** when comparing values of different types.

```javascript
"5" == 5          // true
false == 0        // true
null == undefined // true
[] == false       // true
[] == 0           // true
```

### Strict Equality (`===`)

**No type coercion**. Values must be of the **same type** and **same value**.

```javascript
"5" === 5         // false
false === 0       // false
null === undefined // false
[] === false      // false
```

---

## **Common Pitfalls and Gotchas**

| Expression      | Result              | Reason                            |
| --------------- | ------------------- | --------------------------------- |
| `"5" + 2`       | `"52"`              | String concatenation              |
| `"5" - 2`       | `3`                 | String coerced to number          |
| `true + true`   | `2`                 | `true` becomes `1`                |
| `null + 1`      | `1`                 | `null` becomes `0`                |
| `undefined + 1` | `NaN`               | `undefined` becomes `NaN`         |
| `[] + {}`       | `"[object Object]"` | Array and object become strings   |
| `{} + []`       | `0` (or object)     | Depends on JS engine, very tricky |

---

## **Best Practices**

* Use **explicit coercion** when needed to make the code predictable.

  ```javascript
  Number("123");     // ✅ instead of relying on "123" * 1
  Boolean(value);    // ✅ instead of `if (value)`
  ```
* Prefer `===` over `==` to avoid unexpected coercion.
* Understand which operators cause coercion (`+`, `-`, logical operators, etc.)

Here's a clear and detailed explanation of the difference between `==` and `===` in JavaScript, written in a GitHub-style format to fit your notes:

---

## **Difference Between `==` and `===`**

In JavaScript, both `==` and `===` are **comparison operators**, but they behave differently:

---

### `==` (Loose Equality)

* **Performs type coercion** if the two values are not of the same type.
* It tries to convert the operands to the same type before comparing them.

#### Example:

```javascript
"5" == 5        // true → "5" is converted to number
false == 0      // true → false becomes 0
null == undefined // true → special case
```

#### Important Note:

`==` can give unexpected results due to automatic coercion. It **prioritizes flexibility over strict type safety**.

---

### `===` (Strict Equality)

* **Does not perform type coercion**.
* Returns `true` only if the values **and** their types are exactly the same.

#### Example:

```javascript
"5" === 5       // false → different types (string vs number)
false === 0     // false → boolean vs number
null === undefined // false → different types
5 === 5         // true → same type and value
```

---

## Summary Table

| Expression                | `==` Result | `===` Result | Explanation                              |
| ------------------------- | ----------- | ------------ | ---------------------------------------- |
| `"5" == 5`                | `true`      | `false`      | `"5"` is coerced to number in `==`       |
| `false == 0`              | `true`      | `false`      | `false` coerced to 0                     |
| `null == undefined`       | `true`      | `false`      | Only equal to each other in `==`         |
| `[] == ""`                | `true`      | `false`      | `[]` becomes `""`, then both are strings |
| `[] == 0`                 | `true`      | `false`      | `[]` becomes `""`, then `0`              |
| `"" == 0`                 | `true`      | `false`      | `""` becomes 0                           |
| `true == 1`               | `true`      | `false`      | `true` becomes 1                         |
| `null === null`           | `true`      | `true`       | Same type and value                      |
| `undefined === undefined` | `true`      | `true`       | Same type and value                      |

---

## When to Use Which

* Use `===` for most comparisons to avoid bugs caused by unexpected type coercion.
* Use `==` **only when intentional coercion is desired** and you're aware of the rules.

---

## Best Practice

> Always use `===` unless you have a specific reason to use `==`. This makes your code more predictable and less prone to hidden type conversion errors.

---
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

# JavaScript Operators

JavaScript operators are used to perform operations on variables and values. There are several types of operators in JavaScript, including:

## 1. **Arithmetic Operators**
These operators are used to perform mathematical operations.

| Operator | Description            | Example       |
|----------|------------------------|---------------|
| `+`      | Addition               | `5 + 2 = 7`   |
| `-`      | Subtraction            | `5 - 2 = 3`   |
| `*`      | Multiplication         | `5 * 2 = 10`  |
| `/`      | Division               | `5 / 2 = 2.5` |
| `%`      | Modulus (Remainder)    | `5 % 2 = 1`   |
| `++`     | Increment (post or pre)| `x++` or `++x`|
| `--`     | Decrement (post or pre)| `x--` or `--x`|

## 2. **Assignment Operators**
These operators are used to assign values to variables.

| Operator | Description        | Example         |
|----------|--------------------|-----------------|
| `=`      | Assignment         | `x = 10`        |
| `+=`     | Addition Assignment| `x += 5` (same as `x = x + 5`) |
| `-=`     | Subtraction Assignment | `x -= 5` (same as `x = x - 5`) |
| `*=`     | Multiplication Assignment | `x *= 5` (same as `x = x * 5`) |
| `/=`     | Division Assignment | `x /= 5` (same as `x = x / 5`) |
| `%=`     | Modulus Assignment | `x %= 5` (same as `x = x % 5`) |

## 3. **Comparison Operators**
These operators are used to compare two values.

| Operator | Description                   | Example         |
|----------|-------------------------------|-----------------|
| `==`     | Equal to (loose)               | `5 == '5'` returns `true` |
| `===`    | Equal to (strict)              | `5 === '5'` returns `false` |
| `!=`     | Not equal to (loose)           | `5 != '5'` returns `false` |
| `!==`    | Not equal to (strict)          | `5 !== '5'` returns `true` |
| `>`      | Greater than                   | `5 > 3` returns `true` |
| `<`      | Less than                      | `5 < 3` returns `false` |
| `>=`     | Greater than or equal to       | `5 >= 5` returns `true` |
| `<=`     | Less than or equal to          | `5 <= 3` returns `false` |

## 4. **Logical Operators**
These operators are used to combine multiple conditions or expressions.

| Operator | Description                    | Example                |
|----------|--------------------------------|------------------------|
| `&&`     | Logical AND                    | `true && false` returns `false` |
| `||`     | Logical OR                     | `true || false` returns `true` |
| `!`      | Logical NOT                    | `!true` returns `false` |

## 5. **Unary Operators**
These operators act on a single operand.

| Operator | Description                     | Example        |
|----------|---------------------------------|----------------|
| `+`      | Unary plus (convert to number)  | `+'5'` returns `5` |
| `-`      | Unary negation (convert to negative) | `-'5'` returns `-5` |
| `++`     | Increment (pre or post)         | `++x` or `x++` |
| `--`     | Decrement (pre or post)         | `--x` or `x--` |
| `!`      | Logical NOT                     | `!true` returns `false` |

## 6. **Bitwise Operators**
These operators are used to perform operations on binary numbers.

| Operator | Description        | Example         |
|----------|--------------------|-----------------|
| `&`      | Bitwise AND        | `5 & 3` returns `1`  |
| `|`      | Bitwise OR         | `5 | 3` returns `7`  |
| `^`      | Bitwise XOR        | `5 ^ 3` returns `6`  |
| `~`      | Bitwise NOT        | `~5` returns `-6`    |
| `<<`     | Left shift         | `5 << 1` returns `10`|
| `>>`     | Right shift        | `5 >> 1` returns `2` |
| `>>>`    | Unsigned right shift | `5 >>> 1` returns `2` |

## 7. **Ternary Operator**
A shorthand for `if-else` conditions.

| Syntax             | Description                       | Example                      |
|--------------------|-----------------------------------|------------------------------|
| `condition ? expr1 : expr2` | Returns `expr1` if condition is `true`, otherwise returns `expr2` | `x > 10 ? 'Greater' : 'Smaller'` |

## 8. **Type Operators**
These operators are used to check types.

| Operator | Description                     | Example       |
|----------|---------------------------------|---------------|
| `typeof` | Returns the type of a variable  | `typeof 5` returns `"number"` |
| `instanceof` | Checks if an object is an instance of a specific class | `obj instanceof Object` returns `true` |

## 9. **Spread and Rest Operators**
These operators allow you to expand or collect elements in arrays or objects.

| Operator | Description                              | Example       |
|----------|------------------------------------------|---------------|
| `...`    | Spread (expands elements)                | `let arr = [1, 2, 3]; let arr2 = [...arr, 4, 5]` |
| `...`    | Rest (collects elements into an array)   | `function sum(...args) { return args.reduce((a, b) => a + b, 0); }` |

## Conclusion
JavaScript operators are essential for performing operations on variables and values. Understanding and using them correctly is fundamental to writing efficient and functional code.

---

# JavaScript Loops

In JavaScript, loops are used to execute a block of code repeatedly as long as a specified condition is true. This is useful when working with arrays, objects, or repetitive tasks.

---

## 1. **`for` Loop**
The `for` loop is used when you know the number of iterations in advance.

### Syntax:
```javascript
for (initialization; condition; increment/decrement) {
    // Code to execute
}
```

### Example:
```javascript
for (let i = 0; i < 5; i++) {
    console.log("Iteration:", i);
}
// Output: 0, 1, 2, 3, 4
```

---

## 2. **`while` Loop**
The `while` loop executes a block of code as long as the condition is true.

### Syntax:
```javascript
while (condition) {
    // Code to execute
}
```

### Example:
```javascript
let count = 0;
while (count < 5) {
    console.log("Count:", count);
    count++;
}
// Output: 0, 1, 2, 3, 4
```

---

## 3. **`do...while` Loop**
The `do...while` loop executes the code block **once**, and then repeats it as long as the condition is true.

### Syntax:
```javascript
do {
    // Code to execute
} while (condition);
```

### Example:
```javascript
let count = 0;
do {
    console.log("Count:", count);
    count++;
} while (count < 5);
// Output: 0, 1, 2, 3, 4
```

---

## 4. **`for...in` Loop**
The `for...in` loop is used to iterate over the properties of an object.

### Syntax:
```javascript
for (key in object) {
    // Code to execute
}
```

### Example:
```javascript
const person = { name: "John", age: 30, city: "New York" };
for (let key in person) {
    console.log(key + ":", person[key]);
}
// Output:
// name: John
// age: 30
// city: New York
```

---

## 5. **`for...of` Loop**
The `for...of` loop is used to iterate over iterable objects like arrays, strings, or maps.

### Syntax:
```javascript
for (variable of iterable) {
    // Code to execute
}
```

### Example:
```javascript
const fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
    console.log(fruit);
}
// Output:
// apple
// banana
// cherry
```

---

## 6. **`break` Statement**
The `break` statement is used to exit a loop prematurely.

### Example:
```javascript
for (let i = 0; i < 10; i++) {
    if (i === 5) break;
    console.log(i);
}
// Output: 0, 1, 2, 3, 4
```

---

## 7. **`continue` Statement**
The `continue` statement skips the current iteration and proceeds to the next iteration.

### Example:
```javascript
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) continue;
    console.log(i);
}
// Output: 1, 3, 5, 7, 9
```

---

## 8. **`forEach` Method**
The `forEach` method is used to execute a function for each element in an array.

### Syntax:
```javascript
array.forEach(callbackFunction);
```

### Example:
```javascript
const numbers = [1, 2, 3, 4];
numbers.forEach((num) => {
    console.log(num);
});
// Output: 1, 2, 3, 4
```

---

## Summary of Loops

| Loop Type       | Use Case                                       |
|------------------|-----------------------------------------------|
| `for`           | Known number of iterations                    |
| `while`         | Repeated execution while condition is true     |
| `do...while`    | Executes at least once, then checks condition  |
| `for...in`      | Iterates over object properties                |
| `for...of`      | Iterates over iterable objects                 |
| `forEach`       | Iterates over array elements using a callback  |

### Choosing the Right Loop
- Use `for` when you need a counter.
- Use `while` for conditions where iterations are not predetermined.
- Use `for...in` for objects and `for...of` for arrays and other iterable objects.

---
# Functions :- Block of code designed to perform a specefic task.

```
function Sum(x,y){
    return x+y;
}
console.log(Sun(3,7));
```
**NOTE** Get a best practice of using return instead of console.logging everytime

`argument keyword` 
In JavaScript, arguments are the actual values passed to a function when it is called, distinct from parameters, which are the names defined in the function declaration. 

# Here are the key points:
**Definition:** Arguments are the values supplied during a function call, e.g., in example(arg1, arg2), arg1 and arg2 are arguments.
**Accessing Arguments:** Inside a function, you can access all arguments using the arguments object, which is an array-like object containing all passed arguments (available only in non-arrow functions).

---

# Arrow Functions in JavaScript

Arrow functions are a concise way to write function expressions in JavaScript, introduced in ES6. They provide a shorter syntax for defining functions while also altering the behavior of the `this` keyword.

## Syntax

Arrow functions can be defined using the following syntax:

```javascript
const functionName = (parameters) => { 
    // function body 
};
```

For a single expression, you can omit the curly braces and the `return` keyword:

```javascript
const functionName = (parameters) => expression;
```

**Note**
You cannot use arguments inside a arrow functions. In order to tackle the problem it is recommended to use spread operator

## Key Features

1. **Shorter Syntax**: Arrow functions eliminate the need for the `function` keyword, making them more concise.
   
2. **Implicit Return**: If the body consists of a single expression, it automatically returns that value without needing the `return` statement or curly braces:

   ```javascript
   const add = (x, y) => x + y; // Implicit return
   ```

3. **Single Parameter Omission**: If there is only one parameter, parentheses can be omitted:

   ```javascript
   const square = x => x * x; // No parentheses needed
   ```

4. **No Parameters**: For functions without parameters, use empty parentheses:

   ```javascript
   const greet = () => "Hello World!";
   ```

## Function Body

Arrow functions can have either a concise body or a block body:

- **Concise Body**: Returns an expression directly.
  
  ```javascript
  const multiply = (a, b) => a * b;
  ```

- **Block Body**: Requires curly braces and a `return` statement if you want to return a value.

  ```javascript
  const multiply = (a, b) => {
      let result = a * b;
      return result;
  };
  ```

## Handling `this`

One of the most significant differences between arrow functions and traditional functions is how they handle the `this` keyword:

- **Lexical Scoping of `this`**: Arrow functions do not have their own `this` context; they inherit `this` from the parent scope where they were defined. This makes them particularly useful in scenarios like callbacks or methods that require access to the surrounding context.

  ```javascript
  const obj = {
      count: 10,
      increment: function() {
          setTimeout(() => {
              this.count++;
              console.log(this.count); // Correctly logs 11
          }, 1000);
      }
  };

  obj.increment();
  ```

## Limitations

1. **Not Suitable for Methods**: Arrow functions should not be used as methods in objects because they do not bind their own `this`.

   ```javascript
   const person = {
       name: 'Alice',
       greet: () => {
           console.log(`Hello, ${this.name}`); // 'this' does not refer to 'person'
       }
   };
   person.greet(); // Logs "Hello, undefined"
   ```

2. **Cannot be Used as Constructors**: Arrow functions cannot be used with the `new` keyword.

3. **No Arguments Object**: Arrow functions do not have their own `arguments` object. To access arguments in an arrow function, you must use rest parameters.

## Examples

- **Basic Example**:

    ```javascript
    const add = (a, b) => a + b;
    console.log(add(5, 3)); // Output: 8
    ```

- **With Multiple Statements**:

    ```javascript
    const calculate = (a, b) => {
        let sum = a + b;
        let product = a * b;
        return { sum, product };
    };
    console.log(calculate(5, 3)); // Output: { sum: 8, product: 15 }
    ```

- **Using with Array Methods**:

    ```javascript
    const numbers = [1, 2, 3];
    const doubled = numbers.map(num => num * 2);
    console.log(doubled); // Output: [2, 4, 6]
    ```

## Conclusion

Arrow functions offer a more succinct way to write function expressions and improve code readability. Their unique handling of `this` makes them particularly useful in many JavaScript scenarios. However, understanding their limitations is crucial for effective use in various contexts.

`Argument keyword` 

In JavaScript, the arguments keyword is an array-like object that is available inside all regular (non-arrow) functions. It provides access to all arguments passed to a function, regardless of the number of parameters defined for the function.

You cannot use argument keyword directly into the Arrow function we use the Spread operator for it.
---

**NOTE** When using the **`this` keyword** inside a **normal function**, it refers to the **object** that calls the function. However, when **`this`** is used inside an **arrow function**, it refers to the **`this` value of the surrounding scope** (lexical scope), which could be the **global object** or the enclosing function's `this`.

## Higher-Order Functions in JavaScript

A **higher-order function (HOF)** is a function that either accepts other functions as arguments or returns a function as its result. This characteristic allows for more dynamic and flexible programming patterns.

### Characteristics of Higher-Order Functions

1. **Accepts Functions as Arguments**: This enables the HOF to operate on the passed-in functions, allowing for customizable behavior.
2. **Returns a Function**: This capability allows the creation of new functions based on specific conditions or parameters.

### Examples of Higher-Order Functions

- **Array Methods**: Common higher-order functions in JavaScript include `map()`, `filter()`, and `reduce()`. For instance:
  - `map()` creates a new array by applying a callback function to each element of the original array.
  - `filter()` returns a new array containing elements that meet certain criteria defined by a callback function.
  - `reduce()` processes each element of an array to produce a single cumulative value.

```javascript
const numbers = [1, 2, 3, 4, 5];

// Using map to square each number
const squares = numbers.map(num => num * num); // [1, 4, 9, 16, 25]

// Using filter to get even numbers
const evens = numbers.filter(num => num % 2 === 0); // [2, 4]

// Using reduce to sum all numbers
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0); // 15
```

## Callback Functions

A **callback function** is a function passed as an argument to another function. The receiving function can invoke this callback at an appropriate time, typically after completing an operation.

### Characteristics of Callback Functions

- **Asynchronous Programming**: Callbacks are often used in asynchronous programming contexts, such as handling API responses or events.
- **Flexibility**: They allow different behaviors to be defined dynamically based on the context in which they are called.

### Example of a Callback Function

```javascript
function fetchData(callback) {
    setTimeout(() => {
        const data = 'Data received';
        callback(data);
    }, 1000);
}

fetchData((data) => {
    console.log(data); // Output: Data received
});
```

## Arrays in JavaScript

An **array** is defined as a collection of values of the same data type. In JavaScript, arrays are dynamic and can hold various types of data.

### Important Note on Arrays

When an array is declared with the `const` keyword, you cannot reassign the variable itself. However, you can modify its elements:

```javascript
const fruits = ['apple', 'banana', 'cherry'];
fruits[0] = 'orange'; // This is allowed
// fruits = ['grape', 'melon']; // This will throw an error
```

## Higher-Order Functions in Arrays

### `forEach`

The `forEach` method is used to execute a provided function once for each element in an array. It simplifies iteration by allowing developers to focus on the logic applied to each element without manually managing loop indices.

```javascript
const colors = ['red', 'green', 'blue'];
colors.forEach(color => {
    console.log(color); // Outputs each color
});
```

## Document Object Model (DOM)

The **Document Object Model (DOM)** is a programming interface that allows scripts to interact with and manipulate web documents, primarily HTML and XML. It represents the structure of a document hierarchically, enabling dynamic access and modification of content and styles.

### The Document Object

The **document object** serves as the entry point for accessing all elements within an HTML document:

- **Hierarchy**: The document object is a child of the window object and represents the entire HTML document loaded in that window.
- **Accessing Elements**:
  - `document.title` retrieves the title of the document.
  - `document.body` accesses the body element.
  - `document.getElementById('id')` retrieves specific elements by their ID.
  

```javascript
console.log(document.title); // Outputs the title of the document
document.body.style.backgroundColor = 'lightblue'; // Changes background color
```

# Query Selector
The querySelector method in JavaScript is a powerful tool for selecting elements from the Document Object Model (DOM) using CSS selectors. It allows developers to easily access and manipulate HTML elements based on their attributes, classes, IDs, and other selectors.

**Overview of querySelector**
Purpose: The querySelector method returns the first element within the document that matches a specified CSS selector. If no matching element is found, it returns null.
Syntax: The method is called on the document object and takes a single string parameter representing the CSS selector.

```
document.querySelector(selector);
```

```
const head = document.querySelector("head")
        console.log(head.innerHTML)
```
this piece of code will console.log the innerHTML code written inside the head tag and the output can be as follows : 
```
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hemlo babies</title>
```

# Difference between querySelector & QuerySelectorAll

Let us suppose there are divs inside a div. Always remember ki jo humara query selecetor hota hai woh line by line cheezo ko print karta hai matlab it dosent matter ki kaun sa div kiske andar hai. Agar sequence mei chota div is first before the bada div than chota div ki values will be manipulated

# Differences Between `querySelector` and `querySelectorAll`

| Feature                     | `querySelector`                          | `querySelectorAll`                       |
|-----------------------------|-----------------------------------------|------------------------------------------|
| **Return Type**             | Returns the first matching element or `null` if no match is found. | Returns a `NodeList` of all matching elements. An empty `NodeList` is returned if no matches are found. |
| **Usage**                   | Use when you need a single element.   | Use when you need to retrieve multiple elements. |
| **Performance**             | More efficient for selecting a single element, as it stops searching after finding the first match. | Searches the entire document for all matches, which may incur slight performance overhead. |
| **Accessing Elements**      | Directly returns the element for immediate manipulation (e.g., changing styles or attributes). | Requires indexing into the `NodeList` to access individual elements (e.g., `nodeList[0]`). |
| **Live vs Static**          | Returns a live reference to the matched element. | Returns a static list of elements that does not update when the DOM changes after selection. |


**Note**
for the id, agar do id ya usse jyada hai toh humesha yaad rakhna ki priority uss id ko di jaayegi jiski priority pehle hogi.
And the id is using `#`
For class we use `.`

```
<span id='Username'>Harsh vishwakarma</span>
    const Username = document.querySelector("#Username");
    Username.innertext = "Rajkumar vishwakarma"
```

```
<script>
        const el = document.getElementById("Username");
        console.log(el);
        el.classList.add("red","underline")
        console.log(el.classList)
        console.log(el.parentElement)
    </script>
```
There is another way of getting elements form the class and that can be done using 
```
document.getElementsByClassName

```


# EVENT LISTENER
An event listener in JavaScript is a function that waits for a specific event to occur on a particular element in the DOM (Document Object Model). When the event occurs, the event listener executes the specified function, allowing developers to create interactive web applications.


# Splice in Javascript

The `splice()` method in JavaScript is used to **change the contents of an array** by removing, replacing, or adding elements.

---

## Syntax

```js
array.splice(startIndex, deleteCount, item1, item2, ...)
```


# Hoisting in javascript

Sure, Harsh — let’s take a **deeper and clearer look** into **Hoisting**, specifically focusing on how it works in JavaScript and **why** it behaves differently for variables and functions.

---

## **What is Hoisting – In Depth**

Hoisting is a **JavaScript engine behavior** where:

* **Function declarations**
* **Variable declarations (`var`, `let`, `const`)**

...are **moved (hoisted)** to the **top of their scope** during the **compilation phase**, before the code starts executing.

---

## **Important Rule**

Only the **declarations** are hoisted — not the actual values (assignments).

### Let's break that into two categories:

---

### **Variable Hoisting**

#### a. Using `var`

```javascript
console.log(user); // undefined
var user = "Harsh";
```

**What happens internally:**

```javascript
var user; // JS hoists the declaration
console.log(user); // undefined (no value yet)
user = "Harsh"; // Assignment stays in place
```

> JS knows that `user` exists, so it doesn’t crash. But since the **value isn't assigned yet**, it shows `undefined`.

---

#### b. Using `let` or `const`

```javascript
console.log(user); // ReferenceError
let user = "Harsh";
```

Why error?

Because:

* The variable is **hoisted**, but it lives in the **Temporal Dead Zone (TDZ)** — a time between the hoisting and the actual declaration where the variable **exists but is not accessible**.

So the engine knows `user` is there, but doesn't let you touch it until the actual `let user = "Harsh"` line is reached.

---

### 2. **Function Hoisting**

#### a. Function Declaration (hoisted fully)

```javascript
startServer(); // ✅ Works

function startServer() {
  console.log("Server started");
}
```

This works because **the entire function is hoisted** — both its name **and** its **body**.

---

#### b. Function Expression (not fully hoisted)

```javascript
startServer(); // ❌ Error: startServer is not a function

var startServer = function () {
  console.log("Server started");
};
```

Here’s what happens internally:

```javascript
var startServer; // Only the variable name is hoisted
startServer(); // Error – it's still undefined at this point
startServer = function() { ... };
```

So **only the variable declaration** `var startServer` is hoisted — the actual function value is assigned **later**, meaning you can’t use it early.

> This is **why hoisting can be dangerous with `var` + function expressions**.

---

## **Visual Summary**

| Feature              | Hoisted?  | Usable Before Declaration? | Notes                     |
| -------------------- | --------- | -------------------------- | ------------------------- |
| `var`                | Yes       | Yes (value is `undefined`) | Declared, not initialized |
| `let` / `const`      | Yes       | No (ReferenceError)        | TDZ applies               |
| Function Declaration | Yes       | Yes                        | Fully hoisted             |
| Function Expression  | Partially | No (only var is hoisted)   | Treated like a variable   |

---

## **Backend Example to Understand It Clearly**

Imagine this code is in your `server.js` file in a Node.js app:

```javascript
startServer(); // Will this run?

function startServer() {
  console.log("Server is running...");
}
```

Yes, it works fine. Because `startServer()` is a **function declaration**, it is fully hoisted.

But change it to a **function expression**:

```javascript
startServer(); // Will this run?

var startServer = function () {
  console.log("Server is running...");
};
```

This fails because:

* `var startServer` is hoisted (so the variable name exists),
* But the actual function is assigned **after**, so `startServer` is `undefined` when it is called.

---

## When Does This Matter in Backend Development?

In real Node.js projects, this is important for:

* Calling setup code early (e.g., starting servers or connecting databases).
* Organizing helper functions and middleware correctly.
* Preventing confusing bugs when mixing `var`, `let`, and function expressions.

---


# Closures – Deep Dive**

## **Concept**

A **closure** in JavaScript is created when:

* A function is **defined inside another function**, and
* The inner function **remembers variables** from the outer function **even after the outer function has finished running**.

---

## **How It Works**

JavaScript uses **lexical scoping**, which means:

* A function **remembers where it was defined**.
* It **closes over** (or “captures”) the variables in its **outer scope**.
* These variables stay **alive in memory** because the inner function still uses them.

---

## **Real-World Analogy**

Imagine you work in a company. Your manager gives you (an assistant) access to a confidential file and then goes on vacation. Even though the manager (outer function) is gone, you (inner function) still **remember and use** the confidential info. That memory is a **closure**.

---

## **Code Example: Basic Closure**

```javascript
function outerFunction() {
  let secret = "I am private";

  function innerFunction() {
    console.log(secret); // Can still access 'secret'
  }

  return innerFunction;
}

const closureFn = outerFunction();
closureFn(); // Output: I am private
```

### Breakdown:

* `outerFunction` defines `secret`.
* `innerFunction` uses `secret` and is returned.
* Even after `outerFunction()` is done, `closureFn` still has access to `secret`.

---

## **What Exactly Is “Closed Over”?**

The inner function "remembers":

* All variables in the outer scope that it used.
* Even if that outer scope is no longer on the stack.

This is called the **closure environment**.

---

## **Use Cases in Real Projects**

### 1. **Data Encapsulation / Private Variables**

Closures let you keep data **hidden from the outside**.

```javascript
function createUser(username) {
  let loginCount = 0;

  return {
    getUsername: () => username,
    login: () => ++loginCount,
    getLoginCount: () => loginCount
  };
}

const user = createUser("harsh123");
user.login(); 
user.login();
console.log(user.getUsername());     // harsh123
console.log(user.getLoginCount());  // 2
```

Here, `username` and `loginCount` are **private**. Only the returned functions can access them.

---

### 2. **Factory Functions**

You can create custom functions with pre-filled variables.

```javascript
function multiplyBy(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplyBy(2);
console.log(double(5)); // 10
```

Each function remembers its own `factor`.

---

### 3. **Event Handlers / Delayed Execution**

Closures are useful when logic needs to run **later**, but still remember earlier values.

```javascript
function delayedLog(message) {
  setTimeout(() => {
    console.log("Delayed:", message);
  }, 1000);
}

delayedLog("Hello from closure");
```

Even though `delayedLog` has finished, the inner function still remembers `message`.

---

## **Common Pitfall: Closures Inside Loops**

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i); // Will log 3, 3, 3
  }, 1000);
}
```

This happens because `var` is function-scoped. All callbacks share the **same i**.

### Fix 1: Use `let`

```javascript
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i); // Logs 0, 1, 2
  }, 1000);
}
```

### Fix 2: Use closure

```javascript
for (var i = 0; i < 3; i++) {
  (function(index) {
    setTimeout(() => {
      console.log(index);
    }, 1000);
  })(i);
}
```

---

## **Backend Example: In-Memory Rate Limiter**

```javascript
function rateLimiter(limit) {
  let count = 0;

  return function (req, res, next) {
    if (count >= limit) {
      res.status(429).send("Rate limit exceeded");
    } else {
      count++;
      next();
    }
  };
}

// In Express app:
app.use(rateLimiter(100));
```

* `rateLimiter(100)` returns a function that keeps track of `count` privately using closure.
* No global state needed.
* Each limiter instance maintains its own count.

---

## **Backend Example: Function Generator**

```javascript
function queryBuilder(tableName) {
  return function (id) {
    return `SELECT * FROM ${tableName} WHERE id = ${id}`;
  };
}

const userQuery = queryBuilder("users");
console.log(userQuery(5)); // SELECT * FROM users WHERE id = 5
```

* The returned function remembers `tableName` through closure.
* Useful for building modular data access layers.

---

## **Summary Table**

| Feature           | Explanation                                               |
| ----------------- | --------------------------------------------------------- |
| What it is        | Inner function remembers variables from outer function    |
| Created when      | Function defined inside another function                  |
| Lasts until       | Returned inner function is no longer used                 |
| Used for          | Private data, factories, delayed logic, async callbacks   |
| Common in backend | Middleware, rate limiting, config-based function creation |

---
Of course, Harsh. Let’s explain **closures** and **lexical scope** (also called a **lexical environment**) in a **simple, beginner-friendly** way without any fluff.

---

## 1. **Lexical Scope (or Lexical Environment)**

### What it means:

**"Lexical"** means **based on where something is written in your code**.

In JavaScript, functions are able to **see variables that are written outside of them**, but **not the other way around**.

---

### Example:

```js
function outer() {
  let message = "Hello from outer";

  function inner() {
    console.log(message); // inner can see message
  }

  inner();
}

outer();
```

### What happens:

* The `inner()` function is **written inside** `outer()`
* So it can **access everything** in `outer()` (like `message`)
* This is because of **lexical scope**

---

### Flip it:

```js
function inner() {
  console.log(message); // error: message is not defined
}

function outer() {
  let message = "Hello";
  inner();
}

outer();
```

Now `inner()` cannot see `message` — because `message` is defined in `outer()`, and `inner()` is outside.

**Functions can look outward, but not inward.**

---

## 2. **Closure**

### What is a closure?

A **closure** is when a function **remembers variables from the place where it was created**, even **after** that outer function has finished running.

In short:

> A closure allows a function to keep using variables from its outer function **even after** that outer function is done.

---

### Example:

```js
function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log("Count is", count);
  };
}

const counter = outer(); // outer runs, and returns inner

counter(); // Count is 1
counter(); // Count is 2
counter(); // Count is 3
```

### What happens:

* `outer()` runs and creates `count`
* Then it returns `inner()`
* Even though `outer()` is finished, `inner()` still **remembers** the variable `count`
* That's a **closure**

---

### Why is this useful?

Closures let you:

* Keep **private data** safe (like `count`)
* Create things like counters, banks, or game scores where the data should persist but not be visible to others

---

### Real-world example:

Imagine a box with a secret number inside (like `count`). You give someone a button (the inner function) that **adds 1 to that secret** every time they press it. But they **can’t see or change the number directly** — only use the button.

That’s a closure.

---

## Summary

| Concept       | What It Means                                                 | Example Result                             |
| ------------- | ------------------------------------------------------------- | ------------------------------------------ |
| Lexical Scope | Functions can access variables where they are **written**     | Inner function can see outer variables     |
| Closure       | A function **remembers** outer variables even after it's gone | Counter that keeps counting after creation |

---

Absolutely, Harsh. Below are **GitHub-ready, clean, and detailed notes** on:

* **Arrow Functions**
* **`this` keyword**
* **DOM (Document Object Model)**

All written with clear explanations and real code examples — suitable for studying or documenting in a GitHub repo.

---

# JavaScript: Arrow Functions

## 1. What Are Arrow Functions?

Arrow functions are a **shorter way to write functions** in JavaScript. They were introduced in ES6 (2015).

### Basic Syntax

```js
// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => {
  return a + b;
};
```

### One-liner (Implicit Return)

```js
const add = (a, b) => a + b;
```

If the body is just a single expression, the `return` is implicit — no need to write it.

---

## 2. Differences from Regular Functions

### a) Syntax

Arrow functions are more concise, especially useful for inline functions and callbacks.

### b) No Own `this`

Arrow functions **do not have their own `this`**. They inherit `this` from the surrounding (lexical) context.

This is a major difference and is crucial to understand — see the next section on `this`.

---

## 3. Examples

### Example 1: Regular Arrow Function

```js
const greet = name => `Hello, ${name}`;
console.log(greet("Harsh")); // Hello, Harsh
```

### Example 2: Used in Array Methods

```js
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8]
```

---

# JavaScript: `this` Keyword

## 1. What is `this`?

In JavaScript, `this` refers to the **object that is currently executing the function**.

Its value depends on **how the function is called**, not where it is defined.

---

## 2. `this` in Different Contexts

### a) In a Regular Function Inside an Object

```js
const person = {
  name: "Harsh",
  greet: function () {
    console.log(this.name);
  }
};

person.greet(); // Output: Harsh
```

Here, `this` refers to the `person` object because the function is called with `person.greet()`.

---

### b) In an Arrow Function

```js
const person = {
  name: "Harsh",
  greet: () => {
    console.log(this.name);
  }
};

person.greet(); // Output: undefined (in browsers)
```

Arrow functions **do not get their own `this`**. They use `this` from the **outer lexical scope**, which in this case is the global scope — and `this.name` is undefined there.

---

### c) In Global Scope

```js
console.log(this); // In browser: Window object
```

---

### d) In Event Listeners

```js
const button = document.getElementById("btn");

button.addEventListener("click", function () {
  console.log(this); // Refers to the button
});
```

---

## 3. Summary of `this` Behavior

| Context                       | What `this` refers to                     |
| ----------------------------- | ----------------------------------------- |
| Regular function in object    | The object that called the function       |
| Arrow function                | The surrounding (outer) lexical `this`    |
| Global scope (browser)        | `window` object                           |
| In event listener (non-arrow) | The HTML element that triggered the event |

---

# JavaScript: DOM (Document Object Model)

## 1. What is the DOM?

DOM stands for **Document Object Model**.
It is the **programmatic representation of a web page**.
Using JavaScript, you can interact with and change the page content, structure, and style via the DOM.

---

## 2. Accessing Elements

### By ID

```js
const element = document.getElementById("myId");
```

### By Class Name

```js
const items = document.getElementsByClassName("myClass");
```

### By Tag Name

```js
const divs = document.getElementsByTagName("div");
```

### Using Query Selectors

```js
document.querySelector(".myClass");
document.querySelectorAll("ul li");
```

---

## 3. Modifying Elements

### Change Text

```js
document.getElementById("message").textContent = "Hello!";
```

### Change HTML Content

```js
element.innerHTML = "<strong>Bold text</strong>";
```

### Change Style

```js
element.style.color = "red";
element.style.backgroundColor = "yellow";
```

---

## 4. Adding Event Listeners

### Example: Button Click

```html
<button id="clickBtn">Click Me</button>
<p id="output"></p>
```

```js
document.getElementById("clickBtn").addEventListener("click", function () {
  document.getElementById("output").textContent = "Button was clicked!";
});
```

---

## 5. Creating and Adding Elements

```js
const newElement = document.createElement("p");
newElement.textContent = "This is new!";
document.body.appendChild(newElement);
```

---

## 6. Summary

| Task                | Code Example                            |
| ------------------- | --------------------------------------- |
| Select by ID        | `getElementById("id")`                  |
| Select by class/tag | `getElementsByClassName("class")`       |
| Add event listener  | `element.addEventListener("click", fn)` |
| Change text         | `element.textContent = "new text"`      |
| Add element to page | `parent.appendChild(newElement)`        |

---

## Final Thoughts

* Use **arrow functions** for short, simple logic (especially in array methods)
* Use **regular functions** when you need `this` to refer to the object
* Use the **DOM** to make your web pages interactive
















