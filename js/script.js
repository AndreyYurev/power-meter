// ======================================================================== Анимация шкалы силы удара
// Горизонтальная линия
let scaleHorLineAnimation = anime({
	targets: '.scale__hr-line',
	translateY: -145,
	direction: 'alternate',
	loop: true,
	autoplay: false,
	easing: 'linear',
	duration: 1000
});

// Заполняющаяся полоса
let scaleBarAnimation = anime({
	targets: '.scale__element',
	height: '100%', // -> from '0px' to '100%',
	direction: 'alternate',
	loop: true,
	autoplay: false,
	easing: 'linear',
	duration: 1000
});

// Назначение начала анимации при нажатии на кнопку
document.querySelector('.new-game__button').onclick = scaleHorLineAnimation.play;
document.querySelector('.start__new-game').onclick = scaleBarAnimation.play;



// ======================================================================== Запуск игры

// Объявление переменных
let paragraphStart = document.querySelector('.text-block__paragraph--start');
let paragraphHit = document.querySelector('.text-block__paragraph--hit');
let startButton = document.querySelector('.new-game__button');
let hitButton = document.querySelector('.hit__button');
let hammer = document.querySelector('.hammer__hammer-image');

// Функция запуска игры
const startGame = () => {
	paragraphStart.classList.add('paragraph--hidden');
	paragraphHit.classList.remove('paragraph--hidden');
	startButton.classList.add('button--hidden');
	hitButton.classList.remove('button--hidden');
	hammer.classList.add('hammer__hammer-0deg');
};
startButton.addEventListener('click', e => {
	startGame();
});



// ======================================================================== Нажатие на кнопку "УДАР!"

// Объявление переменных
let measureScale1 = document.querySelector('.scale-1');
let measureScale2 = document.querySelector('.scale-2');
let measureScale3 = document.querySelector('.scale-3');
let measureScale4 = document.querySelector('.scale-4');
let measureScale5 = document.querySelector('.scale-5');
let measureScale6 = document.querySelector('.scale-6');
let measureScale7 = document.querySelector('.scale-7');
let measureScale8 = document.querySelector('.scale-8');
let measureScale9 = document.querySelector('.scale-9');
let scaleBar = document.querySelector('.scale__element');
let scaleBarHeight

// Функция отслеживания изменения высоты scale__element
let resize_ob = new ResizeObserver(function (entries) {
	let rect = entries[0].contentRect;
	let height = rect.height;
	return scaleBarHeight = height;
});

// запускаем отслеживание изменения высоты scale__element
resize_ob.observe(document.querySelector(".scale__element"));

// При нажатии на кнопку "УДАР!":
hitButton.addEventListener('click', e => {

	// останавливаем анимацию шкалы
	document.querySelector('.new-game__wrapper').onclick = scaleHorLineAnimation.pause;
	document.querySelector('.start__new-game').onclick = scaleBarAnimation.pause;

	// останавливаем отслеживание изменения высоты scale__element
	resize_ob.unobserve(document.querySelector(".scale__element"));

	// округляем scaleBarHeight
	console.log(Math.floor(scaleBarHeight));

	/* При определенных значениях scaleBarHeight удаляется
	класс scale--hidden у нужного слоя основной шкалы */

	if (scaleBarHeight < 20) {
		measureScale2.classList.remove('scale--hidden');
	};
	if (scaleBarHeight >= 20 && scaleBarHeight < 40) {
		measureScale3.classList.remove('scale--hidden');
	};
	if (scaleBarHeight >= 40 && scaleBarHeight < 60) {
		measureScale4.classList.remove('scale--hidden');
	};
	if (scaleBarHeight >= 60 && scaleBarHeight < 80) {
		measureScale5.classList.remove('scale--hidden');
	};
	if (scaleBarHeight >= 80 && scaleBarHeight < 100) {
		measureScale6.classList.remove('scale--hidden');
	};
	if (scaleBarHeight >= 100 && scaleBarHeight < 115) {
		measureScale7.classList.remove('scale--hidden');
	};
	if (scaleBarHeight >= 115 && scaleBarHeight < 130) {
		measureScale8.classList.remove('scale--hidden');
	};
	if (scaleBarHeight >= 130 && scaleBarHeight < 140) {
		measureScale9.classList.remove('scale--hidden');
	};
});


