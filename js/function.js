
//Cursor
function isTouchDevice() {
	return (('ontouchstart' in window) ||
			  (navigator.maxTouchPoints > 0) ||
			  (navigator.msMaxTouchPoints > 0));
}

const isTouch = isTouchDevice();

if (!isTouch){

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
		document.querySelectorAll('a, button, .js-link, input[type="button"], input[type="submit"], .checkbox__container').forEach((el) => {
			el.addEventListener("mouseover", () => cursorEl.classList.add(isLinkHoveredClass) );
			el.addEventListener("mouseout", () => cursorEl.classList.remove(isLinkHoveredClass) );
		});
	};

	addEventListeners();
	document.body.classList.add(hasCustomCursorClass);
}






//Checkbox
const checkbox = document.getElementById('theme');
const body = document.getElementById('body');
const header = document.getElementById('header__nav');

checkbox.addEventListener('change', function() {
  if (this.checked) {
	//Body light
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");

	//Nav light
	header.classList.remove("dark-container");
	header.classList.add("light-container");
  } else {
	//Body dark
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");

	//Nav dark
	header.classList.remove("light-container");
	header.classList.add("dark-container");
  }
});





//Ojo - movimiento
let punto = document.getElementsByClassName("mini-punto");
document.onmousemove = function(){
  let x = event.clientX * 100 / window.innerWidth + "%"
  let y = event.clientY * 170 / window.innerHeight + "%"

  for(var i=0; i<2; i++){
    punto[i].style.left = x;
    punto[i].style.top = y;
    punto[i].style.transform = "translate(-"+x+", -"+y+")";
  }
}

//Ceja
// Agrega evento mouseover para mostrar la ceja
// document.querySelector('.boton').addEventListener('mouseover', function() {
// 	document.querySelector('.mini-ojo').classList.add('mostrar-ceja');
// });
  
// document.querySelector('.checkbox').addEventListener('mouseover', function() {
// 	document.querySelector('.mini-ojo').classList.add('mostrar-ceja');
//  });
  
// // Agrega evento mouseout para ocultar la ceja
// document.querySelector('.boton').addEventListener('mouseout', function() {
// 	document.querySelector('.mini-ojo').classList.remove('mostrar-ceja');
// });
  
// document.querySelector('.checkbox').addEventListener('mouseout', function() {
// 	document.querySelector('.mini-ojo').classList.remove('mostrar-ceja');
// });


//Ojo - aparición
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 500) {
        document.querySelector('.caja-ojo').classList.remove('caja-ojo-oculto');
        document.querySelector('.caja-ojo').classList.add('caja-ojo-visible');
    } else {
        document.querySelector('.caja-ojo').classList.remove('caja-ojo-visible');
        document.querySelector('.caja-ojo').classList.add('caja-ojo-oculto');
    }
});




//Sonido
document.getElementById("div-sonido").addEventListener("click", function() {
	document.getElementById("audio").play();
});





//Nombre de la pestaña
let prevTittle = document.title

window.addEventListener('blur', () => {
	prevTittle = document.title;
	document.title = '¡No te vayas :(!';
})

addEventListener('focus', () => {
	document.title = prevTittle;
})





//Cambiar el ícono de la pestaña

//Array de URLs con los diferentes iconos
var iconUrls = [
	"img/centro.png",
	"img/derecha-1.png", "img/derecha-2.png", "img/derecha-3.png", "img/derecha-4.png",
	"img/derecha-3.png", "img/derecha-2.png", "img/derecha-1.png", "img/centro.png",
	"img/izquierda-1.png", "img/izquierda-2.png", "img/izquierda-3.png", "img/izquierda-4.png", 
	"img/izquierda-3.png", "img/izquierda-2.png", "img/izquierda-1.png", "img/centro.png"];

//Función que cambia el icono cada 2 segundos
function cambiarIcono() {
    var index = 0;
    setInterval(function() {
        //Obtener el elemento de la pestaña
        var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.type = 'image/png';
        link.rel = 'icon';
        //Establecer la URL del icono
        link.href = iconUrls[index];
        //Reemplazar el icono actual con el nuevo
        document.getElementsByTagName('head')[0].appendChild(link);
        //Incrementar el índice para obtener el siguiente icono en el siguiente intervalo
        index++;
        //Si se llega al final del array de URLs, volver al principio
        if (index == iconUrls.length) {
            index = 0;
        }
    }, 100);
}

//Llamar a la función para iniciar el cambio de icono
cambiarIcono();





//Carga
const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
    preloader.classList.add("fadeOut");
});



//Carrusel flechas
var slideIndex = 1;
var dragging = false;
var dragStart = 0;
var dragEnd = 0;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

 function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("grid__item");
	if (n > slides.length) {
	  slideIndex = 1;
	}
	if (n < 1) {
	  slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
	  slides[i].style.display = "none";
	}
	slides[slideIndex - 1].style.display = "block";
}

document.addEventListener("mousedown", function(event) {
  dragging = true;
  dragStart = event.clientX;
});

document.addEventListener("mouseup", function(event) {
  if (dragging) {
    dragEnd = event.clientX;
    if (dragEnd < dragStart) {
      plusSlides(1);
    } else if (dragEnd > dragStart) {
      plusSlides(-1);
    }
  }
  dragging = false;
});


//Carusel
// $(".project-detail").slick({
// 	slidesToShow: 1,
// 	arrows: false,
// 	asNavFor: '.project-strip',
// 	autoplay: true,
// 	autoplaySpeed: 3000
// });

// $(".project-strip").slick({
// 	slidesToShow: 5,
// 	slidesToScroll: 1,
// 	arrows: false,
// 	asNavFor: '.project-detail',
// 	dots: false,
// 	infinite: true,
// 	centerMode: true,
// 	focusOnSelect: true
// });


//Atropos
// atroposJS parameters
// rotateLock: true,
// rotateXMax: 15,
// rotateYMax: 15,
// shadow: true,
// shadowOffset: 10,
// shadowScale: 0.8,
// highlight: false,
// durationEnter: 600,
// activeOffset: 60

// const myAtropos = Atropos({
//     el: '.my-atropos',
//     // rest of parameters
//     rotateLock: true,

//     // rotateXMax: 75,
//     // rotateYMax: 75,

//     shadow: true,
//     shadowOffset: 50,
//     // shadowScale: 5,
//     // highlight: false,
//     // durationEnter: 1000,
//     // activeOffset: 560
// });

// const mySecondAtropos = Atropos({
//     el: '.my-second-atropos',
//     // rest of parameters
//     rotateLock: true,

//     // rotateXMax: 75,
//     // rotateYMax: 75,

//     shadow: true,
//     shadowOffset: 50,
//     // shadowScale: 5,
//     // highlight: false,
//     // durationEnter: 1000,
//     // activeOffset: 560
// });

// const myThirdAtropos = Atropos({
//     el: '.my-third-atropos',
//     // rest of parameters
//     rotateLock: true,

//     // rotateXMax: 75,
//     // rotateYMax: 75,

//     shadow: true,
//     shadowOffset: 50,
//     // shadowScale: 5,
//     // highlight: false,
//     // durationEnter: 1000,
//     // activeOffset: 560
// });