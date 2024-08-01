let sliderImages=Array.from(document.querySelectorAll(".slider-container .slide"));
let sliderImage=Array.from(document.querySelectorAll(".slider-container .slide img"));
let slidesCount=sliderImages.length;
// let slideNumberElement=document.getElementById('slide-number');

let currentSlide=1;
let nextButton=document.getElementById('next');
let prevButton=document.getElementById('prev');

// sliderImages.forEach(function(slide, index){
//     slide.style.left=100*index+"vw";
// });
nextButton.onclick=nextSlide;
prevButton.onclick=prevSlide;

let paginationElement=document.createElement('ul')
paginationElement.setAttribute('id','pagination-ul');

for(let i=1; i<=slidesCount; i++){
    let paginationItem=document.createElement('li');
    paginationItem.setAttribute('data-index',i);
    paginationItem.appendChild(document.createTextNode(" "));
    paginationElement.appendChild(paginationItem);
}
document.getElementById('indicators').appendChild(paginationElement);

let paginationCreatedUl=document.getElementById("pagination-ul")
let paginationBullets=Array.from(document.querySelectorAll('#pagination-ul li' ));

for(let i=0;i<paginationBullets.length;i++){
    paginationBullets[i].onclick=function(){
        currentSlide=parseInt(this.getAttribute('data-index'));
        theChecker();
    };
}
theChecker();

function theChecker(){
    // slideNumberElement.textContent=currentSlide;
    removeAllActive();  
    sliderImages[currentSlide-1].classList.add("active");
    sliderImage[currentSlide-1].classList.add("active");
    paginationCreatedUl.children[currentSlide-1].classList.add('active');

    if(currentSlide==1){
        prevButton.classList.add('disabled');
    }
    else{
        prevButton.classList.remove('disabled');
    }
     if(currentSlide==slidesCount){
        nextButton.classList.add('disabled');
    }
    else{
        nextButton.classList.remove('disabled');
    }
}
function removeAllActive(){
    sliderImages.forEach(function(slide){
        slide.classList.remove("active");
    });
    sliderImage.forEach(function(image){
        image.classList.remove("active");
    });
    paginationBullets.forEach(function(item){
        item.classList.remove('active');
    });
}
function nextSlide(){
    if(nextButton.classList.contains('disabled')){
        return false;
    }
    else{
        currentSlide++;
        theChecker();
    }
}
function prevSlide(){
    if(prevButton.classList.contains('disabled')){
        return false;
    }
    else{
        currentSlide--;
        theChecker();
    }
}

console.log(paginationBullets)