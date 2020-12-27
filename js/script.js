//========================================================================= Анимация шкалы силы удара
// Горизонтальная линия
let scaleHorLineAnimation = anime({
	targets: '.scale__hr-line',
	translateY: -145,
	direction: 'alternate',
	loop: true,
	autoplay: false,
	easing: 'linear',
	duration: 300
});

// Заполняющаяся полоса
let scaleBarAnimation = anime({
	targets: '.scale__element',
	height: '100%', // -> from '0px' to '100%',
	direction: 'alternate',
	loop: true,
	autoplay: false,
	easing: 'linear',
	duration: 300
});

//=======================================================================  Объявление переменных  ============================================
// кнопки взаимодействия с игроком
let startButton = document.querySelector('.new-game__button');
let hitButton = document.querySelector('.hit__button');
let restartButton = document.querySelector('.restart__button');

// изображение молота
let hammer = document.querySelector('.hammer__hammer-image');

// варианты основных шкал
let measureScale1 = document.querySelector('.scale-1');
let measureScale2 = document.querySelector('.scale-2');
let measureScale3 = document.querySelector('.scale-3');
let measureScale4 = document.querySelector('.scale-4');
let measureScale5 = document.querySelector('.scale-5');
let measureScale6 = document.querySelector('.scale-6');
let measureScale7 = document.querySelector('.scale-7');
let measureScale8 = document.querySelector('.scale-8');
let measureScale9 = document.querySelector('.scale-9');

// заполняющаяся шкала силы удара
let scaleBar = document.querySelector('.scale__element');

// высота шкалы силы удара
let scaleBarHeight;

// изображение красной кнопки
let redButton = document.querySelector('.button__button-image');
let redButtonActive = document.querySelector('.button__button-image--active');

// сияние
let glowLayer = document.querySelector('.glow__layer-glow');

// текстовые подсказки
let paragraphStart = document.querySelector('.text-block__paragraph--start');
let paragraphHit = document.querySelector('.text-block__paragraph--hit');
let under100 = document.querySelector('.text-block__paragraph--under100');
let under130 = document.querySelector('.text-block__paragraph--under130');
let hit140 = document.querySelector('.text-block__paragraph--hit140');

// изображения робота
let robot1 = document.querySelector('.robot__image-1');
let robot2 = document.querySelector('.robot__image-2');
let robot3 = document.querySelector('.robot__image-3');

// Функция для выбора основной шкалы в зависимости от высоты шкалы силы удара
let chooseMeasure = () => {
	if (scaleBarHeight < 20) {
		measureScale2.classList.add('visible');
		under100.classList.remove('hidden');
		under130.classList.add('hidden');
		hit140.classList.add('hidden');
		robot1.classList.add('hidden');
		robot2.classList.remove('hidden');
		robot3.classList.add('hidden');
	};
	if (scaleBarHeight >= 20 && scaleBarHeight < 40) {
		measureScale3.classList.add('visible');
		under100.classList.remove('hidden');
		under130.classList.add('hidden');
		hit140.classList.add('hidden');
		robot1.classList.add('hidden');
		robot2.classList.remove('hidden');
		robot3.classList.add('hidden');
	};
	if (scaleBarHeight >= 40 && scaleBarHeight < 60) {
		measureScale4.classList.add('visible');
		under100.classList.remove('hidden');
		under130.classList.add('hidden');
		hit140.classList.add('hidden');
		robot1.classList.add('hidden');
		robot2.classList.remove('hidden');
		robot3.classList.add('hidden');
	};
	if (scaleBarHeight >= 60 && scaleBarHeight < 80) {
		measureScale5.classList.add('visible');
		under100.classList.remove('hidden');
		under130.classList.add('hidden');
		hit140.classList.add('hidden');
		robot1.classList.add('hidden');
		robot2.classList.remove('hidden');
		robot3.classList.add('hidden');
	};
	if (scaleBarHeight >= 80 && scaleBarHeight < 100) {
		measureScale6.classList.add('visible');
		under100.classList.add('hidden');
		under130.classList.remove('hidden');
		hit140.classList.add('hidden');
		robot1.classList.add('hidden');
		robot2.classList.remove('hidden');
		robot3.classList.add('hidden');
	};
	if (scaleBarHeight >= 100 && scaleBarHeight < 115) {
		measureScale7.classList.add('visible');
		under100.classList.add('hidden');
		under130.classList.remove('hidden');
		hit140.classList.add('hidden');
		robot1.classList.add('hidden');
		robot2.classList.remove('hidden');
		robot3.classList.add('hidden');
	};
	if (scaleBarHeight >= 115 && scaleBarHeight < 130) {
		measureScale8.classList.add('visible');
		under100.classList.add('hidden');
		under130.classList.remove('hidden');
		hit140.classList.add('hidden');
		robot1.classList.add('hidden');
		robot2.classList.remove('hidden');
		robot3.classList.add('hidden');
	};
	if (scaleBarHeight >= 130 && scaleBarHeight <= 140) {
		measureScale9.classList.add('visible');
		glowLayer.classList.add('visible');
		under100.classList.add('hidden');
		under130.classList.add('hidden');
		hit140.classList.remove('hidden');
		robot1.classList.add('hidden');
		robot2.classList.add('hidden');
		robot3.classList.remove('hidden');
	};
};

