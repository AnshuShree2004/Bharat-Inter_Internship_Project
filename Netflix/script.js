/*const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const scrollContainer = document.querySelector('.show div');

let scrollAmount = 0;
const scrollStep = 200;

prevBtn.addEventListener('click', () => {
    scrollAmount -= scrollStep;
    scrollContainer.style.transform = `translateX(${scrollAmount}px)`;
});

nextBtn.addEventListener('click', () => {
    scrollAmount += scrollStep;
    scrollContainer.style.transform = `translateX(${scrollAmount}px)`;
});

*/

window.addEventListener('DOMContentLoaded', () => {
    const scroller = document.querySelector('.show');
    
    scroller.addEventListener('scroll', () => {
      if (scroller.scrollLeft === 0) {
        scroller.classList.remove('scrolling');
      } else {
        scroller.classList.add('scrolling');
      }
    });
  });
  