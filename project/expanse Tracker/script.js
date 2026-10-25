const expanse=document.querySelector("#expense-name");
const amount=document.querySelector("#amount");
const category=document.querySelector("#category");
const income_input =document.querySelector("#income_input")
const add=document.querySelector("#expense-form");
const list =document.querySelector("#expense-list")
//summary card
const balance=document.querySelector("#balance")
const expansetotal=document.querySelector("#expense")
const incometotal=document.querySelector("#income")
let totalexpanse=0;

// addding event on add expanse button
add.addEvenListener('submit',function(event){
    event.preventDefault();
    const expansename=expanse.value;
    const expanseamount = Number(amount.value);
    const expansecategory=category.value;
    const totalincome = Number(income_input.value);

    // calculating bal ance 
    totalexpanse=totalexpanse+expanseamount
    //printint balance in total balance section
    incometotal.textContent=`₹${totalincome}`
    expansetotal.textContent=`₹${totalexpanse}`
    balance.textContent=`₹${totalincome-totalexpanse}`
    // making a list for new expanse,amount,category
    const li =document.createElement("li");
    // printinf list in expanse list section
    li.textContent = `${expansename} - ₹${expanseamount} - ${expansecategory}`
    list.appendChild(li);
    // after append reset the expanse form section
    add.reset()

    // now adding delete to delete the expanse form list
    const button = document.createElement("button")

    // moving delete buttom to right side 

    li.style.display = "flex";
    li.style.justifyContent = "space-between";
    li.style.alignItems = "center";
    // button havinf delete text in it 
    button.textContent="Delete"
    // addding button in new expanse list 
    li.appendChild(button)


    //adding event on delete button
    button.addEventListener('click',()=>{
        totalexpanse=totalexpanse-expanseamount
        incometotal.textContent=`₹${totalincome}`
        balance.textContent=`₹${totalincome-totalexpanse}`
        expansetotal.textContent=`₹${totalexpanse}`
        li.remove();
    })
})


