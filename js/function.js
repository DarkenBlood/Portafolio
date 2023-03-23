
//Cursor
function isTouchDevice() {
	return (('ontouchstart' in window) ||
	(navigator.maxTouchPoints > 0) ||
	(navigator.msMaxTouchPoints > 0));
}

const isTouch = isTouchDevice();

if (!isTouch){
	// Ceja ojo
	const miniCeja = document.getElementById('mini-ceja');
	const miniPunto = document.getElementById('mini-punto');

	// Cursor
	const cursorEl = document.getElementById('cursor__container');
	const isClickedClass = 'is-clicked';
	const isHiddenClass = 'is-hidden';
	const isLinkHoveredClass = 'is-link-hovered';
	const hasCustomCursorClass = 'has-custom-cursor';

	const addEventListeners = () => {
		document.addEventListener("mousemove", onMouseMove);
		document.addEventListener("mousedown", onMouseDown);
		document.addEventListener("mouseup", onMouseUp);
		document.addEventListener("mouseenter", onMouseEnter);
		document.addEventListener("mouseleave", onMouseLeave);
		handleLinkHoverEvents();
	};

	const onMouseMove = (e) => {
		// https://css-tricks.com/updating-a-css-variable-with-javascript/
		cursorEl.style.setProperty('--cursor-x', e.clientX + "px");
		cursorEl.style.setProperty('--cursor-y', e.clientY + "px");
	};

	const onMouseDown = () => {
		cursorEl.classList.add(isClickedClass);
	};

	const onMouseUp = () => {
		cursorEl.classList.remove(isClickedClass);
	};

	const onMouseEnter = () => {
		cursorEl.classList.remove(isHiddenClass);
	};

	const onMouseLeave = () => {
		cursorEl.classList.add(isHiddenClass);
	};

	const handleLinkHoverEvents = () => {
		document.querySelectorAll('a, button, input, textarea, .checkbox__container, .mini-ojo, .punto, .idioma__container').forEach((el) => {
			el.addEventListener("mouseover", () => {
				cursorEl.classList.add(isLinkHoveredClass);
				miniCeja.classList.add('active-ceja');
				miniPunto.classList.add('active-punto');
			  });
			  el.addEventListener("mouseout", () => {
				cursorEl.classList.remove(isLinkHoveredClass);
				miniCeja.classList.remove('active-ceja');
				miniPunto.classList.remove('active-punto');
			  });
			});
	};

	addEventListeners();
	document.body.classList.add(hasCustomCursorClass);
}






//Checkbox
const body = document.body;
const checkbox = document.getElementById('theme');
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
	body.classList.add(savedTheme);
	checkbox.checked = savedTheme === 'light-theme';
	if (savedTheme === 'default-theme') {
	  localStorage.removeItem('theme');
	  checkbox.setAttribute('checked', true);

	} else {
		checkbox.removeAttribute('checked');
	}
} else {
	localStorage.setItem('theme', 'dark-theme');
	body.classList.add('dark-theme');
}

checkbox.addEventListener('change', () => {
  if (!checkbox.checked) {
	//Body dark
	body.classList.replace('light-theme', 'dark-theme');
    localStorage.setItem('theme', 'dark-theme');
	
  } else {
	//Body light
    body.classList.replace('dark-theme', 'light-theme');
    localStorage.setItem('theme', 'light-theme');
	checkbox.setAttribute('checked', true);
  }
});





//Ojo - movimiento
const punto = document.querySelector('.mini-punto');

if (punto) {
  document.onmousemove = function(event){
    const x = event.clientX * 100 / window.innerWidth + '%';
    const y = event.clientY * 100 / window.innerHeight + '%';

    punto.style.left = x;
    punto.style.top = y;
    punto.style.transform = `translate3d(-${x}, -${y}, 0)`;
  }
}

// 
// Ojo - Aparición
const miniOjo = document.querySelector('.caja-ojo');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 500) {
	miniOjo.classList.replace('caja-ojo-oculto', 'caja-ojo-visible');
  } else {
	miniOjo.classList.replace('caja-ojo-visible', 'caja-ojo-oculto');
  }
});


// Sonido
const audio = document.getElementById('audio');
const divSonido = document.getElementById('div-sonido');

