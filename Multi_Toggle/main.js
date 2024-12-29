const onclicked = [];

function addColor(num) {
    let element = document.querySelector('.option-' + num);

    if(!onclicked.includes(num)){
        onclicked.push(num);
        element.classList.remove('off');
        element.classList.add('on');
    }
    else{
        onclicked.pop(num)
        element.classList.remove('on');
        element.classList.add('off');
    }
}

function closeTheTab(){
    let element = document.querySelector('.userSettingsContainer');
    element.classList.add('close');
    for (let x of onclicked){
        let element = document.querySelector('.option-' + x);
        element.classList.remove('on');
        element.classList.add('off');
    }
    setTimeout(openTheTab, 3000)
}

function openTheTab(){
    let element = document.querySelector('.userSettingsContainer');
    element.classList.remove('close');
}