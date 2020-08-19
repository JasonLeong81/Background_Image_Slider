const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const container = document.querySelector('.images');


let counter = 0;
nextBtn.addEventListener('click',nextSlide);
prevBtn.addEventListener('click',prevSlide);

function nextSlide(){
    container.animate([{opacity:0.1},{opacity:1}],{duration:1000,fill:'forwards'});
    if(counter >2){
        counter = 2;
    }
    if(counter===2){
        counter = 0;
        container.style.backgroundImage = `url(./img/c-${counter}.jfif)`
        return;
    }
    counter++;
    container.style.backgroundImage = `url(./img/c-${counter}.png)`
}

function prevSlide(){
    if(counter<=0){
        container.style.backgroundImage = `url(./img/c-${counter}.jfif)`
        counter = 2;
        return;
    }
    counter--;
    container.style.backgroundImage = `url(./img/c-${counter}.png)`
}