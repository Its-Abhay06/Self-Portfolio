// Select elements
const video1 = document.querySelector('#projectVideo1');
const video2 = document.querySelector('#projectVideo2');
const video3 = document.querySelector('#projectVideo3');
const hoverSign = document.querySelector('.hover-sign');
const contactBtn = document.querySelectorAll('.contact-btn');
const contactSection = document.querySelector('#contact');
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const close = document.querySelector('.close-icon');
const form = document.getElementById('contactForm');

// Safe video element list (skip nulls)
const videoList = [video1, video2, video3].filter(Boolean);

// Add hover and touch play/pause functionality
videoList.forEach(function (video) {
  video.addEventListener('mouseover', function () {
    video.play();
    hoverSign.classList.add('active');
  });

  video.addEventListener('mouseout', function () {
    video.pause();
    hoverSign.classList.remove('active');
  });

  // Mobile support: tap to toggle play/pause
  video.addEventListener('click', function () {
    if (video.paused) {
      video.play();
      hoverSign.classList.add('active');
    } else {
      video.pause();
      hoverSign.classList.remove('active');
    }
  });
});

// Sidebar toggle
menu.addEventListener('click', function () {
  sideBar.classList.remove('close-sidebar');
  sideBar.classList.add('open-sidebar');
});

close.addEventListener('click', function () {
  sideBar.classList.remove('open-sidebar');
  sideBar.classList.add('close-sidebar');
});

// Scroll to contact section
contactBtn.forEach(function (btn) {
  btn.addEventListener('click', function () {
    contactSection.scrollIntoView({ behavior: 'smooth' });

    // Highlight the section temporarily
    contactSection.classList.add('highlight');
    setTimeout(() => contactSection.classList.remove('highlight'), 2000);
  });
});

// Form validation
form.addEventListener('submit', function (e) {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (name === '' || email === '' || message === '') {
    e.preventDefault();
    alert('Please fill in all the fields.');
    return;
  }

  if (!emailPattern.test(email)) {
    e.preventDefault();
    alert('Please enter a valid email address.');
    return;
  }
});
