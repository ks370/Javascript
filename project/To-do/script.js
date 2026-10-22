const inputbox = document.querySelector("#taskInput");
const adding = document.querySelector("#addBtn");
const del = document.querySelector("#delete-btn"); // delete button
const tasklist = document.querySelector("#taskList");
// taking input
adding.addEventListener("click", function () {

  // checking if input box is not having anything nothing will do   
  if (inputbox.value.trim() === "") {
    return;
  }

  // creating list to appent in task list 
  const li = document.createElement("li");
  li.textContent = inputbox.value;
  tasklist.appendChild(li);

  //delete button
  const deletebtn = document.createElement("button");
// styling using js of delete button
  deletebtn.style.backgroundColor = "#fee2e2";
  deletebtn.style.color="#dc2626";
  deletebtn.style.flexShrink="0";

  // button havinf Delete text in it 
  deletebtn.textContent = "Delete";
  li.appendChild(deletebtn);
  tasklist.appendChild(li);

  // working on clicking delete button
  deletebtn.addEventListener("click", function () {
    li.remove();
  });

  // make input box vacent after adding task and deleteing
  inputbox.value = "";
});
