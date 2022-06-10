const classesTemplate =
`
    <span class="card-title">#TITLE</span>
    <img class="card-img" src="#IMG" alt="">
    <span class="description-section">
        <span class="section-title">Description:</span> 
        #DESCRIPTION
    </span>
    <span class="role-section">
        <span class="section-title">Role:</span>
        #ROLE
    </span>
    <span class="alignment-section">
        <span class="section-title">Alignment:</span>
        #ALIGNMENT
    </span>  
`

function takeClassesName() {
    const url = window.location.href;
    const startingPoint = url.indexOf('=') + 1;
    const name = url.slice(startingPoint);
    return name;
}

function printClasses(name, description, role, alignment) {
    const container = document.getElementById('container');
    container.innerHTML = '';
  
    const containerContent = document.createElement('div');
    containerContent.classList.add('card');
    const htmlTemplate = classesTemplate.replaceAll('#TITLE', name)
                                .replaceAll('#IMG', '../assets/classes/' + name + '.png')
                                .replaceAll('#DESCRIPTION', description)
                                .replaceAll('#ROLE', role)
                                .replaceAll('#ALIGNMENT', alignment);
    containerContent.innerHTML = htmlTemplate;
    container.appendChild(containerContent);
}

function initClasses(classesJSON) {
    const classesName = takeClassesName();
    for (const classes in classesJSON.classes) {
        if (Object.hasOwnProperty.call(classesJSON.classes, classes)) {
            const element = classesJSON.classes[classes];
            if (element.name === classesName)
                printClasses(element.name, element.description, element.role, element.alignment);
        }
    }
}

function init() {
    fetch('../classes.json')
    .then(response => response.json())
    .then(result => initClasses(result));
}

init();