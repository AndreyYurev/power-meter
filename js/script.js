let scaleHorLineAnimation = anime({
	targets: '.scale__hr-line',
	translateY: -145,
	direction: 'alternate',
	loop: true,
	autoplay: false,
	easing: 'easeInOutSine'
});
let scaleBarAnimation = anime({
	targets: '.scale__element',
	height: '100%', // -> from '0px' to '100%',
	direction: 'alternate',
	loop: true,
	autoplay: false,
	easing: 'easeInOutQuad'
});
document.querySelector('.new-game__button').onclick = scaleHorLineAnimation.play;
document.querySelector('.start__new-game').onclick = scaleBarAnimation.play;

let startButton = document.querySelector('.new-game__button');
let newGameText = document.querySelector('.new-game__text');
let hitText = document.querySelector('.hit__text');

const startGame = () => {
	startButton.classList.add('hit__button');
	newGameText.classList.add('new-game__text--hidden');
	hitText.classList.remove('hit__text--hidden');
};
startButton.addEventListener('click', e => {
	startGame();
});