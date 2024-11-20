import "./slider.css"

// const slideSideWords = ["главная", "продукты", "краски"];
const sliderImages = [
	{ src: "assets/img/Rectangle 645.webp", alt: "slide" },
	{ src: "assets/img/Rectangle 645.webp", alt: "slide" },
	{ src: "assets/img/Rectangle 645.webp", alt: "slide" },
	{ src: "assets/img/Rectangle 645.webp", alt: "slide" },
	{ src: "assets/img/Rectangle 645.webp", alt: "slide" },
	{ src: "assets/img/Rectangle 645.webp", alt: "slide" },
];
const sliderButtons = [
	{ src: "assets/img/chevron-left.svg", alt: "leftArrow" },
	{ src: "assets/img/chevron-right.svg", alt: "rightArrow" },
];
const dots = [{ src: "./assets/img/Ellipse 264.svg", alt: "dot" }];

export const slider = (slideSideWords) => {
  document.querySelector(".slider").innerHTML = sliderImages
	.map((slide) => {
		return `<img class="sliderSlide" src="${slide.src}" alt="${slide.alt}" />`;
	})
	.join("");

document.querySelector(".arrowContainer").innerHTML = sliderButtons
	.map((button) => {
		return `<button class="sliderButton"><img class="slide" src="${button.src}" alt="${button.alt}" /></button>`;
	})
	.join("");

let currentSlide = 0;

function updateDots() {
	const dots = document.querySelectorAll(".dot");
	dots.forEach((dot, index) => {
		dot.classList.toggle("active", index === currentSlide);
	});
}

function showSlide(index) {
	const totalSlides = document.querySelectorAll(".sliderSlide").length;

	if (index < 0) index = totalSlides - 1;
	if (index >= totalSlides) index = 0;

	document.querySelector(".slider").style.transform = `translateX(-${index * 100}%)`;
	currentSlide = index;

	updateDots();
}

document
	.querySelector(".arrowContainer .sliderButton:nth-child(1)")
	.addEventListener("click", () => {
		showSlide(currentSlide - 1);
	});
document
	.querySelector(".arrowContainer .sliderButton:nth-child(2)")
	.addEventListener("click", () => {
		showSlide(currentSlide + 1);
	});

document.querySelector(".pagination").innerHTML = sliderImages
	.map((_, index) => {
		return `<img class="dot ${index === currentSlide && "active"}" src="${
			dots[0].src
		}" alt="dot" />`;
	})
	.join("");

document.querySelector(".slideSideText").innerHTML = slideSideWords
	.map((word, index) => {
		return `<span>${word}</span> ${
			index < slideSideWords.length - 1 ? `<img src="assets/img/Ellipse 264.svg"/>` : ""
		}`;
	})
	.join("");
}