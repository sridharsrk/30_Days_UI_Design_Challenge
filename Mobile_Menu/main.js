for (let i = 1; i <= 5; i++) {
    const option = document.querySelector(`.option-${i}`);
    option.addEventListener("mouseover" , () => {
        optionHover(`.option-${i}`);
    });
}

for (let i = 1; i <= 5; i++) {
    const option = document.querySelector(`.option-${i}`);
    option.addEventListener("mouseout" , () => {
        optionOff(`.option-${i}`);
    });
}

function optionHover(option) {
    const Option = document.querySelector(option);

    const icon = Option.querySelector('.icon svg');
    icon.setAttribute('fill', '#628dff');
    const iconPath = Option.querySelector('.icon svg path');
    iconPath.setAttribute('fill', '#628dff');
    iconPath.setAttribute('stroke', '#628dff');
    const circle = Option.querySelector('.icon svg circle');
    if (circle){
        circle.setAttribute('fill', '#628dff');
    }
    


    const pTage = Option.querySelector('.text p');
    pTage.style.color = '#628dff';
}

function optionOff(option) {
    const Option = document.querySelector(option);

    const icon = Option.querySelector('.icon svg');
    icon.setAttribute('fill', 'white');
    const iconPath = Option.querySelector('.icon svg path');
    iconPath.setAttribute('fill', 'gray');
    iconPath.setAttribute('stroke', 'gray');
    const circle = Option.querySelector('.icon svg circle');
    if (circle){
        circle.setAttribute('fill', 'gray');
    }

    const pTage = Option.querySelector('.text p');
    pTage.style.color = 'black';
}

function openMenu() {
    const menu = document.querySelector('.menuContainer');
    menu.classList.toggle('active');

    const menucontroler = document.querySelector('.menuControler');
    const open = menucontroler.querySelector('.openMenu');
    const close = menucontroler.querySelector('.closeMenu');
    if (menu.classList.contains('active')) {
        open.style.display = 'none';
        close.style.display = 'block';
        menucontroler.style.position = 'absolute';
        menucontroler.style.bottom = '0';
        menucontroler.style.right = '0';
    } else {    
        open.style.display = 'block';
        close.style.display = 'none';
        menucontroler.style.position = 'relative';
    }
}