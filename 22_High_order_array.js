//for of 

const arr=[1,2,3,4,5]
for (const num of arr) {
   // console.log(num)
}
//also for string
const name="kartik sharma"
for (const char of name) {
    //console.log(`each character is ${char}`)
}

// maps are non iteratorable
// taking and working on key value pair no duplicy


const map=new Map()
map.set("IN","India")
map.set("USA","United state of america")
//console.log(map) // on printing print like key value pair

for (const [key,value] of map) {
    //console.log(key,":-",value)
}

// object cannot iterator by for of loop


const myobject={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple '
}
for (const key in myobject) {
    //console.log(`${key} shortcut are of ${myobject[key]}`)
} //${myobject[key] -> giving value of keys



// foreach

const coding=["js","c++","rb","python"]
coding.forEach(function(ele){
   // console.log(ele)
})

coding.forEach( (ele,index,arr)=> {
   // console.log(ele,index,arr)
})
/* output     (ele) or (ele,index) or (ele,index,arr)
js 0 [ 'js', 'c++', 'rb', 'python' ]
c++ 1 [ 'js', 'c++', 'rb', 'python' ]
rb 2 [ 'js', 'c++', 'rb', 'python' ]
python 3 [ 'js', 'c++', 'rb', 'python' ]
*/



// object in array and getting value of object with the helo of loop

const mycoding=[
    {
        lanuagename:"javascript",
        languagefilename:"js"
    },
    {
        lanuagename:"python",
        languagefilename:"py"
    },
    {
        lanuagename:"ruby",
        languagefilename:"rb"
    }
]
mycoding.forEach((iteam)=>{
console.log(iteam.lanuagename)
})
