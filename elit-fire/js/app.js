
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support === true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
});


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
 
let initialRangePrice = 0;
const step = 10000;

const calculateWidth = () =>{
    const width = document.querySelector('#width');
    width.style.background = `linear-gradient(to right, #FFCF7A 0%, #FFCF7A ${(width.value-width.min)/(width.max-width.min)*100}%, #646464 ${(width.value-width.min)/(width.max-width.min)*100}%, #646464 100%)`
    initialRangePrice = width.value * step;
    renderPrice(initialRangePrice, initialCheckboxPrice) 
    width.addEventListener('input',(e)=>{
    width.style.background = `linear-gradient(to right, #FFCF7A 0%, #FFCF7A ${(width.value-width.min)/(width.max-width.min)*100}%, #646464 ${(width.value-width.min)/(width.max-width.min)*100}%, #646464 100%)`

    initialRangePrice = e.target.value * step;
    renderPrice(initialRangePrice, initialCheckboxPrice)
    })
}

let initialCheckboxPrice = 0

let additionalFeatures = {
    wifi:5000,
    kids:12000,
    delivery:5000,
    garanty:7000
}
const finalPrice = document.querySelector('#price');

const calculateCheckboxes = () =>{
    const checkboxes = document.querySelectorAll('.calculator__checkboxItem');
    
    for(let i=0;i<checkboxes.length; i++){
        checkboxes[i].addEventListener('change',()=>{  
            if(checkboxes[i].checked){
                initialCheckboxPrice += additionalFeatures[`${checkboxes[i].id}`]        
            }else{
                initialCheckboxPrice -= additionalFeatures[`${checkboxes[i].id}`]  
            }
            renderPrice(initialRangePrice, initialCheckboxPrice)
        })   
    } 
}

let renderPrice = (rangePrice, checkboxPrice) =>{
    let result = rangePrice + checkboxPrice;
    finalPrice.innerHTML=result;
}

window.onload = () =>{
    calculateCheckboxes();
    calculateWidth();
} 
const burger = document.querySelector('#burger');
const nav = document.querySelector('#nav');
const body = document.querySelector('#body');

burger.addEventListener('click', ()=>{
    nav.classList.toggle('active');
    burger.classList.toggle('active');
    body.classList.toggle('lock');
})

