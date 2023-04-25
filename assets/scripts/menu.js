const menuIcon = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('.main-menu.mobile');
menuIcon.addEventListener('click', () => {
	if (!mobileMenu.classList.contains('present')) {
		mobileMenu.classList.add('present');
	} else {
		mobileMenu.classList.remove('present');
	}
});