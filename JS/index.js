const resultBlock = document.querySelector("#result");
const tasksList = document.querySelector("#tasks-result");
const pageNumberEl = document.querySelector("#page-number");
const getImagesButton = document.querySelector("#get-images");
const getTasksButton = document.querySelector("#get-tasks");

createTask('Learn JS').then((data) => {
    console.log(data);
} )

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
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.innerHTML = task.title;
        tasksList.appendChild(li);
    })
}