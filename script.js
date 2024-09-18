document.querySelector('#menu').addEventListener('click', evt => {
	const menu = document.querySelector('.menu');
	if (menu.classList.contains('show')) {
		menu.classList.remove('show');
	} else {
		menu.classList.add('show');
	}
});

function showModal(url) {
	document.querySelector('#modal img').setAttribute('src', url);
	document.querySelector('#modal').setAttribute('class', 'show');
}
document
	.querySelectorAll('#projects aside')
	.forEach(p => p.addEventListener('click', evt => showModal(evt.target.getAttribute('src'))));

function closeModal() {
	document.querySelector('#modal').setAttribute('class', '');
}
document.querySelectorAll('#modal, body > aside button').forEach(p =>
	p.addEventListener('click', evt => {
		if (evt.target.getAttribute('id') === 'modal') {
			closeModal();
		}
	})
);

// Função para detectar quando o elemento entra na viewport
function isElementInViewport(el) {
	const rect = el.getBoundingClientRect();
	return (
		rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
		rect.bottom >= 0
	);
}

// Função para adicionar a classe "show" às seções que estão visíveis
function showElementsOnScroll(evt) {
	const sections = document.querySelectorAll('.hidden');

	sections.forEach(section => {
		if (isElementInViewport(section)) {
			section.classList.add('show');
			section.classList.remove('hidden'); // Remove a classe "hidden" após animar
		}
	});
	changeBackgroundBody(evt);
}

function showSection(id) {
	document.querySelector(id).classList.add('show');
	document.querySelector(id).classList.remove('hidden');
}
window.addEventListener('load', showSection('#about'));

const main = document.querySelector('body > main');
main.addEventListener('scroll', showElementsOnScroll);

document.addEventListener('mousemove', function (e) {
	const x = e.clientX - 100; // Ajusta o centro da luz
	const y = e.clientY - 100;

	// Atualiza a posição da "lanterna" na pseudo-classe "::after"
	main.style.setProperty('--mouseX', `${x}px`);
	main.style.setProperty('--mouseY', `${y}px`);
});

// Aplica as coordenadas ao "::after"
document.addEventListener('mousemove', function (e) {
	const x = e.clientX;
	const y = e.clientY;

	main.style.background = `radial-gradient(600px at ${x}px ${y}px, #cfafff35, transparent 80%)`;
});
const body = document.querySelector('body');
function changeBackgroundBody(evt) {
	console.log(evt.target.scrollTop);
	if (
		(evt.target.scrollTop < 600 || evt.target.scrollTop > 3000) &&
		!body.classList.contains('with-img')
	) {
		body.classList.add('with-img');
		return;
	}

	if (
		evt.target.scrollTop >= 600 &&
		evt.target.scrollTop <= 3000 &&
		body.classList.contains('with-img')
	) {
		body.classList.remove('with-img');
	}
}
function showMore(wrapper, wrapper2 = undefined) {
	document.querySelectorAll(`#${wrapper} .optional`).forEach(e => e.classList.remove('full'));
	if (wrapper2) {
		document.querySelectorAll(`#${wrapper2}.optional`).forEach(e => e.classList.remove('full'));
	}
	document.querySelectorAll(`#${wrapper} .btn-link`).forEach(e => e.classList.add('full'));
}
const buttonLanguage = document.querySelector(`#language`);
function changeLanguage() {
	if (buttonLanguage.classList.contains('enus')) {
		body.classList.remove('enus');
		body.classList.add('ptbr');
		buttonLanguage.classList.add('ptbr');
		buttonLanguage.classList.remove('enus');
		return;
	}
	body.classList.add('enus');
	body.classList.remove('ptbr');
	buttonLanguage.classList.remove('ptbr');
	buttonLanguage.classList.add('enus');
}
const buttonTheme = document.querySelector(`#theme`);
function changeTheme() {
	if (buttonTheme.classList.contains('dark')) {
		body.classList.remove('dark');
		body.classList.add('light');
		buttonTheme.classList.remove('fa-sun');
		buttonTheme.classList.remove('dark');
		buttonTheme.classList.add('fa-moon');
		buttonTheme.classList.add('light');
		return;
	}
	body.classList.add('dark');
	body.classList.remove('light');
	buttonTheme.classList.remove('fa-moon');
	buttonTheme.classList.remove('light');
	buttonTheme.classList.add('fa-sun');
	buttonTheme.classList.add('dark');
}
