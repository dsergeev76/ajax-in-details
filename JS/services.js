function getImagesOld (pageNumber) {
    const promise = $.ajax(`https://repetitora.net/api/JS/images?page=${pageNumber}&count=1`);
    return promise;
}

function getImages (pageNumber) {
    const promise = axios.get (`https://repetitora.net/api/JS/images?page=${pageNumber}&count=1`);
    return promise.then((response) => {
        return response.data;
    });
}