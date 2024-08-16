let formEl=document.getElementById('formel');
let taskEle=document.getElementById('taskEl');

formEl.addEventListener('submit',function(e){
    e.preventDefault()
    createtask()
})


//create task
let taskList=localStorage.getItem('task')?JSON.parse(localStorage.getItem('task')):[];
function createtask(){
    let task=taskEle.value.trim(); //remove spaces
    let taskObj={taskVal:task,isCompleted:false};
    taskList.unshift(taskObj);
    localStorage.setItem('task',JSON.stringify(taskList));
    displayTasks();
    taskEle.value=' ';
}

//Display tasks
function displayTasks(){
    
    if(taskList.length!=0){
        let eachTask=``
        taskList.forEach((task,index)=>
            {
            eachTask+=`<li class="list-group-item list-group-item-dark mb-2">
            <input class="form-check-input" type="checkbox" role="switch" id='check'>
            <span id='tval'>${task.taskVal}</span>
            <button class="float-end btn btn-info abc ms-2" onclick="deleteTask(${index})"><i class="fa-solid fa-trash-can"></i></button>
            <button class="float-end btn btn-info abc" onclick="updateTask(${index})"><i class="fa-solid fa-pencil"></i></button>
        </li>`})
        let listEl=document.getElementById('list');
        listEl.innerHTML=eachTask;
    }
}
// displayTasks()

//checkbox

// let check = document.getElementById('check')
// check.addEventListener('click',function(){
//    let tvalue=document.getElementById('tval')
//    tvalue.style.textDecoration='line-through'
// })

//DeleteTask
function deleteTask(index){
    taskList.splice(index,1);
    localStorage.setItem('task',JSON.stringify(taskList));
    displayTasks()
}


//Update Functionality
function updateTask(index){
    taskEle.value=taskList[index].taskVal;
    taskList.splice(index,1);
    localStorage.setItem('task',JSON.stringify(taskList));
    displayTasks()
}