
const colorContainer = document.querySelector('.generatedColors');

for (const child of colorContainer.children) {
    child.addEventListener('click', copyColor);
}

function copyColor() {
    const color = this.querySelector(`.colorCode p`).innerHTML;

    const copy = document.querySelector('.copyedIndicator');
    const copyText = document.querySelector('.copyedIndicator p .copyedColorName');
    copyText.innerHTML = color;

    navigator.clipboard.writeText(color);

    copy.style.display = 'flex';
    setTimeout(() => copy.style.display = 'none', 800);
}

// Generator
let count = [];
const colorData = {
    "colorPatterns": [
      ["#EEEDF0", "#A1B5C1", "#F9ACA7", "#68747D", "#CF365F"],
      ["#1B1F3A", "#53354A", "#FF6B6B", "#F7C5CC", "#AAD9BB"],
      ["#003049", "#D62828", "#F77F00", "#FCBF49", "#EAE2B7"],
      ["#E63946", "#F1FAEE", "#A8DADC", "#457B9D", "#1D3557"],
      ["#264653", "#2A9D8F", "#E9C46A", "#F4A261", "#E76F51"],
      ["#14213D", "#FCA311", "#E5E5E5", "#8D99AE", "#2B2D42"],
      ["#0D3B66", "#FAF0CA", "#F4D35E", "#EE964B", "#F95738"],
      ["#3D5A80", "#98C1D9", "#E0FBFC", "#EE6C4D", "#293241"],
      ["#5D576B", "#A9B4C2", "#D6DBDC", "#E6EBE0", "#F1F4F8"],
      ["#FF5733", "#C70039", "#900C3F", "#581845", "#DAF7A6"],
      ["#1A535C", "#4ECDC4", "#F7FFF7", "#FF6B6B", "#FFE66D"],
      ["#F94144", "#F3722C", "#F8961E", "#F9C74F", "#90BE6D"],
      ["#2D3142", "#4F5D75", "#BFC0C0", "#FFFFFF", "#EF8354"],
      ["#A41623", "#F85A3E", "#FFBA08", "#F3E1A1", "#6A0572"],
      ["#6A0572", "#AB83A1", "#C4A4C9", "#E2C1E5", "#F2E3F7"],
      ["#003F5C", "#58508D", "#BC5090", "#FF6361", "#FFA600"],
      ["#D7263D", "#F46036", "#2E294E", "#1B998B", "#C5D86D"],
      ["#3A86FF", "#8338EC", "#FF006E", "#FB5607", "#FFBE0B"],
      ["#2E3440", "#3B4252", "#434C5E", "#4C566A", "#D8DEE9"],
      ["#FFB400", "#D81E5B", "#8E44AD", "#2980B9", "#27AE60"],
      ["#FF9F1C", "#FFBF69", "#CBF3F0", "#2EC4B6", "#011627"],
      ["#2F4858", "#33658A", "#86BBD8", "#F6AE2D", "#F26419"],
      ["#7B3F00", "#C76D00", "#FFB400", "#FFD700", "#8B0000"],
      ["#5B2333", "#962D3E", "#E54B4B", "#FFA987", "#FFCF96"],
      ["#3A1C71", "#D76D77", "#FFAF7B", "#FFE1A8", "#C8C6A7"],
      ["#6A0572", "#AB83A1", "#C4A4C9", "#E2C1E5", "#F2E3F7"],
      ["#034732", "#008148", "#00A896", "#02C39A", "#F0F3BD"],
      ["#3C1518", "#69140E", "#A44200", "#D58936", "#FFA62B"],
      ["#26547C", "#EF476F", "#FFD166", "#06D6A0", "#FFFCF9"],
      ["#DBD56E", "#88AB75", "#F2F4C0", "#F2C078", "#6C7A89"],
      ["#F79256", "#FBD1A2", "#7DCFB6", "#00B2CA", "#1D4E89"],
      ["#F4E409", "#A2C523", "#38A700", "#207178", "#0A3E60"],
      ["#D7263D", "#F46036", "#2E294E", "#1B998B", "#C5D86D"],
      ["#CC2936", "#B82C3D", "#912E45", "#633C4E", "#44555A"],
      ["#2E4045", "#83A603", "#3E5641", "#ADADAD", "#F0F0F0"],
      ["#BA5624", "#E57F27", "#EDAE49", "#F5D491", "#F5E6E8"],
      ["#402A2C", "#A9B3CE", "#D3D6D9", "#F4F7F7", "#FAF4E5"],
      ["#2E292E", "#6B5B95", "#B56576", "#E6A5B0", "#FFCCD5"],
      ["#A6A6A6", "#737373", "#404040", "#202020", "#000000"],
      ["#8D99AE", "#EDF2F4", "#EF233C", "#D90429", "#2B2D42"],
      ["#1E152A", "#5C3C92", "#C4A4A3", "#F4D6CC", "#FFF0E0"],
      ["#5D3A3A", "#AA5656", "#EBD4D4", "#F2E6E6", "#FFFAFA"],
      ["#A8DADC", "#457B9D", "#1D3557", "#E63946", "#F1FAEE"],
      ["#F94144", "#F3722C", "#F8961E", "#F9C74F", "#43AA8B"],
      ["#2B2D42", "#8D99AE", "#EDF2F4", "#EF233C", "#D90429"],
      ["#D7263D", "#F46036", "#2E294E", "#1B998B", "#C5D86D"],
      ["#4C0519", "#99154E", "#A63D40", "#D9A5B3", "#FAE3E3"],
      ["#542344", "#9F1D35", "#D72638", "#E1C870", "#E6D4A8"],
      ["#232F34", "#344955", "#4A6572", "#F9AA33", "#FF7F11"]
    ]
}

const button = document.querySelector('.generateButton button');
let clickCount = 0;
button.addEventListener('click', generator);

window.addEventListener('keydown', (e) => {
    if (e.code === 'Space') generator();
});

function generator(){
    if (clickCount === 1){
        return;
    }
    else{
        clickCount += 1;
    }
    const backgrounds = document.querySelectorAll(".background");
    const colors = document.querySelectorAll(".color");
    const colorCode = document.querySelectorAll(".colorCode p");


    let cData = ["red", "green", "blue", "orange", "pink"];
    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * colorData.colorPatterns.length);
    } while (count.includes(randomNumber));
    count.push(randomNumber);
    cData = colorData.colorPatterns[randomNumber];



    for (let i = 0; i < cData.length; i++) {
        backgrounds[i].style.backgroundColor = cData[i];
    }

    backgrounds.forEach(background => background.style.display = "flex");
    for (let i = 0; i < cData.length; i++) {
        colorCode[i].innerHTML = cData[i];
    }



    setTimeout(() => {
        for (let i = 0; i < cData.length; i++) {
            colors[i].style.backgroundColor = cData[i];
        }
        backgrounds.forEach(background => background.style.display = "none");
        clickCount = 0;
    }, 1100);
}