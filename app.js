const video1 = document.querySelector('#projectVideo1');
const video2 = document.querySelector('#projectVideo2');
const video3 = document.querySelector('#projectVideo3');
const hoverSign = document.querySelector('.hover-sign');
//contact button element
const contactBtn = document.querySelectorAll('.contact-btn');
const contactSection = document.querySelector('#contact');
 // side-bar element
 const sideBar = document.querySelector('.sidebar');
 const menu = document.querySelector('.menu-icon')
  const close = document.querySelector('.close-icon')
  //form element
  const form = document.getElementById('contactForm');

const videoList = [video1,video2,video3];

// adding video play and pause effect on mouse event

videoList.forEach(function(video){
    video.addEventListener('mouseover' , function(){
        video.play();
        hoverSign.classList.add("active");
    });
    video.addEventListener('mouseout' , function(){
        video.pause();
        hoverSign.classList.remove("active");
    });
});

//side-bar functionality

menu.addEventListener("click",function(){
    sideBar.classList.remove("close-sidebar");
    sideBar.classList.add("open-sidebar");
});
close.addEventListener("click",function(){
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
});

//contact button functionality
contactBtn.forEach(function(con){
    con.addEventListener("click",function(){
    contactSection.scrollIntoView({behavior: "smooth"});
});
});
// form validation
from.addEventListener('submit', function(e) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (name === '' || email === '' || message === '') {
        e.preventDefault();
        alert("Please fill in all the fields.");
        return;
    }

    if (!emailPattern.test(email)) {
        e.preventDefault();
        alert("Please enter a valid email address.");
        return;
    }
});




