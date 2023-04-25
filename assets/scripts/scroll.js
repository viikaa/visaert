const scroll = window.requestAnimationFrame || 
								function(callback) { 
									window.setTimeout(callBack, 1000 / 60);
								};
let elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop() {
	elementsToShow.forEach((element) => {
		if (isElementInViewport(element)) {
			element.classList.add('is-visible');
		}
		else {
			element.classList.remove('is-visible');
		}
	});
	scroll(loop);
}

loop();

function isElementInViewport(element) {
	let rect = element.getBoundingClientRect();
	return (
		(rect.top <= 0 && rect.bottom >= 0) ||
		(rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
		rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
		(rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
	);
}