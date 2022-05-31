const modalImagen = document.querySelector('#modal-imagen');            // Selecciona el elemento que vamos a usar


if(modalImagen) {
    modalImagen.addEventListener('show.bs.modal', function(event){          // Funcion usada para cuando se muestre la imagen
        const enlace = event.relatedTarget;                                 // Targetear el item y guarda donde se dio click
        const rutaImagen = enlace.getAttribute('data-bs-imagen');           // Obtiene el la propiedad el atributo
        
        // Construir la imagen
        const imagen = document.createElement('IMG');                       // Crea el elemento img
        imagen.src = `img/${rutaImagen}.jpg`;                               
        imagen.classList.add('img-fluid');
        imagen.alt = 'imagen galeria';
    
        const contenidoModal = document.querySelector('.modal-body');       // Se selecciona la clase  donde se añade el elemento
        contenidoModal.appendChild(imagen);                                 // Se agrega un hijo en el div con la clase modal-body
    });
    
    modalImagen.addEventListener('hidden.bs.modal', function() {          // Funcion que limpia el .modal-body despues de cerrar la imagen
        const contenidoModal = document.querySelector('.modal-body');
        contenidoModal.textContent = '';
    
    });
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()