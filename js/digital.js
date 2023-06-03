window.addEventListener('DOMContentLoaded', () =>{
    const loader = document.querySelector('.loader');
  
  setTimeout(() => {
    loader.style.opacity = 0.5;
  }, 2800);
  setTimeout(() => {
    loader.style.display = 'none';
  }, 3000)

  const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay:{
        delay: 3000,
        disableOnInteraction: false,
    },
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
});  