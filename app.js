const slide=document.querySelector('.slide');

const slideImage=document.querySelectorAll('.slide img');


const prevBtn=document.querySelector('#prevBtn');
const nextBtn=document.querySelector('#nextBtn');
//counter 
let counter=1;
const size=slideImage[0].clientWidth;

slide.style.transform='translateX('+(-size*counter)+'px)';


// butten listioner

nextBtn.addEventListener('click',function(){
  slide.style.transition="transform 0.4s ease-in-out";
  counter++;
  slide.style.transform='translateX('+(-size*counter)+'px)';
});

prevBtn.addEventListener('click',function(){
  slide.style.transition="transform 0.4s ease-in-out";
  counter--;
  slide.style.transform='translateX('+(-size*counter)+'px)';
});


slide.addEventListener('transitionend',function(){
  if(slideImage[counter].id==='last'){
    slide.style.transition="none";
    counter=slideImage.length-2;
    slide.style.transform='translateX('+(-size*counter)+'px)';
  }
  if(slideImage[counter].id==='first'){
    slide.style.transition="none";
    counter=slideImage.length-counter;
    slide.style.transform='translateX('+(-size*counter)+'px)';
  }
});

console.log(slideImage.length)





