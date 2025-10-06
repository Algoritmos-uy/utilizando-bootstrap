

const toggleBtn = document.querySelector('#mode-selector');
const container = document.querySelector('body');
const main = document.querySelector('.main');
const btnCon = document.querySelector('.btn-con');
const footer = document.querySelector('footer');

  toggleBtn.addEventListener('click', function() {
  container.classList.toggle('dark-mode');
  main.classList.toggle('dark-mode');
  toggleBtn.classList.toggle('dark-mode');
  footer.classList.toogle('dark-mode');
});
/*
function buscar() {
  // Convertir a minúsculas para una búsqueda sin distinción entre mayúsculas y minúsculas
  var searchTerm = document.getElementById('searchInput').value.toLowerCase(); 

  // Recorrer todas las secciones
  var sections = document.getElementsByTagName('section');
  for (var i = 0; i < sections.length; i++) {
      var cards = sections[i].getElementsByClassName('card');

      // Recorrer todos los cards en cada sección
      for (var j = 0; j < cards.length; j++) {
          var titulo = cards[j].getElementsByTagName('h5')[0].innerText.toLowerCase();

          // Comprobar si el término de búsqueda está presente en el título
          if (titulo.includes(searchTerm)) {
              // Mostrar el card si hay coincidencia
              cards[j].style.display = 'block';
          } else {
              // Ocultar el card si no hay coincidencia
              cards[j].style.display = 'none';
          }
      }
  }
  document.getElementById('searchInput').value = '';
}
*/
// Función para manejar la búsqueda
function buscar() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase(); // Obtener el término de búsqueda
    const sections = document.querySelectorAll('section'); // Seleccionar todas las secciones

    sections.forEach(section => {
        const cards = section.querySelectorAll('.card'); // Seleccionar todas las tarjetas dentro de la sección
        let hasMatch = false;

        cards.forEach(card => {
            const title = card.querySelector('.card-title').innerText.toLowerCase(); // Obtener el título de la tarjeta
            if (title.includes(searchTerm)) {
                card.style.display = 'block'; // Mostrar la tarjeta si hay coincidencia
                hasMatch = true;
            } else {
                card.style.display = 'none'; // Ocultar la tarjeta si no hay coincidencia
            }
        });

        // Mostrar u ocultar la sección según si tiene coincidencias
        section.style.display = hasMatch ? 'block' : 'none';
    });

    document.getElementById('searchInput').value = ''; // Limpiar el campo de búsqueda
}