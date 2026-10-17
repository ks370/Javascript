JavaScript Async Fundamentals (Easy Notes)

1. SYNCHRONOUS JAVASCRIPT
Synchronous means code runs one line at a time. The next line waits for the previous line to finish.

Example:
console.log("First");
console.log("Second");
console.log("Third");

Output:
First
Second
Third


2. ASYNCHRONOUS JAVASCRIPT
Asynchronous JavaScript allows some tasks to happen in the background while other code continues running.

Examples:
- Fetching data from an API
- Waiting for a timer
- Getting data from a server

Example:
console.log("First");

setTimeout(() => {
    console.log("Second");
}, 2000);

console.log("Third");

Output:
First
Third
Second

Why?
setTimeout() schedules the callback to run after approximately 2 seconds. JavaScript continues executing the other code without waiting.


3. CALLBACKS
A callback is a function passed to another function to be called later.

Example:
setTimeout(() => {
    console.log("Hello");
}, 1000);


4. PROMISES
A Promise is an object representing the eventual success or failure of an asynchronous operation.

Example:
fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));


5. ASYNC/AWAIT
Async/await is a cleaner way to write code that uses Promises.

Example:
async function getUser() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
    );

    const data = await response.json();
    console.log(data);
}

getUser();


6. WHAT DOES ASYNC DO?
The async keyword makes a function return a Promise.

Example:
async function hello() {
    return "Hello";
}

hello().then(result => console.log(result));

Output:
Hello

Note:
An async function always returns a Promise. A returned value becomes the Promise's fulfillment value.


7. WHAT DOES AWAIT DO?
The await keyword waits for a Promise to settle before continuing the execution of that async function.

Example:
async function example() {
    console.log("Start");

    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log("End");
}

example();
console.log("Outside");

Output:
Start
Outside
End

Remember:
await pauses the async function, not the entire JavaScript program.


8. EVENT LOOP
The event loop coordinates synchronous code and asynchronous callbacks.

Main parts:
- Call Stack: Executes synchronous JavaScript.
- Microtask Queue: Holds Promise callbacks such as .then().
- Task Queue: Holds timer callbacks such as setTimeout().
- Event Loop: Coordinates queued callbacks when the call stack is available.

Important rule:
Promise callbacks (microtasks) generally run before timer callbacks (tasks) when both are ready.

Example:
console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => console.log("3"));

console.log("4");

Output:
1
4
3
2


9. QUICK DIFFERENCE: CALLBACK, PROMISE, ASYNC/AWAIT
- Callback: A function passed to another function to run later.
- Promise: Represents the future result of an asynchronous operation.
- Async/await: A readable way to work with Promises.


10. PRACTICE QUIZ
Q1. What does an async function return?
Answer: A Promise.

Q2. What does await do?
Answer: It pauses the async function until the Promise settles, while other code can continue.

Q3. Which usually runs first: a Promise callback or a setTimeout callback?
Answer: The Promise callback, if both are ready to run.


RECOMMENDED LEARNING ORDER
Callbacks -> Promises -> .then() and .catch() -> async/await -> Event loop -> fetch() API.












