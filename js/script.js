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

const titleContent = document.querySelector('.title__content'),
      blogItem = document.querySelectorAll('.blog__item'),
      blogContainer = document.querySelectorAll('.blog__container'),
      active = document.querySelector('.active');
      console.log(blogItem);
      
      function hideBlogContainer (){
        blogContainer.forEach(item  =>{
          item.classList.add('hide');
          item.classList.remove('show', 'grid');
        });
        blogItem.forEach(item =>{
          item.classList.remove('active');
        });
      }

      function showBlogContainer (i = 0){
        blogContainer[i].classList.add('show', 'grid');
        blogContainer[i].classList.remove('hide');
        blogItem[i].classList.add('blogItemActive');
      }

      hideBlogContainer();
      showBlogContainer();

      titleContent.addEventListener('click', (e) =>{
        const target = e.target;
        if(target && e.target.classList.contains('blog__item')){
          blogItem.forEach((item, idx) =>{
            if(item == target){
              hideBlogContainer();
              showBlogContainer(idx);
            }
          })
        }
      });

      const bars = document.querySelector('.fa-bars'),
      modal = document.querySelector('.nav');

      bars.addEventListener('click', () =>{
        modal.classList.toggle('bars')
      });
    });