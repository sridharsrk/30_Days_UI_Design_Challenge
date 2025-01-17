const tiltEffectSettings = {
    max: 10,
    perspective: 1000, 
    scale: 1.1,
    speed: 500, 
    easing: "cubic-bezier(.03,.98,.52,.99)"
  };
  
const cards = document.querySelectorAll(".teamMemberCard");
  
cards.forEach(card => {
    card.addEventListener("mouseenter", cardMouseEnter);
    card.addEventListener("mousemove", cardMouseMove);
    card.addEventListener("mouseleave", cardMouseLeave);
  });
  
  function cardMouseEnter(event) {
    setTransition(event);
  }
  
  function cardMouseMove(event) {
    const card = event.currentTarget;

    const cardWidth = card.offsetWidth;
    const cardHeight = card.offsetHeight;

    const centerX = card.offsetLeft + cardWidth/2;
    const centerY = card.offsetTop + cardHeight/2;

    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;

    const rotateXUncapped = (+1)*tiltEffectSettings.max*mouseY/(cardHeight/2);
    const rotateYUncapped = (-1)*tiltEffectSettings.max*mouseX/(cardWidth/2);
    const rotateX = rotateXUncapped < -tiltEffectSettings.max ? -tiltEffectSettings.max : 
                    (rotateXUncapped > tiltEffectSettings.max ? tiltEffectSettings.max : rotateXUncapped);
    const rotateY = rotateYUncapped < -tiltEffectSettings.max ? -tiltEffectSettings.max : 
                    (rotateYUncapped > tiltEffectSettings.max ? tiltEffectSettings.max : rotateYUncapped);
  
    card.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) 
                            scale3d(${tiltEffectSettings.scale}, ${tiltEffectSettings.scale}, ${tiltEffectSettings.scale})`;
}
  
function cardMouseLeave(event) {
    event.currentTarget.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    setTransition(event);
}
  
function setTransition(event) {
    const card = event.currentTarget;
    clearTimeout(card.transitionTimeoutId);
    card.style.transition = `transform ${tiltEffectSettings.speed}ms ${tiltEffectSettings.easing}`;
    card.transitionTimeoutId = setTimeout(() => {
      card.style.transition = "";
    }, tiltEffectSettings.speed);
}


//   adding New Cards
const userDetails =[
    {
      "imageURL": "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600&h=200",
      "name": "John Doe",
      "Professional": "Software Engineer",
      "companyLogoURL": "https://www.zarla.com/images/visa-logo-2400x2400-20220519-1.png?crop=1:1,smart&width=150&dpr=2"
    },
    {
      "imageURL": "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600&h=200",
      "name": "Jane Smith",
      "Professional": "Product Manager",
      "companyLogoURL": "https://www.zarla.com/images/ebay-logo-2400x2400-20223105.png?crop=1:1,smart&width=150&dpr=2"
    },
    {
      "imageURL": "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600&h=200",
      "name": "Robert Brown",
      "Professional": "Data Scientist",
      "companyLogoURL": "https://www.zarla.com/images/zarla-chanel-combination-logo-2400x2400-20240701.png?crop=1:1,smart&width=150&dpr=2"
    },
    {
      "imageURL": "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=600&h=200",
      "name": "Emily Davis",
      "Professional": "UI/UX Designer",
      "companyLogoURL": "https://www.zarla.com/images/facebook-logo-2400x2400-20220518.png?crop=1:1,smart&width=150&dpr=2"
    },
    {
      "imageURL": "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600&h=200",
      "name": "Michael Wilson",
      "Professional": "DevOps Engineer",
      "companyLogoURL": "https://www.zarla.com/images/wwf-logo-2400x2400-20220512.png?crop=1:1,smart&width=150&dpr=2"
    },
    {
      "imageURL": "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600&h=200",
      "name": "Sophia Green",
      "Professional": "Data Analyst",
      "companyLogoURL": "https://www.zarla.com/images/google-logo-2400x2400-20223105.png?crop=1:1,smart&width=150&dpr=2"
    },
    {
      "imageURL": "https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG1hbiUyMGFuZCUyMHdvbWFuJTIwd29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D",
      "name": "William Taylor",
      "Professional": "Frontend Developer",
      "companyLogoURL": "https://www.zarla.com/images/ibm-logo-2400x2400-20220519-1.png?crop=1:1,smart&width=150&dpr=2"
    },
    {
      "imageURL": "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600&h=200",
      "name": "James Miller",
      "Professional": "Network Engineer",
      "companyLogoURL": "https://www.zarla.com/images/bmw-logo-2400x2400-20220519.png?crop=1:1,smart&width=150&dpr=2"
    },
    {
      "imageURL": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM4fHxtYW4lMjBhbmQlMjB3b21hbiUyMHdvcmtpbmd8ZW58MHx8MHx8fDA%3D",
      "name": "Olivia Johnson",
      "Professional": "Marketing Specialist",
      "companyLogoURL": "https://www.zarla.com/images/mercedes-benz-logo-2400x2400-20220513.png?crop=1:1,smart&width=150&dpr=2"
    },
    {
      "imageURL": "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "name": "Isabella Harris",
      "Professional": "HR Manager",
      "companyLogoURL": "https://www.zarla.com/images/walmart-logo-2400x2400-20220513.png?crop=1:1,smart&width=150&dpr=2"
    }
  ]
  

  

const count = 0;

const main = document.querySelector(".TeamMembersCards");
function createNewCard(){
    const createTeamMemberCard = document.createElement("li");
    createTeamMemberCard.className = "teamMemberCard";
    main.appendChild(createTeamMemberCard);

    // add the events
    createTeamMemberCard.addEventListener("mouseenter", cardMouseEnter);
    createTeamMemberCard.addEventListener("mousemove", cardMouseMove);
    createTeamMemberCard.addEventListener("mouseleave", cardMouseLeave);

    // selected the random data
    const selectedData = (Math.floor(Math.random() * 10));
    const data = userDetails[selectedData];

    // create cardProfile
    const cardProfile = document.createElement("div");
    cardProfile.className = "cardProfile";
    cardProfile.style.backgroundImage = `url(${data.imageURL})`;
    createTeamMemberCard.appendChild(cardProfile);

    // create cardDetails
    const cardDetails = document.createElement("div");
    cardDetails.className = "cardDetails";
    createTeamMemberCard.appendChild(cardDetails);

    // create cardNameAndProfessional
    const cardNameAndProfessional = document.createElement("div");
    cardNameAndProfessional.className = "cardNameAndProfessional";
    // create h4
    const h4 = document.createElement("h4");
    h4.innerHTML = `${data.name}`;
    cardNameAndProfessional.appendChild(h4);
    // create p
    let p = document.createElement("p");
    p.innerHTML = `${data.Professional}`
    cardNameAndProfessional.appendChild(p);
    cardDetails.appendChild(cardNameAndProfessional);

    // create previouslyWorkingPlace
    const previouslyWorkingPlace = document.createElement("div");
    previouslyWorkingPlace.className = "previouslyWorkingPlace";
    // add p
    p = document.createElement("p");
    p.innerHTML = `Previously`;
    previouslyWorkingPlace.appendChild(p);
    // add image
    const img = document.createElement("img");
    img.setAttribute("src", `${data.companyLogoURL}`);
    previouslyWorkingPlace.appendChild(img);
    cardDetails.appendChild(previouslyWorkingPlace);
}

