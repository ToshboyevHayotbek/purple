window.addEventListener('DOMContentLoaded', () =>{
    const loader = document.querySelector('.loader');
  
  setTimeout(() => {
    loader.style.opacity = 0.5;
  }, 2800);
  setTimeout(() => {
    loader.style.display = 'none';
  }, 3000)

  const span = document.querySelector(".number"),
          input = document.querySelector(".input");

          input.addEventListener("input", () =>{
            span.textContent = input.value;
          });

          const bars = document.querySelector('.fa-bars'),
      modal = document.querySelector('.nav');

      bars.addEventListener('click', () =>{
        modal.classList.toggle('bars')
      });

});  