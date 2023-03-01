let currentSlideIndex = [0,0,0,0];
let slidesGroup = ['.slider1' , '.slider2', '.slider3', '.slider4'];

let hrs = document.querySelectorAll('.slider__hr');

const showSlides = (index, group) =>{
    let slides = document.querySelectorAll(slidesGroup[group]);
    
    if(index > slides.length-1){
        currentSlideIndex[group] = 0;
    }
    if(index < 0){
        currentSlideIndex[group] = slides.length-1;
    }

    for(let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[currentSlideIndex[group]].style.display = "block";

    for(let i = 0;i < hrs.length; i++){
        hrs[i].classList.remove('slider__hr--active');
    }
    hrs[currentSlideIndex[group]].classList.add('slider__hr--active');
    
}

const isHRsNeeded = true;

showSlides(0,0);
showSlides(0,1);
showSlides(0,2);
showSlides(0,3, isHRsNeeded);

const prevSlide = (group) =>{
    showSlides(currentSlideIndex[group] -= 1, group);
}

const nextSlide = (group) =>{
    showSlides(currentSlideIndex[group] += 1, group);
}
