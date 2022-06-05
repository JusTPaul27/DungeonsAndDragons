function takeUrlData() {
    const url = window.location.href;
    const startingPoint = url.indexOf('=') + 1;
    const name = url.slice(startingPoint);
    return name;
}

function initClasses(classesJSON) {
    console.log(takeUrlData());
    // let classes = JSON.parse(classesJSON);
}

function init() {
    fetch('../classes.json')
    .then(response => response.json())
    .then(result => initClasses(result));
}

init();