import svg4everybody from 'svg4everybody';
import $ from 'jquery';

$(() => {
	svg4everybody();
	const slider = document.querySelector('.js-level');
	const triangle = document.querySelector('.js-level__triangle');
	let mouseDown = false;

	triangle.onmousedown = function () {
		mouseDown = true;
	};

	document.documentElement.onmouseup = function () {
		mouseDown = false;
	};

	slider.onmousemove = function (e) {
		if (e.target === slider) {
			const x = e.offsetX - 9; // 9 - половина ширины треугольника
			if (mouseDown) {
				triangle.style.left = x + 'px';
			}
		}
	};
});
