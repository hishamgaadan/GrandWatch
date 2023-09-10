function userScroll() {
  const navbar = document.querySelector('.navbar');
  const toTopBtn = document.querySelector('#to-top');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('bg-dark')
      navbar.classList.add('navbar-sticky')
      toTopBtn.classList.add('show')
      
    } else {
      navbar.classList.remove('bg-dark')
      navbar.classList.remove('navbar-sticky')
      toTopBtn.classList.remove('show')
    }
  })
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.querySelector('#to-top').addEventListener('click', scrollToTop);


document.addEventListener('DOMContentLoaded', userScroll)

const videoBtn = document.querySelector('.video-btn');
const videoModal = document.querySelector('#videoModal');
const video = document.querySelector('#video');

let videoSrc;

if (videoBtn !== null) {
  videoBtn.addEventListener('click', () => {
    videoSrc = videoBtn.getAttribute('data-bs-src');
  });
}
if (videoModal !== null) {
  videoModal.addEventListener('shown.bs.modal', () => {
    video.setAttribute('src', videoSrc + '?autoplay=1;modestbranding=1;showInfo=0');
  });
  videoModal.addEventListener('hide.bs.modal', () => {
    video.setAttribute('src', videoSrc);
  });
}



function runTypingEffect() {
  const text = "Watch Our New Grand Collection";
  const typingElement = document.getElementById('typing-text');
  const typingDelay =100;

  typeText(text, typingElement, typingDelay);
}

function typeText(text, typingElement, delay) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typingElement.textContent += text.charAt(i);

    }, delay * i);
  }
}


document.addEventListener('DOMContentLoaded', runTypingEffect)

function runTypingEffect1() {
  const text1 = "Grand Watches";
  const typingElement1 = document.getElementById('typing-text-1');
  const typingDelay1 =100;

  typeText(text1, typingElement1, typingDelay1);
}

function typeText1(text1, typingElement1, delay1) {
  for (let i = 0; i < text1.length; i++) {
    setTimeout(() => {
      typingElement1.textContent += text1.charAt(i);

    }, delay1 * i);
  }
}


document.addEventListener('DOMContentLoaded', runTypingEffect1);

var cards = document.querySelectorAll('.product-box');
[...cards].forEach((card) => {
  card.addEventListener('mouseover', function () {
    card.classList.add('is-hover');
  })
  card.addEventListener('mouseleave', function () {
    card.classList.remove('is-hover');
  })
})

