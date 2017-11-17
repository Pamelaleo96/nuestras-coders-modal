var selectPromo = document.getElementById('select-promo'); // creamos una variable para traer el elemento select de html
var imagesContainer = document.getElementById('images-container'); // creamos una variable para traer el elemento div de html

imagesContainer.addEventListener('click', showModal);
// Creamos el evento
selectPromo.addEventListener('change', showPromo);

// Realizamos una estructura de Datos mediante (arrays) para llamar a nuestras imagenes por carpetas
// arrays de las promociones: alumnas
var arr4Chile = ['anais-araya', 'andrea-miranda', 'berenisse-rios', 'caterina-da-silva', 'daniela-sanchez', 'francisca-ojeda', 'katerine-sandoval'];
var arr5Lima = ['andrea-cabrera', 'ariadna-izaguirre', 'carito-juarez', 'cristy-castro', 'karol-orrillo', 'paola-ortiz', 'teresa-lara'];
var arr6Lima = ['arantza-burga', 'daguiana-revoredo', 'elizabeth-condori', 'grecia-rayme', 'janine-vega', 'michelle-more', 'mishel-velasquez', 'rosario-felix'];
//  Constantes de ruta para el directorio
var chile4 = '4-chile';
var lima5 = '5-lima';
var lima6 = '6-lima';
//  metodo que nuestra las coders
//  primer parametro un array de nombres
//  segundo parametro un str que indica la promo
function showCoders(arr, promo) {
  for (var i = 0; i < arr.length; i++) {
    createImage(promo, arr[i]);
  }
};

// metodo que crea una imagen
// primer parametro es un str que indica la promo
// segundo parametro un str que indica el nombre
function createImage(promo, nombre) {
  // traemos a la imagen de una coder  desde js
  var img = document.createElement('img');
  // agregamos atributo a nuestro elemento img creado para asignarle la ruta de la img
  img.setAttribute('src', 'assets/images/' + promo + '/' + nombre + '.jpg');
  // Asignar su padre al hijo creado (img)
  imagesContainer.appendChild(img);
}

/* Muestra todas las imagenes dependiendo a la carpeta que escogio el usuario hasta
que encuentre true y si no hay ninguna opcion dentro de switch se ejecuta por defecto muestrame todas las coders*/
function showPromo(event) {
  switch (true) {
  case event.target.value === '4chile': // operador boleado === enviara tru o false
    imagesContainer.textContent = '';
    showCoders(arr4Chile, chile4);
    break;
  case event.target.value === '5lima':
    imagesContainer.textContent = '';
    showCoders(arr5Lima, lima5);
    break;
  case event.target.value === '6lima':
    imagesContainer.textContent = '';
    showCoders(arr6Lima, lima6);
    break;
  default:
    imagesContainer.textContent = '';            
    showCoders(arr4Chile, chile4);
    showCoders(arr5Lima, lima5);
    showCoders(arr6Lima, lima6);
  }
}

showCoders(arr4Chile, chile4);
showCoders(arr5Lima, lima5);
showCoders(arr6Lima, lima6);

function showModal(event) {
  var modal = document.createElement('div');
  modal.style.position = 'fixed';
  modal.style.background = 'rgba(0, 0, 0, 0.9)';
  modal.style.top = '0';
  modal.style.left = '0';
  modal.style.width = '100%';
  modal.style.height = '100%';

  // agregamos la imagen
  modal.appendChild(event.target);
  // para centrar la imagen al medio de la imagen, horizontal y verticalmente
  event.target.style.margin = window.innerHeight / 3 + 'px auto'; // window.innerHide -> lo que se ve en el contenido lo divide entre dos el punto medio calc(50% + 35)
  event.target.style.display = 'block' ;

  document.body.appendChild(modal);
  // eliminamos el modal -- el evento tiene la imagen en este momento
  modal.addEventListener('click', function(event) {
    event.target.parentElement.removeChild(event.target);
  });
}

// crear un elemento para que la chica al escoger nosea eliminada

 
