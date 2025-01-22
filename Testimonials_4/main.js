const data = [
    {
        userCommend: "Both attractive and highly adaptable. Buy this now. Thank you for making it painless, pleasant and most of all hassle free!",
        img: "./image.png",
        userName: "John V. Bellamy",
        userRole: "Founder & CEO, The Company",
      },
    {
      userCommend: "This product exceeded my expectations. Highly recommend it to everyone!",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdpcmwlMjBwcm9maWxlfGVufDB8fDB8fHww",
      userName: "Alice Johnson",
      userRole: "Founder & CEO, Innovate Tech",
    },
    {
      userCommend: "An absolute game-changer. The quality and design are outstanding!",
      img: "https://plus.unsplash.com/premium_photo-1664476788423-7899ac87bd7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZXxlbnwwfHwwfHx8MA%3D%3D",
      userName: "Bob Smith",
      userRole: "Marketing Director, Creative Co.",
    },
    {
      userCommend: "I've never been happier with a purchase. Thank you for this amazing product!",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGdpcmwlMjBwcm9maWxlfGVufDB8fDB8fHww",
      userName: "Charlotte Lee",
      userRole: "Product Manager, Bright Solutions",
    },
    {
      userCommend: "A masterpiece of design and functionality. Worth every penny!",
      img: "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFsZXxlbnwwfHwwfHx8MA%3D%3D",
      userName: "Daniel Kim",
      userRole: "Software Engineer, Tech Giants",
    },
    {
      userCommend: "Fantastic product and great service. I'm a loyal customer now!",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGdpcmwlMjBwcm9maWxlfGVufDB8fDB8fHww",
      userName: "Ella Brown",
      userRole: "UX Designer, Design Hub",
    },
    {
      userCommend: "Elegant and practical. This is exactly what I was looking for!",
      img: "https://images.unsplash.com/photo-1484516396415-4971641de8e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hbGV8ZW58MHx8MHx8fDA%3D",
      userName: "Frank Wilson",
      userRole: "CTO, CodeWorks",
    },
    {
      userCommend: "Your product has transformed my daily routine. Thank you so much!",
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGdpcmwlMjBwcm9maWxlfGVufDB8fDB8fHww",
      userName: "Grace Thomas",
      userRole: "Entrepreneur, Startup World",
    },
    {
      userCommend: "Superb quality and attention to detail. I can't recommend it enough!",
      img: "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG1hbGV8ZW58MHx8MHx8fDA%3D",
      userName: "Henry Davis",
      userRole: "Creative Lead, Pixel Perfect",
    },
    {
      userCommend: "I've received so many compliments since I started using this. Love it!",
      img: "https://images.unsplash.com/photo-1529148266338-1a3f1f4ec096?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGdpcmwlMjBwcm9maWxlfGVufDB8fDB8fHww",
      userName: "Isabella Garcia",
      userRole: "Business Consultant, Growth Partners",
    },
    {
      userCommend: "This is the best investment I've made in a long time. Simply amazing!",
      img: "https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG1hbGV8ZW58MHx8MHx8fDA%3D",
      userName: "Jack Martinez",
      userRole: "Chief Analyst, Insight Corp",
    },
];
  

  

const rightMover = document.querySelector('.rightMove');
const leftMover = document.querySelector('.leftMove');

const sliderContainer = document.querySelector('.aboutUser');
const sliderPTag = document.querySelector('.aboutUser p');

const userImageDetails = document.querySelector('.userImageDetails');
const userImage = document.querySelector('.userImageDetails img');
const userName = document.querySelector('.userDetails h3');
const userPosition = document.querySelector('.userDetails p');


sliderContainer.addEventListener('mouseup', () => {
    moveTheSlider(1);
});

userImageDetails.addEventListener('mouseup', () => {
    moveTheSlider(1);
});


rightMover.addEventListener('click', () => {
    moveTheSlider(1);
});

leftMover.addEventListener('click', () => { 
    moveTheSlider(-1);
});

let count = 0;

function moveTheSlider(direction) {
    count += direction;
    if (count >= data.length - 1) {
        count = 0;
    }
    else if (count < 0) {
        count = data.length - 1;
    }

    sliderPTag.textContent = data[count].userCommend;
    userImage.src = data[count].img;
    userName.textContent = data[count].userName;
    userPosition.textContent = data[count].userRole;


    if (direction === 1) {
        sliderContainer.classList.add('aboutUserAnimationForRight');
        userImageDetails.classList.add('userImageDetailsAnimationForRight');

        window.setTimeout(() => {
            sliderContainer.classList.remove('aboutUserAnimationForRight');
            userImageDetails.classList.remove('userImageDetailsAnimationForRight');
        }, 1000);
    }
    else{
        sliderContainer.classList.add('aboutUserAnimationForLeft');
        userImageDetails.classList.add('userImageDetailsAnimationForLeft');

        window.setTimeout(() => {
            sliderContainer.classList.remove('aboutUserAnimationForLeft');
            userImageDetails.classList.remove('userImageDetailsAnimationForLeft');
        }, 1000);
    }

    

    console.log(count);
}