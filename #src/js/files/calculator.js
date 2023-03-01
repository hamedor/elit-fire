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