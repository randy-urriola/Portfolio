/* Toggle Style Switcher */
const styleSwitcherToggle = document.querySelector('.style-switcher-toggler');
styleSwitcherToggle.addEventListener('click', () => {
	document.querySelector('.style-switcher').classList.toggle('open');
});

/* Theme Colors */
const toggleColors = document.getElementById('toggle-colors');
const rootStyles = document.documentElement.style;
toggleColors.addEventListener('click', (e) => {
	rootStyles.setProperty('--skin-color', e.target.dataset.color);
});

/* Eliminar el switcher cuando se de scroll */
window.addEventListener('scroll', () => {
	if (document.querySelector('.style-switcher').classList.toggle('open')) {
		document.querySelector('.style-switcher').classList.remove('open');
	}
});

/* Theme and Dark Mode */
const dayNight = document.querySelector('.day-night');
dayNight.addEventListener('click', () => {
	dayNight.querySelector('i').classList.toggle('fa-sun');
	dayNight.querySelector('i').classList.toggle('fa-moon');
	document.body.classList.toggle('dark');
});
window.addEventListener('load', () => {
	if (document.body.classList.contains('dark')) {
		dayNight.querySelector('i').classList.add('fa-sun');
	} else {
		dayNight.querySelector('i').classList.add('fa-moon');
	}
});
