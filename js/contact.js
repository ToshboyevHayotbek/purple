window.addEventListener('DOMContentLoaded', () =>{
    const loader = document.querySelector('.loader');
  
  setTimeout(() => {
    loader.style.opacity = 0.5;
  }, 2800);
  setTimeout(() => {
    loader.style.display = 'none';
  }, 3000)

  
  });