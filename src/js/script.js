/* Typing animation */
var typed = new Typed('.typing', {
	strings: ['Web Developer', 'Frontend Developer', 'Backend Developer', 'Programer'],
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
	const sectionIndex = this.getAttribute('data-section-index');
	// console.log(sectionIndex);
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
document.addEventListener('mouseover', (e) => {
	// if (e.target.classList.contains('pruebas')) {
	if (e.target.classList.contains('fa-html5')) {
		console.log('html');
	}
	if (e.target.classList.contains('fa-css3-alt')) {
		console.log('css');
	}
	if (e.target.classList.contains('fa-square-js')) {
		console.log('js');
	}
	if (e.target.classList.contains('fa-gulp')) {
		console.log('gulp');
	}
	if (e.target.classList.contains('fa-php')) {
		console.log('php');
	}
	if (e.target.classList.contains('fa-database')) {
		console.log('bd');
	}
	// console.log(e.target.classList);
	if (e.target.classList.contains('fa-sass')) {
		const der = document.createElement('p');
		der.textContent = 'SASS';
		e.target.appendChild(der);
	}
	// }
});
