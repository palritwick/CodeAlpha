function addNewExp() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control')
    newNode.classList.add('exp')
    newNode.classList.add('mt-2')
    newNode.setAttribute('placeholder', 'Enter Here')

    let weOb = document.getElementById('Exp');
    let weAddButtonOb = document.getElementById('weAddButton');

    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewEQ() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control')
    newNode.classList.add('edu')
    newNode.classList.add('mt-2')
    newNode.setAttribute('placeholder', 'Enter Here')

    let aqOb = document.getElementById('AQ');
    let aqAddButtonOb = document.getElementById('aqAddButton');

    aqOb.insertBefore(newNode, aqAddButtonOb);
}

function addNewProject() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control')
    newNode.classList.add('projects')
    newNode.classList.add('mt-2')
    newNode.setAttribute('placeholder', 'Enter Here')

    let projectOb = document.getElementById('projects');
    let proAddButtonOb = document.getElementById('proAddButton');

    projectOb.insertBefore(newNode, proAddButtonOb);
}


// generate CV
function generateCV(){
    let name = document.getElementById('name').value;
    let nameT1 = document.getElementById('nameT1');

    nameT1.innerHTML = name;

    document.getElementById('nameT2').innerHTML = name;
    document.getElementById('emailT').innerHTML = document.getElementById('email').value;
    document.getElementById('phoneT').innerHTML = document.getElementById('phone').value;
    document.getElementById('addressT').innerHTML = document.getElementById('address').value;
    document.getElementById('linkedT').innerHTML = document.getElementById('linkLI').value;

    // Objective
    document.getElementById('objectiveT').innerHTML = document.getElementById('objective').value;

    // Work experience
    let wes = document.getElementsByClassName('exp');
    let str = '';
    for(let e of wes)
    {
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById('weT').innerHTML = str;

    // Academic qualification
    let aqs = document.getElementsByClassName('edu');
    let str1 = '';
    for(let e of aqs)
    {
        str1 += `<li> ${e.value} </li>`;
    }
    document.getElementById('aqT').innerHTML = str1;

    // Projects
    let pros = document.getElementsByClassName('projects');
    let str2 = '';
    for(let e of pros)
    {
        str2 +=`<li> ${e.value} </li>`;
    }
    document.getElementById('proT').innerHTML = str2;


    document.getElementById('cv-form').style.display ='none';
    document.getElementById('cv-template').style.display ='block';
}

function printCV(){
    window.print();
}