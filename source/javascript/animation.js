//Contador main
function animateCounter(id, start, end, duration) {
    const element = document.getElementById(id);
    const range = end - start;
    let current = start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));

    const timer = setInterval(() => {
        current += increment;
        element.textContent = current;
        if (current == end) {
            clearInterval(timer);
            element.style.transform = "scale(1.1)"; // Efecto de escala al finalizar
            setTimeout(() => element.style.transform = "scale(1)", 300); // Vuelve al tamaño normal
        }
    }, stepTime);
}

// Inicia la animación cuando la página se carga
window.onload = function() {
    animateCounter("cont", 0, 100, 2000); // 100 clientes satisfechos en 2 segundos
    animateCounter("cont1", 0, 50, 2000); // 50 industrias atendidas en 2 segundos
    animateCounter("cont2", 0, 30, 2000); // 30 cuentas regionales en 2 segundos
    animateCounter("cont3", 0, 150, 2000); // 150 campañas realizadas en 2 segundos
};


function showContent(index) {
  // Ocultar todos los contenidos y desactivar todas las imágenes
  document.querySelectorAll('.grid--title-p').forEach((content) => {
      content.classList.remove('active');
  });
  document.querySelectorAll('.imagen--servicios > img').forEach((img) => {
      img.classList.remove('active');
  });

  // Remover la clase activa de todos los títulos
  document.querySelectorAll('.grid--title > h3').forEach((title) => {
    title.classList.remove('active-title');
});
  // Mostrar el contenido y la imagen correspondientes al índice
  document.getElementById(`content${index}`).classList.add('active');
  document.getElementById(`imagen${index}`).classList.add('active');

    // Agregar la clase activa al título correspondiente
    document.querySelectorAll('.grid--title > h3')[index].classList.add('active-title');
}


document.addEventListener('DOMContentLoaded', function() {
  const blocks = document.querySelectorAll('.block');

  blocks.forEach(block => {
      block.addEventListener('click', () => {
          blocks.forEach(b => {
              if (b !== block) {
                  b.classList.remove('active');
              }
          });

          block.classList.toggle('active');
      });
  });
});

// Galeria
function showImage(imageClass) {
    const allImages = document.querySelectorAll('.gallery-img');
    allImages.forEach(img => img.classList.remove('visible'));
    
    const image = document.querySelector(`.${imageClass}`);
    image.classList.add('visible');
}

function hideImage(imageClass) {
    const image = document.querySelector(`.${imageClass}`);
    image.classList.remove('visible');
}
