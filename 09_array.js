//array-> store multiple element of different type 
const myarr=[0,1,2,3,4];
const heroes=["a","b","c"];
const myhero=new Array(1,2,3,4,5);


//element acess by indexing myarr[0]->first element of array 

/*whenever we do copy operation in array it create shallow copy
shallow copy->shallow copy of an object is a copy whose properties
share the same reference 

***********Array Method-1**************

myarr.push(6). -> pushing 6 in array
myarr.pop(). ->removing last element
myarr.unshift(9).  -> adding in front of array
myarr.shift() ->removing front element of array
myarr.includes(9) ->checking 9 in array   and it give true or false
myarr.indexof(3) -> giving index of element 3 in array. if value not exits give -1
const newarr = myarr.join().  ->joining 
            type of newarr is string 
            output ->. myarr. [0,1,2,3,4]
                       newarr. 0,1,2,3,4

slice or splice
slice is taking subarr  like myarr.slice(start,end(not include))
        ->original myarr is same 
splice is also taking subarr 
        ->but the portion which we splice is remove form original array 
        ->splice manuplciate the array

*/

//***********Array Method-2***************


const marvel = ["thor","ironman","spiderman"];
const dc = ["superman","flash","batman"];

marvel.push(dc); 
console.log(marvel); /*
in doing this dc array treat as one elment and 
by pushing it array in array

and we want to access dc array element by marvel array
marvel[3][1]; -> means marvel ke 3rd new element(array) ke 1st index element accessing 

*/

const allnewhero = marvel.concat(dc) ; 
// giving all new array with having all element of both array

//spread operator
const allnew = [...marvel,...dc,];
//doing same as concat but difference is doing with many array at the same time

/* if havine array in array in looping 
then for getting in singal array
use     .flat(depth)
            depth->infinity means automatically all array in one array 
            numeric value -> means like 1 then only concat one array 
                                        2 then do 2 array from main array 

*/
console.log(Array.isArray("hitesh")); //return false 
console.log(Array.from("kartik")); // give array of characer in singlw quotes
console.log(Array.from({name:"kartik"})); //give empty array
        //  ->interesting for interview
let score1 = 300;
let score2 = 400;
let score3 = 500;
console.log(Array.of(score1,score2,score3));
    // give[300,400,500]

