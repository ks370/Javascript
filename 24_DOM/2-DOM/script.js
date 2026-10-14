const parent=document.querySelector('.parent')
// console.log(parent);// this will show all div of days
// console.log(parent.children); // this give with index startig from 0 : div.day and 1:div.day    to till 3
// console.log(parent.children[1],innerHTML); 
   // getting specfic div by indexing
 
   for (let i = 0; i < parent.children.length; i++) {
     //console.log(parent.children[i].innerHTML); 
            // giving monday,tuesday,wednesday.thrusday as output
   }

// changing style of childen of parent class
parent.children[1].style.color='orange'
// console.log(parent.firstElementChild);   // giving monday 
// console.log(parent.lastElementChild);    // givign thrusday




// CREATING DIV ELEMENT

document.createElement('div')
console.log(div)
div.className="main"
div.id=Math.round(Math.random()*10+1)
div.setAttribute("title","generated title ")
div.style.backgroundcolor="green"
div.innerHTML = "abciwbecw"
const addtext=document.createTextNode("chai aur code")
div.appendChild(addtext)

//attaching
document.body.appendChild(div)