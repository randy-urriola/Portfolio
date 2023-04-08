/* Typing animation */
var typed = new Typed('.typing', {
	strings: [
		'Desarrollador Web',
		'Desarrollador Front-end',
		'Desarrollador Back-end',
		'Programador',
	],
	typeSpeed: 100,
	backSpeed: 60,
	backDelay: 1000,
	loop: true,
});

/* Aside */
const nav = document.querySelector('.nav'),
	navList = nav.querySelectorAll('li'),
	totalNavList = navList.length,
	allSection = document.querySelectorAll('.section'),
	totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
	const a = navList[i].querySelector('a');
	a.addEventListener('click', function () {
		removeBackSection();
		for (let j = 0; j < totalNavList; j++) {
			if (navList[j].querySelector('a').classList.contains('active')) {
				addBackSection(j);
			}
			navList[j].querySelector('a').classList.remove('active');
		}
		this.classList.add('active');
		showSection(this);
		if (window.innerWidth < 1200) {
			asideSectionTogglerBtn();
		}
	});
}

function removeBackSection() {
	for (let i = 0; i < totalSection; i++) {
		allSection[i].classList.remove('back-section');
	}
}

function addBackSection(num) {
	allSection[num].classList.add('back-section');
}

function showSection(element) {
	for (let i = 0; i < totalSection; i++) {
		allSection[i].classList.remove('active');
	}
	const target = element.getAttribute('href').split('#')[1];
	document.querySelector('#' + target).classList.add('active');
}

function updateNav(element) {
	for (let i = 0; i < totalNavList; i++) {
		navList[i].querySelector('a').classList.remove('active');
		const target = element.getAttribute('href').split('#')[1];
		if (target === navList[i].querySelector('a').getAttribute('href').split('#')[1]) {
			navList[i].querySelector('a').classList.add('active');
		}
	}
}

document.querySelector('.hire-me').addEventListener('click', function () {
	const sectionIndex = 1;
	showSection(this);
	updateNav(this);
	removeBackSection();
	addBackSection(sectionIndex);
});

const navToggleBtn = document.querySelector('.nav-toggler'),
	aside = document.querySelector('.aside');
navToggleBtn.addEventListener('click', () => {
	asideSectionTogglerBtn();
});
function asideSectionTogglerBtn() {
	aside.classList.toggle('open');
	navToggleBtn.classList.toggle('open');
	for (let i = 0; i < totalSection; i++) {
		allSection[i].classList.toggle('open');
	}
}

/* Portafolio popup */
document.addEventListener('click', (e) => {
	if (e.target.classList.contains('boton__item')) {
		togglePortfolioPopup();
		portfolioItemDetails(e.target.parentElement);
	}
});

function togglePortfolioPopup() {
	document.querySelector('.portfolio__popup').classList.toggle('open');
	document.addEventListener('scroll', function (e) {
		e.preventDefault();
	});
}
document
	.querySelector('.portfolio__popup-close')
	.addEventListener('click', togglePortfolioPopup);

function portfolioItemDetails(portfolioItem) {
	document.querySelector('.pp__thumbnail img').src =
		portfolioItem.querySelector('.work__img').src;
	document.querySelector('.subtitle span').innerHTML =
		portfolioItem.querySelector('.title__item').innerHTML;
	document.querySelector('.portfolio__body').innerHTML =
		portfolioItem.querySelector('.portfolio-details').innerHTML;
}

/* TODO: Crear una funcion para los elementos */
// const techno = document.getElementById('tech');
// if (techno) {
// 	techno.addEventListener
// }
document.addEventListener('mouseover', (e) => {
	if (e.target.classList.contains('fa-html5')) {
		crear('HTML', e.target);
	}
	if (e.target.classList.contains('fa-css3-alt')) {
		crear('CSS', e.target);
	}
	if (e.target.classList.contains('fa-square-js')) {
		crear('JavaScript', e.target);
	}
	if (e.target.classList.contains('fa-gulp')) {
		crear('Gulp', e.target);
	}
	if (e.target.classList.contains('fa-php')) {
		crear('PHP', e.target);
	}
	if (e.target.classList.contains('fa-database')) {
		crear('MySQL', e.target);
	}
	if (e.target.classList.contains('fa-sass')) {
		crear('SASS', e.target);
	}
});

function crear(nombre, elemento) {
	clearTech();
	const cuadro = document.createElement('p');
	cuadro.textContent = nombre;
	cuadro.classList.add('eliminar', 'ventana', 'shadow-dark');
	elemento.appendChild(cuadro);

	document.addEventListener('mouseout', function () {
		setTimeout(() => {
			cuadro.remove();
		}, 1000);
	});
}

function clearTech() {
	if (document.querySelector('.eliminar')) {
		document.querySelector('.eliminar').remove();
	}
}

function clear(referencia) {
	const limpiar = referencia.querySelector('.eliminar');
	if (limpiar) {
		limpiar.remove();
	}
}

/* Funcionamiento del formulario */
const email = {
	email: '',
	asunto: '',
	mensaje: '',
};
const inputEmail = document.getElementById('email');
const inputSubject = document.getElementById('asunto');
const inputMensaje = document.getElementById('mensaje');
const formulario = document.getElementById('formulario');
const btnSubmit = document.querySelector('#formulario button[type="submit"]');

inputEmail.addEventListener('blur', validar);
inputSubject.addEventListener('blur', validar);
inputMensaje.addEventListener('blur', validar);

function validar(e) {
	if (e.target.value.trim() === '') {
		mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
		email[e.target.name] = '';
		comprobarEmail();
		return;
	}

	if (e.target.id === 'email' && !validarEmail(e.target.value)) {
		mostrarAlerta('El email no es válido', e.target.parentElement);
		email[e.target.name] = '';
		if (e.target.value === '') {
			clear(e.target.parentElement);
		}

		comprobarEmail();
		return;
	}

	clear(e.target.parentElement);

	// Asignar los valores
	email[e.target.name] = e.target.value.trim().toLowerCase();

	// Comprobar el objeto de email
	comprobarEmail();
}

function mostrarAlerta(mensaje, referencia) {
	clear(referencia);
	const alerta = document.createElement('p');
	alerta.textContent = mensaje;
	alerta.classList.add('eliminar', 'alerta', 'shadow-dark');
	referencia.appendChild(alerta);
}

function validarEmail(email) {
	const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
	const resultado = regex.test(email);
	return resultado;
}

function comprobarEmail() {
	console.log(email);
	if (Object.values(email).includes('')) {
		btnSubmit.classList.add('disabled');
		btnSubmit.disabled = true;
		return;
	}
	btnSubmit.classList.remove('disabled');
	btnSubmit.disabled = false;
}