divSonido.addEventListener('click', function() {
  audio.play();
});


// Nombre de la pestaña
const defaultTitle = document.title;
const blurTitle = '¡No te vayas!';

window.addEventListener('blur', () => {
  document.title = blurTitle;
});

window.addEventListener('focus', () => {
  document.title = defaultTitle;
});


// Cambiar el ícono de la pestaña
// const iconUrls = [
// 	"img/centro.png",
// 	"img/derecha-1.png", "img/derecha-2.png", "img/derecha-3.png", "img/derecha-4.png",
// 	"img/derecha-3.png", "img/derecha-2.png", "img/derecha-1.png", "img/centro.png",
// 	"img/izquierda-1.png", "img/izquierda-2.png", "img/izquierda-3.png", "img/izquierda-4.png", 
// 	"img/izquierda-3.png", "img/izquierda-2.png", "img/izquierda-1.png", "img/centro.png"];

// function cambiarIcono() {
//     const index = 0;
//     setInterval(function() {
//         const link = document.querySelector("link[rel*='icon']") ||
// 		document.createElement('link');
//         link.type = 'image/png';
//         link.rel = 'icon';
//         link.href = iconUrls[index];
//         document.getElementsByTagName('head')[0].appendChild(link);
//         index++;
//         if (index == iconUrls.length) {
//             index = 0;
//         }
//     }, 100);
// }
// cambiarIcono();


// Carga
// const preloader = document.querySelector(".preloader");

// window.addEventListener("load", () => {
//     preloader.classList.add("fadeOut");
// });


window.addEventListener("load", () => {
	const preloader = document.querySelector(".preloader");
	const contenido = document.querySelector(".interno");
	setTimeout(() => {
		contenido.classList.remove("loading");
	  	preloader.classList.add("fadeOut");
	}, 2000);
});

// window.addEventListener("load", () => {
// 	const preloader = document.querySelector(".preloader");
// 	setTimeout(() => {
// 	  document.body.classList.remove("loading");
// 	  preloader.classList.add("fadeOut");
// 	  setTimeout(() => {
// 		preloader.style.display = "none";
// 	  }, 1000);
// 	}, 1000);
//   });


// #Inicio
const enlaceInicio = document.getElementById("ir-arriba");
	
enlaceInicio.addEventListener("click", function(event) {
	event.preventDefault();
	window.scrollTo({ top: 0 });
});


// #Sobre mí
// function cambiarContenido(texto) {
//     var contenido = document.querySelector('#sobre-mi .card p');
//     contenido.classList.add('oculto');
//     setTimeout(function() {
//       contenido.textContent = texto;
//       contenido.classList.remove('oculto');
//     }, 500);
// }

const botones = document.querySelectorAll('.boton');
const contenido = document.getElementById('contenido');

botones.forEach(boton => {
  boton.addEventListener('click', () => {
    // Cambiar el contenido según el botón seleccionado
    const contenidoId = boton.dataset.contenido;
    cambiarContenido(contenidoId);

    // Cambiar la clase activo en los botones
    botones.forEach(boton => boton.classList.remove('activo'));
    boton.classList.toggle('activo');
  });
});

function cambiarContenido(contenidoId) {
  // Cambiar el contenido según el ID
  // ...
}

const myAtropos = Atropos({
	el: '.my-atropos',
	// Parámetros
	// rotateLock: true,
	// rotateXMax: 15,
	// rotateYMax: 15,
	// shadow: true,
	// shadowOffset: 10,
	// shadowScale: 0.8,
	// highlight: false,
	// durationEnter: 600,
	// activeOffset: 60
	durationEnter: 500,
	rotateXMax: 35,
	rotateYMax: 35,
	highlight: false,
	rotateLock: true,
	alwaysActive: true,
	shadow: true,
	shadowOffset: 800,
	// shadowScale: 0.5,
});

const mySecondAtropos = Atropos({
    el: '.my-second-atropos',
	// Parámetros
	highlight: false,
	rotateLock: true,
	alwaysActive: true,
	shadow: true,
	shadowOffset: 20,
});

const myThirdAtropos = Atropos({
    el: '.my-third-atropos',
	// Parámetros
	highlight: false,
	rotateLock: true,
	alwaysActive: true,
	shadow: true,
	shadowOffset: 20,
});
