function openMenu(){
    let menu = document.querySelector(".mobileMenuLinks")
    menu.style.display = "flex";
}

function closeMenu(){
    let menu = document.querySelector(".mobileMenuLinks")
    menu.classList.add("closeTheMenu");
    setTimeout(() => {
        menu.classList.remove("closeTheMenu");
        menu.style.display = "none";
    }, 2000);
}