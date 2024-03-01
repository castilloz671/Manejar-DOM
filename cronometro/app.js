const cronometro = document.getElementById('cronometro');
const botonInicioPausa = document.getElementById('boton-inicio-pausa');
const botonReiniciar = document.getElementById('boton-reiniciar');

let [horas, minutos, segundos, milisegundos] = [0, 0, 0, 0];

let intervaloDeTiempo;

let estadoCronometro = 'pausado';

function actualizarCronometro() {
  milisegundos++;

  if (milisegundos === 100) {
    milisegundos = 0;
    segundos++;

    if (segundos / 60 === 1) {
      segundos = 0;
      minutos++;
  
      if (minutos / 60 === 1) {
        minutos = 0;
        horas++;
      }
    }
  }

  const miliSegundosConFormato = asignarFormato(milisegundos);
  const segundosConFormato = asignarFormato(segundos);
  const minutosConFormato = asignarFormato(minutos);
  const horasConFormato = asignarFormato(horas);

  cronometro.innerText = `${horasConFormato}:${minutosConFormato}:${segundosConFormato}:${miliSegundosConFormato}`;
}

function asignarFormato(unidadDeTiempo) {
  return unidadDeTiempo < 10 ? '0' + unidadDeTiempo : unidadDeTiempo;
} 

botonInicioPausa.addEventListener('click', function() {
  if (estadoCronometro === 'pausado') {
    intervaloDeTiempo = window.setInterval(actualizarCronometro, 10);
    botonInicioPausa.innerHTML = '<i class="bi bi-pause-fill"></i>';
    botonInicioPausa.classList.remove('iniciar');
    botonInicioPausa.classList.add('pausar');
    estadoCronometro = 'andando';
  } else {
    window.clearInterval(intervaloDeTiempo);
    botonInicioPausa.innerHTML = '<i class="bi bi-play-fill"></i>';
    botonInicioPausa.classList.remove('pausar');
    botonInicioPausa.classList.add('iniciar');
    estadoCronometro = 'pausado';
  }
});

botonReiniciar.addEventListener('click', function () {
  window.clearInterval(intervaloDeTiempo);
  
  horas = 0;
  minutos = 0;
  segundos = 0;
  milisegundos = 0;

  // Reiniciar
  cronometro.innerText = '00:00:00:00';

  // Actualizar botones
  botonInicioPausa.innerHTML = '<i class="bi bi-play-fill"></i>';
  botonInicioPausa.classList.remove('pausar');
  botonInicioPausa.classList.add('iniciar');

  //Estado
  estadoCronometro = 'pausado';
});