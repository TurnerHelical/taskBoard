// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {
    let taskId = Date.now()
    return taskId;
}
// Todo: create a function to create a task card
function createTaskCard(task) {
    //get task data
    let taskCard = {
        taskId: generateTaskId(),
        taskTitle: $('#taskTitle').val(),
        dueDate: $('#dueDate').val(),
        taskDesc:$('#taskDesc').val(),
    }
    // hide modal
    $('#formModal').modal('hide');
    const card = $('div');
    card.attr('class:','card text-center')

    const cardTitle = $('div');
    cardTitle.attr('class:','card-header')
    cardTitle.textContent = taskCard.taskTitle;

    const cardText = $('p');
    cardText.attr('class:','card-text')
    cardText.textContent = taskDesc;

    card.appendChild(cardTitle);
    card.appendChild(cardContent);

    };
    
    //create task card
    //add data to card
    //append card to container

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
    let taskCard = {
        taskId: generateTaskId(),
        taskTitle: $('#taskTitle').val(),
        dueDate: $('#dueDate').val(),
        taskDesc:$('#taskDesc').val(),
    }
    $('#formModal').modal('hide');
    console.log(taskCard);
}
// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    $('#addTask').on('click', createTaskCard);
});
<div class="card text-center">
<div class="card-header">
  Featured
</div>
<div class="card-body">
  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
<div class="card-footer text-body-secondary">
  2 days ago
</div>
</div>