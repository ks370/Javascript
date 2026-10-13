const mycoding=["c++","python","javascript","ruby"]
const value=mycoding.forEach((item)=>{
   // console.log(item);
})
//console.log(value);  // giving undefined

//foreach doesn't return 
// filter and map  return values



const mynum=[1,2,3,4,5,6,7,8,9,10]
const newnum= mynum.filter((num)=>num>4)
//console.log(newnum) // giving 5,6,7,8,9,10
// if   const newnum= mynum.filter((num)=>{
//         return num>4. using{} use retunr in filter
//       })

 
const number=[1,2,3,4,5,6,7,8,9,10]
const newnumber=number.map((num)=>num+10)
//console.log(newnumber)
/*. if using{}
const newnumber=number.map((num)=>{
    return num+10
    })

*/
//using multiple maps
const newnewnumber= number.map((num)=>num=num*10).map((num)=>num=num+1)
//console.log(newnewnumber)



//. REDUCE

// n.reduce(function(accumaltor,current value ){},intialcurrentvalue)

const n=[1,2,3]
const newn=n.reduce(function(acc,currentval){
    //console.log(`acc:${acc} and cuurent value :${currentval}`)
    return acc+currentval
},0)
//console.log(newn)


//reduce in arrow funtion
const arrornum=n.reduce((acc,currentval)=> acc+currentval,0)
//console.log(arrownum)


//object in reduce
const shoopingcart=[
    {
        itemname:"python course",
        price:900
    },
        {
        itemname:"java  course",
        price:1100
    },
    {
        itemname:"Data science course",
        price:1500
    }

]
const totalprice=shoopingcart.reduce((acc,item)=>acc+item.price,0)
console.log(totalprice)