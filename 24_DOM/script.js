// targeting element by id 
const title=document.getElementById('title')

// we will getting attribute also 
document.getElementById('title').getAttribute('id')
    // give output ->'title
document.getElementById('title').getAttribute('class')
    // give output-> heading
document.getElementById('title').setAttributeNS('class','test')
        // set class name from heading to test





// styling of element
title.style.backgroundColor='red'
// also giving padding ,borderadius,margin







// taking content of selected element
title.textContent // give all content hide or unhide
//or
title.innerHTML // it will whole html of that element which is selected
//or
title.innerText // not giving hidden conten or done hidden by display:none in styling 







// by class name
document.getElementsByClassName('heading')








// QUERY SELECTOR  ->give only one value

document.querySelector('h1') // selected by h1
document.querySelector('#title') // by id 
document.querySelector('.heading') // by class


const myh1=document.querySelectorAll('h1')
//myh1.style.backgroundColor='green' // not done like this we have to specify which h1 heading
myh1[0].style.backgroundColor='green'