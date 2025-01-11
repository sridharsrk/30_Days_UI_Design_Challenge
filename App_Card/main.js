function toggleMenu() {
    const menu = document.querySelector('body');
    if (menu.classList.length == 0){
        menu.classList.add("bodyRightToLeft")
    }
    else if (menu.classList[0] == "bodyLeftToRight"){
        menu.classList.replace("bodyLeftToRight", "bodyRightToLeft")
    }
    else{
        menu.classList.replace("bodyRightToLeft", "bodyLeftToRight")
    }

    const appCardBottom = document.querySelector(".appCardBottom")
    if (appCardBottom.classList.length == 1){
        appCardBottom.classList.add("appCardBottomRightToLeft")
    }
    else if (appCardBottom.classList[1] == "appCardBottomLeftToRight"){
        appCardBottom.classList.replace("appCardBottomLeftToRight", "appCardBottomRightToLeft")
    }
    else{
        appCardBottom.classList.replace("appCardBottomRightToLeft", "appCardBottomLeftToRight")
    }

    const appButton = document.querySelector(".AppLink button")
    appButton.classList.toggle("changeTheAppButtonBackground")
}