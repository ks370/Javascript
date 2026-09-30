const score = 399;
console.log(score);

const balance= new Number(100);
console.log(balance);


console.log(balance.toString().length);  //convert numebr to strig and count digit 
console.log(balance.toFixed(1)); // it giving 1 digit after decimal



const othernumber=23.324;
console.log(othernumber.toPrecision(3));
/// used to precised the value 3 means getiing 3 digt before decimal



const hundred=1000000;
console.log(hundred.toLocaleString('en-IN'));
// giving commas between zeroes acc to enlish indian system 
//-> output is 10,00,000
//if not using en-IN then 1,000,000

//********************* Maths ******************/

console.log(Math);
console.log(Math.abs(4)); // givng absolute value convert -ve to +ve
console.log(Math.round(4.55));
console.log(Math.ceil(4.3)); // choose 5 evne if 4.00002
console.log(Math.floor(4.1)) // choose 4 if 4.999999
// Math.min,Math.max
//Math.random() -> giving between 0 to 1 not 1
console.log(Math.floor(Math.random()*10)); // -> giving beteen 0 to 10 not 10 not in decimal 


