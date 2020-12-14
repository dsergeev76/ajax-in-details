/*function getImagesOld (pageNumber) {
    const promise = $.ajax(`https://repetitora.net/api/JS/images?page=${pageNumber}&count=1`);
    return promise;
}*/

function getImages (pageNumber) {
    const promise = axios.get (`https://repetitora.net/api/JS/images?page=${pageNumber}&count=1`);
    return promise.then((response) => {
        return response.data;
    });
}

function getTasks () {
    const promise = axios.get (`https://repetitora.net/api/JS/Tasks?widgetId=5345231`);
    return promise.then((response) => {
        return response.data;
    });
}

function createTask (title) {
    const promise = axios.post (`https://repetitora.net/api/JS/Tasks`, {widgetId:5345231, title:title});
    return promise.then((response) => {
        return response.data;
    });
}

function updateTask (title, id) {
    const promise = axios.put (`https://repetitora.net/api/JS/Tasks`, {widgetId:5345231, taskId:id, title:title});
    return promise.then((response) => {
        return response.data;
    });
}

function deleteTask (id) {
    const promise = axios.delete (`https://repetitora.net/api/JS/Tasks?widgetId=5345231&taskId=${id}`);
    return promise.then((response) => {
        return response.data;
    });
}