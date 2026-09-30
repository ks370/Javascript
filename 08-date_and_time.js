// ================================
// DATE & TIME IN JAVASCRIPT
// ================================


// 1. Current date and time
let now = new Date();
console.log(now);


// 2. Get year
console.log(now.getFullYear());


// 3. Get month
// Month starts from 0
// 0 = January, 11 = December
console.log(now.getMonth() + 1);


// 4. Get today's date (1-31)
console.log(now.getDate());


// 5. Get day of week
// 0 = Sunday, 1 = Monday ... 6 = Saturday
console.log(now.getDay());


// 6. Get current hour (0-23)
console.log(now.getHours());


// 7. Get current minutes
console.log(now.getMinutes());


// 8. Get current seconds
console.log(now.getSeconds());


// 9. Get milliseconds
console.log(now.getMilliseconds());


// 10. Create our own date
let birthday = new Date("2005-08-02");
console.log(birthday);


// 11. Get timestamp
// Milliseconds passed since 1 January 1970
console.log(Date.now());


// 12. Convert date into readable format
console.log(now.toLocaleDateString());
// Example: 30/9/2026

console.log(now.toLocaleTimeString());
// Example: 10:15:30 am

console.log(now.toLocaleString());
// Shows both date + time


// 13. Difference between two dates
let start = new Date("2026-09-01");
let end = new Date("2026-09-30");

let difference = end - start;

// Convert milliseconds into days
let days = difference / (1000 * 60 * 60 * 24);

console.log("Difference:", days, "days");


// 14. setTimeout()
// Runs function ONE TIME after given time

setTimeout(function () {
    console.log("Hello after 2 seconds");
}, 2000);


// 15. setInterval()
// Runs function REPEATEDLY after given interval

setInterval(function () {
    let currentTime = new Date();

    console.log(
        currentTime.getHours() +
        ":" +
        currentTime.getMinutes() +
        ":" +
        currentTime.getSeconds()
    );
}, 1000);