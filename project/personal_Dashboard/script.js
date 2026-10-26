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
const notetitle=document.querySelector("#note-title")
const notecontent=document.querySelector("#note-content")
const noteform=document.querySelector("#note-form")
const notelist=document.querySelector("#notes-list")
// summary card
const totaltask=document.querySelector("#total-tasks")
const completed=document.querySelector("#completed-tasks")
const pending=document.querySelector("#pending-tasks")
const completionrate=document.querySelector("#completion-rate")
// making array for task 
let taskarray=[]
let notearray=[]

// storing in local storage
function savetask(){
    localStorage.setItem("task",JSON.stringify(taskarray))

}
function savenote(){
    localStorage.setItem("note",JSON.stringify(notearray))
}
function loadnote(){
    const savenote=localStorage.getItem("note")
     if(savenote!=null){
        notearray=JSON.parse(savenote);
    }
    rendernote()

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
    //filtering on basic of status completed or pending 
    if(taskfilter.value==="pending"){
        filtertask=taskarray.filter(task => !task.complete)
    }
    if(taskfilter.value === "completed"){
        filtertask=taskarray.filter(task => task.complete)
    }

    // searching task by name
    const searchtext=searchinput.value.toLowerCase();
    filtertask=filtertask.filter(
        task => task.taskinput.toLowerCase().includes(searchtext)
    )

// updating data in summary card 
    totaltask.textContent=taskarray.length;
    completed.textContent=taskarray.filter(task => task.complete).length;
    pending.textContent=taskarray.filter(task =>! task.complete).length;
    let percantage =0;
    if(taskarray.length === 0 ){
        percantage=0;
    }
    else{
        percantage=Math.round((taskarray.filter(task => task.complete).length/taskarray.length)*100)
    }

    completionrate.textContent =`${percantage}%`

// sort tasking on basic of priority 
    if(sorttask.value === "newest"){
        filtertask.sort((a,b) => b.id - a.id)
    }
    if(sorttask.value==="priority"){
        const priorityorder={
            high:1,
            medium:2,
            low:3
        }
        filtertask.sort((a,b) => priorityorder[a.taskpriority] - priorityorder[b.taskpriority])
    }
    if(sorttask.value === "deadline"){
        filtertask.sort((a,b) =>{
            if(!a.taskdate) return 1 // means if a task has no deadline then b is up and a is down 
            if(!b.taskdate) return -1 //means if b task has no deadline then a is up and b is down 
            
             return a.taskdate.localeCompare(b.taskdate) // compare the date of a and b and localcompare function set acc to date 

        
        })
    }



    // creating list of task and printing the task in list form section
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

function rendernote(){
    notelist.innerHTML="";
    notearray.forEach(function (note) {
      const heading = document.createElement("h3");
      const paragraph = document.createElement("p");
      heading.textContent = note.title;
      paragraph.textContent = note.note;
      const li = document.createElement("li");
      li.appendChild(heading);
      li.appendChild(paragraph);
      // creating delete button
      const button = document.createElement("button");
      li.style.display = "flex";
      li.style.justifyContent = "space-between";
      li.style.alignItems = "center";
      button.textContent = "Delete";
      li.appendChild(button);
      notelist.appendChild(li);
      button.addEventListener("click", function () {
        notearray=notearray.filter(item => item!==note)
        savenote()
        rendernote()
      });
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
searchinput.addEventListener('input',rendertask)
sorttask.addEventListener('change',rendertask)

// quick notes section
noteform.addEventListener('submit',function(event){
    event.preventDefault()
    const note={
        title:notetitle.value.trim(),
        note:notecontent.value.trim()
    }
    if(note.title === "" || note.note===""){
        return
    }
    else{
        notearray.push(note)
        savenote()
    }
    rendernote()
    savenote()
    noteform.reset()
  
})

loadtask()
loadnote()