// const contenedor = document.getElementById('contenedor');
// const titulo = document.getElementById('titulo');
// console.log(titulo.tagName);

// const toppings = document.getElementsByClassName('topping');
// console.log(toppings[0].id);

// const misToppings = document.getElementsByTagName('li');
// console.log(misToppings);

// const toppingsFondoMarron = document.getElementsByClassName('fondo-marron');
// console.log(toppingsFondoMarron);

// const aceitunas = document.querySelector('ul li:not(.fondo-marron)');
// console.log(aceitunas);

//const toppinsNaranja = document.querySelectorAll('.topping.fondo-naranja');
//console.log(toppinsNaranja);

/*const primerTopping = document.querySelector('.topping');

primerTopping.style.backgroundColor = 'blue';
primerTopping.style.color = '#6dff00';
primerTopping.style.textTransform = 'uppercase';*/




//---------------------------------Acceder al texto

/*const listaDeToppings = document.getElementById('lista-toppings');

console.log('> innerText');
console.log(listaDeToppings.innerText);

console.log('> textContent');
console.log(listaDeToppings.textContent);

console.log('> innerHTML');
console.log(listaDeToppings.innerHTML);*/




//---------------------------------Modificar el texto
/*
const titulo = document.getElementById('titulo');

titulo.innerText = 'Mis Toppings Favoritos';*/




//---------------------------------------Atributos
/*
const enlace = document.getElementsByTagName('a');

console.log(enlace[0].getAttribute('href'));
console.log(enlace[0].setAttribute('href', 'https://www.freecodecamp.org'));*/




//--------------------------------------Clases
/*
const primerTopping = document.querySelector('.topping');

//primerTopping.classList.add('mi-clase');
console.log(primerTopping.classList.contains('fondo-marron'));
primerTopping.classList.remove('topping');

console.log(primerTopping.classList);*/



//-------------------------------- Crear un elemento -------------------------------
/*
const listaDeToppings = document.getElementById('lista-toppings'); // Obtener IDS

const toppingNuevo = document.createElement('li'); // Crear elementos HTML

toppingNuevo.classList.add('topping', 'fondo-marron'); //Agregar clases

toppingNuevo.innerText = "Queso Extra"; // Agregar texto

listaDeToppings.append(toppingNuevo); // Agregar nodo dentro de un elemento

//listaDeToppings.appendChild('Hola Mundo'); Agregar nodo dentro de un elemento

toppingNuevo.remove(); // Remover el nodo dentro de un elemento*/



// ---------------------- Recorrer el DOM ------------------------------------
/*
const listaDeToppings = document.getElementById('lista-toppings');

//parentElement, parentNode, children, firstElement, lastElement, firstChild, lastChild
// lastElementChild, firstElementChild, previousElementSibling,nextElementSibling
//nextSibling,previousSibling

console.log(listaDeToppings.previousSibling);*/


//--------- Eventos del DOM (Cursor, Teclado son los mas usados)-------------

// Elemento target, trigger, Event Handler y Event Listener

const toppings = document.getElementsByClassName('topping');

/*function mostrarClick(e){
    console.log(e.target.innerText);
}*/


for (const topping of toppings) {
    topping.addEventListener('click', (e) => {
        console.log(e.target.innerText);
    });
}