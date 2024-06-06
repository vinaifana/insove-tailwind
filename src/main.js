// Mobile Nav

const mobileNav = document.querySelector('.mnav');
const closeBtn = document.querySelector('.mnav__close-btn');
const closeBtnIcon = document.querySelector('.mnav__close-btn-icon')

const navOpenedClass = 'left-0';
const navClosedClass = '-left-[300px]';
const arrowLeftClass = 'ri-arrow-left-s-line';
const arrowRightClass = 'ri-arrow-right-s-line';

closeBtn.addEventListener('click', ()=> {
    mobileNav.classList.toggle(navOpenedClass);
    mobileNav.classList.toggle(navClosedClass);

    closeBtnIcon.classList.toggle(arrowLeftClass);
    closeBtnIcon.classList.toggle(arrowRightClass)
})

const swiper = new Swiper('.swiper', {
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable : true
    },
  });

  const faqItems = document.querySelectorAll('.faq__item');

  faqItems.forEach((item) => {
    const faqBtn = item.querySelector('.faq__btn');

    item.addEventListener('click', ()=> {
      const isOpen = item.classList.toggle('open');
      const iconClass = isOpen ? 'ri-subtract-fill' : 'ri-add-fill';
      const iconElement = faqBtn.querySelector('i');
      iconElement.classList = `${iconClass} text-2xl`;
    })

  })