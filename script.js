function remToPx(rem) {
	const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
	return rem * rootFontSize;
}
if (document.documentElement.clientWidth > 900) {
	const WIDTH_TOOLS_PANEL = document.querySelector('#tools').clientWidth - remToPx(6);
	document.querySelectorAll('#tools div h3').forEach(h3 => {
		let result = h3.clientWidth % (300 + remToPx(2));
		result = WIDTH_TOOLS_PANEL === h3.clientWidth ? result / 2 : result + 10;
		h3.style.setProperty('padding-left', `${result}px`);
	});
}
document.addEventListener('scroll', evt => {
	const menu = document.querySelector('.menu');
	if (scrollY >= 35) {
		menu.classList.add('sticky-menu');
	} else if (scrollY < 15) {
		menu.classList.remove('sticky-menu');
	}
});
document.querySelector('#menu').addEventListener('click', evt => {
	const menu = document.querySelector('.menu');
	if (menu.classList.contains('show')) {
		menu.classList.remove('show');
	} else {
		menu.classList.add('show');
	}
});

document.querySelector('#version').addEventListener('click', evt => {
	if (document.querySelector('#version').innerHTML === 'Completo') {
		document.querySelectorAll('.full').forEach(e => (e.style.display = 'none'));
		document.querySelector('#version').innerHTML = 'Resumo';
		return;
	}
	document.querySelector('#version').innerHTML = 'Completo';
	document.querySelectorAll('.full').forEach(e => (e.style.display = 'flex'));
	if (menu.classList.contains('show')) {
		menu.classList.remove('show');
	} else {
		menu.classList.add('show');
	}
});
