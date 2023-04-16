const nav = document.querySelector(".nav");
const navBtn = document.querySelector(".burger-btn");
const allNavItems = document.querySelectorAll(".nav__item");
const footerYear = document.querySelector(".footer__year");
const sections = document.querySelectorAll(".section");
const navBtnBars = document.querySelector(".burger-btn__bars");

function handleNav() {
	nav.classList.toggle("nav--active");
	navBtnBars.classList.remove("black-bars-color");

	handleNavItemsAnimation();

	allNavItems.forEach(item => {
		item.addEventListener("click", () => {
			nav.classList.remove("nav--active");
			removeNavItemsAnimation();
		});
	});
}

function handleNavItemsAnimation() {
	let delayTime = 0;

	allNavItems.forEach(item => {
		item.classList.toggle("nav-items-animation");
		item.style.animationDelay = `.${delayTime}s`;
		delayTime++;
	});
}

function removeNavItemsAnimation() {
	allNavItems.forEach(item => {
		item.classList.remove("nav-items-animation");
	});
}

function getCurrentYear() {
	let currentYear = new Date().getFullYear();
	footerYear.textContent = currentYear;
}

function handleObserver() {
	const currentSection = window.scrollY;
	sections.forEach(section => {
		if (
			section.classList.contains("white-section") &&
			section.offsetTop <= currentSection + 30
		) {
			navBtnBars.classList.add("black-bars-color");
		} else if (
			!section.classList.contains("white-section") &&
			section.offsetTop <= currentSection + 30
		) {
			navBtnBars.classList.remove("black-bars-color");
		}
	});
}

getCurrentYear();
navBtn.addEventListener("click", handleNav);
window.addEventListener("scroll", handleObserver);
