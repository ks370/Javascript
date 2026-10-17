# JAVASCRIPT ASYNC FUNDAMENTALS
## Event Loop, Call Stack, Web APIs and Callback Queues

### 1. ORIGINAL DIAGRAM — EXPLANATION

Your handwritten diagram shows how JavaScript handles synchronous and asynchronous operations using the JavaScript Engine, Call Stack, Web APIs, Callback Queues, and Event Loop.

### 2. CLEAN DIAGRAM (TEXT FORMAT)

```text
              JAVASCRIPT ENGINE
        +---------------------------+
        |                           |
        |       CALL STACK          |
        |   +-------------------+   |
        |   | Function calls    |   |
        |   |                   |   |
        |   +-------------------+   |
        +-------------+-------------+
                      |
                      | Asynchronous operations
                      v
        +---------------------------+
        |          WEB APIs         |
        |                           |
        |  setTimeout()             |
        |  DOM Events               |
        |  fetch()                  |
        +-------------+-------------+
                      |
                      | Callback becomes ready
                      v
        +---------------------------+
        |       CALLBACK QUEUES     |
        |                           |
        |  Microtask Queue          |
        |  - Promise callbacks      |
        |  - await continuations    |
        |                           |
        |  Task Queue               |
        |  - Timer callbacks        |
        |  - DOM event callbacks    |
        +-------------+-------------+
                      |
                      v
        +---------------------------+
        |         EVENT LOOP        |
        | Checks execution order    |
        | and coordinates callbacks |
        +-------------+-------------+
                      |
                      v
             CALL STACK AVAILABLE
                      |
                      v
             CALLBACK EXECUTES
```

Note: This is a simplified conceptual diagram. The Event Loop coordinates execution; it does not execute callbacks itself.

---

### 3. JAVASCRIPT ENGINE

The JavaScript Engine executes JavaScript code.

It contains the Call Stack, which keeps track of function calls currently being executed.

### 4. CALL STACK

The Call Stack executes functions one by one.

It follows LIFO:

LIFO = Last In, First Out.

Example:

```javascript
function first() {
    second();
}

function second() {
    console.log("Hello");
}

first();
```

Output:

```text
Hello
```

Explanation:
1. `first()` is called.
2. `second()` is called inside `first()`.
3. `second()` executes first and prints Hello.
4. The functions finish and leave the Call Stack.

### 5. WEB APIs

Web APIs are browser-provided features that support operations such as timers, DOM events, and network requests.

Examples:
- `setTimeout()` — schedules a callback after a delay.
- DOM events — handle clicks and keyboard input.
- `fetch()` — makes network requests.

These operations can progress without blocking the main JavaScript execution.

### 6. CALLBACK

A callback is a function passed to another function to be called later.

Example:

```javascript
setTimeout(() => {
    console.log("Hello");
}, 1000);
```

Output after approximately one second:

```text
Hello
```

The timer schedules the callback. The callback runs when it is ready and JavaScript can execute it.

### 7. CALLBACK QUEUE / TASK QUEUE

The Task Queue holds eligible callbacks waiting to execute.

Examples:
- Timer callbacks
- Many DOM event callbacks

A callback generally waits until the Call Stack is available.

### 8. MICROTASK QUEUE

The Microtask Queue holds Promise callbacks and other microtasks, including continuations after `await`.

Example:

```javascript
console.log("A");

Promise.resolve().then(() => {
    console.log("B");
});

console.log("C");
```

Output:

```text
A
C
B
```

Explanation:
- A prints first.
- The Promise callback is queued.
- C prints next.
- B prints when the synchronous code has finished.

When both microtasks and timer tasks are ready, microtasks generally run before the next timer task.

### 9. EVENT LOOP

The Event Loop coordinates synchronous code and asynchronous callbacks.

Its basic working:
1. JavaScript executes synchronous code on the Call Stack.
2. Browser APIs handle supported asynchronous operations.
3. When an operation is ready, its callback or continuation is queued as appropriate.
4. The Event Loop coordinates when queued work can execute.
5. The callback runs on the Call Stack when the required execution conditions are met.

### 10. EXAMPLE: setTimeout()

Code:

```javascript
console.log("A");

setTimeout(() => {
    console.log("B");
}, 2000);

console.log("C");
```

Output:

```text
A
C
B
```

Explanation:
1. A prints immediately.
2. The timer is scheduled for approximately two seconds.
3. C prints without waiting for the timer.
4. When the timer callback is ready and the Call Stack is available, B prints.

Important: `setTimeout()` specifies a minimum delay, not an exact execution time.

### 11. ASYNC AND AWAIT

The `async` keyword makes a function return a Promise.

The `await` keyword pauses that async function until the awaited Promise settles. Other JavaScript code can continue executing.

Example:

```javascript
async function example() {
    console.log("Start");

    await new Promise(resolve => {
        setTimeout(resolve, 2000);
    });

    console.log("End");
}

example();
console.log("Outside");
```

Output:

```text
Start
Outside
End
```

Explanation:
- Start prints first.
- The async function pauses at `await`.
- Outside prints while the async function is paused.
- End prints after the awaited Promise settles.

### 12. QUICK REVISION

Call Stack:
Executes JavaScript functions.

Web APIs:
Support timers, DOM events, and network operations.

Callback:
A function that can be called later.

Task Queue:
Holds eligible task callbacks.

Microtask Queue:
Holds Promise callbacks and other microtasks.

Event Loop:
Coordinates queued work with the Call Stack.

Async:
Makes a function return a Promise.

Await:
Pauses the current async function until the awaited value settles.

### 13. IMPORTANT RULES

1. Synchronous code runs line by line.
2. The Call Stack follows LIFO.
3. Asynchronous operations do not always block JavaScript execution.
4. `setTimeout(callback, 0)` does not mean the callback runs immediately.
5. Promise microtasks generally run before the next timer task when both are ready.
6. `await` pauses the async function, not the entire program.
7. The Event Loop coordinates callbacks; callbacks themselves execute on the Call Stack.

### LEARNING ORDER

Callbacks → Promises → `.then()` and `.catch()` → `async/await` → Event Loop → `fetch()` API.
