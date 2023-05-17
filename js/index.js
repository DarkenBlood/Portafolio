
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



// Ojo - Aparición
const miniOjo = document.querySelector('.caja-ojo');


window.addEventListener('scroll', function() {
	if (window.innerWidth > 830) {
		if (window.pageYOffset > 500) {
			miniOjo.classList.replace('caja-ojo-oculto', 'caja-ojo-visible');
		} else {
			miniOjo.classList.replace('caja-ojo-visible', 'caja-ojo-oculto');
		}
	} else {
		miniOjo.classList.replace('caja-ojo-oculto', 'caja-ojo-visible');
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


// Carga de la página
const loadTime = performance.now();
const loadTimeSeconds = Math.round(loadTime) / 1000;
let delay = getComputedStyle(document.documentElement).getPropertyValue('--delay');

window.addEventListener("load", () => {
	const preloader = document.querySelector(".preloader");
	const contenido = document.querySelector(".interno");
	contenido.classList.remove("loading");
	preloader.classList.add("fadeOut");

	delay = parseFloat(delay);
	console.log("Delay ="+delay);
	delay += loadTimeSeconds;
	console.log("Delay con el loadtimeSECOND ="+delay);
	document.documentElement.style.setProperty('--delay', delay + 's');
});

// #Inicio
const enlaceInicio = document.getElementById("ir-arriba");
	
enlaceInicio.addEventListener("click", function(event) {
	event.preventDefault();
	window.scrollTo({ top: 0 });
});


const botones = document.querySelectorAll('.boton');
const paneles = document.querySelectorAll('.panel');
botones.forEach((boton, index) => {
	boton.addEventListener('click', () => {
    	// Ocultar los paneles que no correspondan al botón
		paneles.forEach(panel => {
			if (panel.id === `panel-${index}`) {
				panel.style.display = 'flex';
			} else {
				panel.style.display = 'none';
			}
		});
		// Cambiar la clase activa del botón
		botones.forEach(b => {
			b.classList.remove('activo');
		});
		boton.classList.add('activo');
	});
});

// Botón CV
const descargarCV = document.querySelector('.cv');

descargarCV.addEventListener('click', descargarArchivo);

function descargarArchivo() {
	let enlaceDescarga = document.createElement('a');
	enlaceDescarga.href = 'assets/CV.pdf';
	enlaceDescarga.download = 'CV-Gabriel_Johann_Rojas.pdf';
	enlaceDescarga.click();
}

// Bordeado
const boton = document.querySelector('.a-atropos');
const borde = document.querySelector('.bordeado');
const bordeArriba = document.querySelector('.bordeado-arriba');
const bordeAbajo = document.querySelector('.bordeado-abajo');


// Nav Responsive
const navActivation = document.querySelector('.nav-activation');
const navResponsive = document.querySelector('.nav-responsive');
const botonNavResponsive = document.querySelectorAll('.nav__item-responsive');

function toggleMenu() {
	navResponsive.classList.toggle('nav-active');
	borde.classList.toggle('bordeado-activo');
	console.log("sds");
}

navActivation.addEventListener('click', toggleMenu);



botonNavResponsive.forEach((botonNav, index) => {
	botonNav.addEventListener('click', toggleMenu);
});
