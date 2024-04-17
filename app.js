const nxtBtn=document.querySelector('.next-btn');
const preBtn=document.querySelector('.prev-btn');
const slides=document.querySelectorAll('.slide');

const noOfSlides=slides.length;

let currSlide=0;

nxtBtn.onclick=()=>{
    slides.forEach((slide)=>{
        slide.classList.remove('active');
    });
    currSlide++;
    if(currSlide > (noOfSlides-1)){
        currSlide=0;
    }
    slides[currSlide].classList.add('active');
}
preBtn.onclick=()=>{
    slides.forEach((slide)=>{
        slide.classList.remove('active');
    });
    currSlide--;
    if(currSlide<0){
        currSlide=noOfSlides-1;
    }
    slides[currSlide].classList.add('active');
}