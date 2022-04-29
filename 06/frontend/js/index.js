// VARIABLES
const d = document;
const $h1 = d.createElement('h1');
$h1.textContent = 'Lista de tareas';

const $main = d.querySelector('main');
$main.appendChild($h1);


//   EVENTOS
d.addEventListener('DOMContentLoaded', () => {
 console.log('hola desde js');
  });


// FUNCIONES
const leerTareas = () => {
    fetch('http://localhost:4000/api/v1/todos')
.then((respuesta)=> respuesta.json())
.then((datos) => console.log('datos:',datos))
.catch((error) => console.log('error:', error));
};
