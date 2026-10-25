// selecting element
const taskform=document.querySelector("#task-form")
const input=document.querySelector("#task-input")
const category=document.querySelector("#task-category")
const priority=document.querySelector("#task-priority")
const date=document.querySelector("#task-deadline")
const list=document.querySelector("#task-list")
const searchinput=document.querySelector("#task-search")
const taskfilter=document.querySelector("#task-filter")
const sorttask=document.querySelector("#sort-tasks")
const totaltask=document.querySelector("#total-task")
const completed=document.querySelector("#completed-task")
const pending=document.querySelector("#pending-task")
const completionrate=document.querySelector("#completion-rate")
// making array for task 
let taskarray=[]

// storing in local storage
function savetask(){
    localStorage.setItem("task",JSON.stringify(taskarray))
}
function loadtask(){
    const savetask=localStorage.getItem("task")
    if(savetask!==null){
         taskarray = JSON.parse(savetask);
    }
    rendertask()
}




// creating list for each task and display on webpage with delete button
function rendertask(){ 
     let filtertask=taskarray

    list.innerHTML=""
    if(taskfilter.value==="pending"){
        filtertask=taskarray.filter(task => !task.complete)
    }
    if(taskfilter.value === "complete"){
        filtertask=taskarray.filter(task => task.complete)
    }
    filtertask.forEach(function(task){
         const li =document.createElement("li")
         li.textContent = `${task.taskinput} - ${task.taskcategory} - ${task.taskpriority} - ${task.taskdate}`
         list.appendChild(li)
         // creating delete button
          const button = document.createElement("button")
         // moving delete buttom to right side 
         li.style.display = "flex";
         li.style.justifyContent = "space-between";
         li.style.alignItems = "center";
         // button having delete text in it 
         button.textContent="Delete"
         // addding button in new expanse list 
         li.appendChild(button)
         // removing list by delete button
         button.addEventListener("click",()=>{
             taskarray = taskarray.filter(item => item.id !== task.id);
             savetask()
             rendertask();
         })
         // creating checkbox for tasks 
         const checkbox = document.createElement("input")
        checkbox.checked=task.complete;
         checkbox.type="checkbox"
         // adding to list 
         li.appendChild(checkbox)
         if(task.complete){
            li.style.textDecoration="line-through"
         }
         //adding event listing on checkboc
         checkbox.addEventListener('change',function(){
            task.complete=checkbox.checked;
            savetask()
            rendertask()
         })
    });
}
// adding event listening on task form 
taskform.addEventListener('submit',function(event){
    event.preventDefault()
    const task = {
        id:Date.now(),
        taskinput:input.value.trim(),
        taskcategory:category.value,
        taskpriority:priority.value,
        taskdate:date.value,
        complete:false
    }
   //console.log(task)
    // showing data in list form
    if(task.taskinput.trim()===""){
        return;
        }
    else{
            taskarray.push(task);
                     savetask()

    }    
    rendertask()
    savetask()
    taskform.reset()

})
taskfilter.addEventListener('change',rendertask)
loadtask()