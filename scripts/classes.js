function takeClassesName() {
    const url = window.location.href;
    const startingPoint = url.indexOf('=') + 1;
    const name = url.slice(startingPoint);
    return name;
}

function initClasses(classesJSON) {
    const classesName = takeClassesName();
    console.log(classesJSON);
    console.log(classesName);
    console.log(classesJSON.classes.classesName);
}

function init() {
    fetch('../classes.json')
    .then(response => response.json())
    .then(result => initClasses(result));
}

init();