window.addEventListener('DOMContentLoaded', () =>{
    const loader = document.querySelector('.loader');
  
  setTimeout(() => {
    loader.style.opacity = 0.5;
  }, 2800);
  setTimeout(() => {
    loader.style.display = 'none';
  }, 3000)

  const contentTitle = document.querySelector('.content__title'),
        titleItem = document.querySelectorAll('.title__item'),
        workContainer = document.querySelectorAll('.work__container');

        function hideBlogContainer (){
          workContainer.forEach(item  =>{
            item.classList.add('hide');
            item.classList.remove('show', 'grid__work');
          });
        }

        function showBlogContainer (i = 0){
          workContainer[i].classList.add('show', 'grid__work');
          workContainer[i].classList.remove('hide');
        }

        hideBlogContainer();
        showBlogContainer();

      contentTitle.addEventListener('click', (e) =>{
        const target = e.target;
        if(target && e.target.classList.contains('title__item')){
          titleItem.forEach((item, idx) =>{
            if(item == target){
              hideBlogContainer();
              showBlogContainer(idx);
            }
          })
        }
      });

  });