const resultBlock = document.querySelector("#result");
const pageNumberEl = document.querySelector("#page-number");
const clickMeButton = document.querySelector("#click-Me");
clickMeButton.addEventListener('click',()=>{
    const promise = getImages(pageNumberEl.value);
    promise.then(onDataRecived);
});

function onDataRecived (data) {
    data.forEach(elem => {
        const img = document.createElement("img");
        img.src = elem.thumbnail;
        resultBlock.appendChild(img);

    })

}


let a = 5;



a = 8;
console.log(a);