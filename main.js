'use strict'

//navbar dark
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if (window.scrollY > navbarHeight){
navbar.classList.add('navbar--dark');
    }else{
        navbar.classList.remove('navbar--dark');
    }
});


// home slowly fade to transparent as the window scroll down
const main = document.querySelector('#main');
const mainHeight = main.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    main.style.opacity = 1 - window.scrollY / mainHeight;
});

let checkpoint = 0;
let opacity = 0;

function scrollEvent(id, checkpoint)
{window.addEventListener("scroll", () => {

  const currentScroll = window.pageYOffset;
  console.log(window.scrollY);

  if (currentScroll <= checkpoint) {
    opacity = currentScroll / checkpoint -1;
  } else {
    opacity = 1;
  }
  document.querySelector(`#${id}`).style.opacity = opacity;
})}

scrollEvent('news', 5300);
scrollEvent('store', 6600);
scrollEvent('review', 3950);
scrollEvent('product', 2000);
scrollEvent('innistar', 500);




// 원하는 위치로 스크롤링
const navbarMenu = document.querySelector('.navbar_menu');
navbarMenu.addEventListener('click', (event)=> {
    const target = event.target;
    const link = target.dataset.link;
    if(link == null){
        return;
    }
    console.log(event.target.dataset.link);
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior: "smooth"});
})


//iphone
var content = document.querySelector('.content');
var duplicate = content.cloneNode(true);
var contentBlurred = document.createElement('div');
contentBlurred.className = 'content-blurred';
contentBlurred.appendChild(duplicate);

var header = document.querySelector('header');
header.appendChild(contentBlurred);

var contentWrapper = document.querySelector('.content-wrapper'),
translation;

contentWrapper.addEventListener('scroll',function(){
  translation = 'translate3d(0,' + (-this.scrollTop + 'px') + ',0)';
  duplicate.style['-webkit-transform'] = translation;
  duplicate.style['-moz-transform'] = translation;
  duplicate.style['-ms-transform'] = translation;
  duplicate.style['transform'] = translation;
  
  console.log(duplicate);
});

// offset to demo blurring
contentWrapper.scrollTop = 140;