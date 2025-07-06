const video1 = document.querySelector('#projectVideo1');
const video2 = document.querySelector('#projectVideo2');
const video3 = document.querySelector('#projectVideo3');
const hoverSign = document.querySelector('.hover-sign');

const videoList = [video1,video2,video3];

// adding video play and pause effect on mouse event

videoList.forEach(function(video){
    video.addEventListener('mouseover' , function(){
        video.play();
        hoverSign.classList.add("active");
    })
    video.addEventListener('mouseout' , function(){
        video.pause();
        hoverSign.classList.remove("active");
    })
})
