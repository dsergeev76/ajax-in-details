const resultBlock = document.querySelector("#result");
const tasksList = document.querySelector("#tasks-result");
const pageNumberEl = document.querySelector("#page-number");
const taskTitleEl = document.querySelector("#task-title");
const getImagesButton = document.querySelector("#get-images");
const getTasksButton = document.querySelector("#get-tasks");
const createTaskButton = document.querySelector("#create-task");
const updateTaskButton = document.querySelector("#update-task");
const deleteTaskButton = document.querySelector("#delete-task");


createTaskButton.addEventListener('click', ()=>{
    createTask(taskTitleEl.value).then((data) => {
        console.log(data);
        if (data.status==='success') {
            const promise = getTasks();
            promise.then(onTasksRecived);
        }
    });
});

updateTaskButton.addEventListener('click', ()=>{
    const taskId = document.querySelector("li").getAttribute('data-id');
    updateTask(taskTitleEl.value, taskId).then((data)=>{
        console.log(data);
        if (data.status==='success') {
            const promise = getTasks();
            promise.then(onTasksRecived);
        }
    });
});

deleteTaskButton.addEventListener('click', ()=>{
    const taskId = document.querySelector("li").getAttribute('data-id');
    deleteTask(taskId).then((data)=>{
        console.log(data);
        if (data.status==='success') {
            const promise = getTasks();
            promise.then(onTasksRecived);
        }
    });
});

getImagesButton.addEventListener('click',()=>{
    const promise = getImages(pageNumberEl.value);
    promise.then(onImagesRecived);
});

getTasksButton.addEventListener('click',()=>{
    const promise = getTasks();
    promise.then(onTasksRecived);
});

function onImagesRecived (images) {
    images.forEach(image => {
        const img = document.createElement("img");
        img.src = image.thumbnail;
        resultBlock.appendChild(img);
    })
}

function onTasksRecived (tasks) {
    const result = document.querySelector("#tasks-result");
    result.innerHTML='';
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.innerHTML = task.title;
        li.dataset.id = task.id;
        tasksList.appendChild(li);
    })
}