// Функция отслеживания изменения высоты scale__element
let resize_ob = new ResizeObserver(function (entries) {
	let rect = entries[0].contentRect;
	let height = rect.height;
	return scaleBarHeight = height;
});

// Функция запуска игры
let startGame = () => {
	paragraphStart.classList.add('hidden');
	paragraphHit.classList.remove('hidden');
	startButton.classList.add('hidden');
	hitButton.classList.remove('hidden');
	hammer.classList.add('hammer__hammer-0deg');
};


//=========================================================================  Запуск игры  ============================================
// Назначение начала анимации при нажатии на кнопку
document.querySelector('.start__new-game').onclick = scaleHorLineAnimation.play;
document.querySelector('.new-game__wrapper').onclick = scaleBarAnimation.play;

// При нажатии на кнопку запуска:
startButton.addEventListener('click', e => {
	// запускаем игру
	startGame();
	// запускаем отслеживание изменения высоты scale__element
	resize_ob.observe(document.querySelector(".scale__element"));
});



//=========================================================================  Нажатие на кнопку "УДАР!"  ============================================

// При нажатии на кнопку "УДАР!":
hitButton.addEventListener('click', e => {
	// останавливаем анимацию шкалы
	document.querySelector('.start__new-game').onclick = scaleHorLineAnimation.pause;
	document.querySelector('.hit__wrapper').onclick = scaleBarAnimation.pause;
	// останавливаем отслеживание изменения высоты scale__element
	resize_ob.unobserve(document.querySelector(".scale__element"));
	// округляем scaleBarHeight
	console.log(Math.floor(scaleBarHeight));
	// анимируем удар молота по кнопке
	hammer.classList.add('hammer__hammer-striker');
	// запускаем выбор основной шкалы
	chooseMeasure();
	// скрываем кнопку удара и текстовую подсказку
	hitButton.classList.add('hidden');
	paragraphHit.classList.add('hidden');
	// прячем красную кнопку и показываем нажатую
	redButton.classList.add('hidden');
	redButtonActive.classList.remove('hidden');
	// показываем кнопку рестарта
	restartButton.classList.remove('hidden');
});


//=========================================================================  Нажатие на кнопку рестарта  ============================================

// При нажатии на кнопку рестарта:
restartButton.addEventListener('click', e => {
	// возвращаем молот на исходную позицию, готовую к удару
	hammer.classList.remove('hammer__hammer-striker');
	// запускаем анимацию шкалы силы удара
	document.querySelector('.start__new-game').onclick = scaleHorLineAnimation.play;
	document.querySelector('.restart__wrapper').onclick = scaleBarAnimation.play;
	// прячем сияние
	glowLayer.classList.remove('visible');
	//скрываем кнопку рестарта
	restartButton.classList.add('hidden');
	// скрываем основные шкалы с отметками силы удара
	measureScale2.classList.remove('visible');
	measureScale3.classList.remove('visible');
	measureScale4.classList.remove('visible');
	measureScale5.classList.remove('visible');
	measureScale6.classList.remove('visible');
	measureScale7.classList.remove('visible');
	measureScale8.classList.remove('visible');
	measureScale9.classList.remove('visible');
	// показываем 1 изображение робота, скрываем 2,3
	robot1.classList.remove('hidden');
	robot2.classList.add('hidden');
	robot3.classList.add('hidden');
	// запускаем отслеживание изменения высоты шкалы силы удара
	resize_ob.observe(document.querySelector(".scale__element"));
	// скрываем текстовые подсказки после удара
	under100.classList.add('hidden');
	under130.classList.add('hidden');
	hit140.classList.add('hidden');
	// показываем текстовую подсказку перед ударом
	paragraphHit.classList.remove('hidden');
	// показываем красную кнопку и прячем нажатую
	redButton.classList.remove('hidden');
	redButtonActive.classList.add('hidden');
	// показываем кнопку удара
	hitButton.classList.remove('hidden');
});