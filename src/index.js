import { header } from "./components/header/header.js";
import { fetchProducts } from "./utils/api.js";
import "./normalize.css";
import "./styles.css";
import { slider } from "./components/slider/slider.js";
import { renderMainContent } from "./components/mainContent/mainContent.js";
import { renderSidebarContent } from "./components/sidebar/sidebar.js";
import { renderModal } from "./components/modal/modal.js";
import { renderCart } from "./components/cart/cart.js";

const slideSideWords = ["главная", "продукты", "краски"];

// let cartItemsData = [];
let mainContentProducts = [
	{
		id: "1",
		image: "https://live.staticflickr.com/65535/54151257070_f5406a6c91_m.jpg",
		name: "Краска Wallquest, Brownsone MS90102",
		price: "6000",
		quantity: "1",
	},
	{
		id: "2",
		image: "https://live.staticflickr.com/65535/54150801746_a4a19e54c3_m.jpg",
		name: "Краска Wallquest, Brownsone MS90102",
		price: "4800",
		quantity: "1",
	},
	{
		id: "3",
		image: "https://live.staticflickr.com/65535/54151130154_e509cc50da_m.jpg",
		name: "Краска Wallquest, Brownsone MS90102",
		price: "5290",
		quantity: "1",
	},
	{
		id: "4",
		image: "https://live.staticflickr.com/65535/54149957512_4dbfd4d859_m.jpg",
		name: "Краска Wallquest, Brownsone MS90102",
		price: "2800",
		quantity: "1",
	},
	{
		id: "5",
		image: "https://live.staticflickr.com/65535/54149957512_4dbfd4d859_m.jpg",
		name: "Краска Wallquest, Brownsone MS90102",
		price: "3400",
		quantity: "1",
	},
	{
		id: "6",
		image: "https://live.staticflickr.com/65535/54150801656_8a72f28219_m.jpg",
		name: "Краска Wallquest, Brownsone MS90102",
		price: "6000",
		quantity: "1",
	},
	{
		id: "7",
		image: "https://live.staticflickr.com/65535/54151094128_32e16482f3_m.jpg",
		name: "Краска Wallquest, Brownsone MS90102",
		price: "4800",
		quantity: "1",
	},
	{
		id: "8",
		image: "https://live.staticflickr.com/65535/54151262110_52a6ed584d_m.jpg",
		name: "Краска Wallquest, Brownsone MS90102",
		price: "5290",
		quantity: "1",
	},
	{
		id: "9",
		image: "https://live.staticflickr.com/65535/54149957537_52172b66b7_m.jpg",
		name: "Краска Wallquest, Brownsone MS90102",
		price: "2800",
		quantity: "1",
	},
	{
		id: "10",
		image: "https://live.staticflickr.com/65535/54150801741_b43a71f23b_m.jpg",
		name: "Краска Wallquest, Brownsone MS90102",
		price: "3400",
		quantity: "1",
	},
	{
		id: "11",
		image: "https://live.staticflickr.com/65535/54151130154_e509cc50da_m.jpg",
		name: "Краска Wallquest, Brownsone MS90102",
		price: "6000",
		quantity: "1",
	},
	{
		id: "12",
		image: "https://live.staticflickr.com/65535/54149957512_4dbfd4d859_m.jpg",
		name: "Краска Wallquest, Brownsone MS90102",
		price: "4800",
		quantity: "1",
	},
	{
		id: "13",
		image: "https://live.staticflickr.com/65535/54149957512_4dbfd4d859_m.jpg",
		name: "Краска Wallquest, Brownsone MS90102",
		price: "5290",
		quantity: "1",
	},
	{
		id: "14",
		image: "https://live.staticflickr.com/65535/54150801656_8a72f28219_m.jpg",
		name: "Краска Wallquest, Brownsone MS90102",
		price: "2800",
		quantity: "1",
	},
	{
		id: "15",
		image: "https://live.staticflickr.com/65535/54151094128_32e16482f3_m.jpg",
		name: "Краска Wallquest, Brownsone MS90102",
		price: "3400",
		quantity: "1",
	},
];

const {
	mainSection,
	modalBackground,
	// cart,
	sidebar,
	// renderCartContentItems,
} = {
	mainSection: document.querySelector(".mainSection"),
	modalBackground: document.getElementById("modalBackground"),
	// cart: document.getElementById("cart"),
	sidebar: document.querySelector(".sidebar"),
	// renderCartContentItems: document.getElementById("cartContentItems"),
};

/* ------------------- Get products from API ------------------- */

// fetchProducts().then((result) => {
// 	mainContentProducts = result
// 	renderMainContent(mainContentProducts, mainSection)
// })

/* ------------------- Header ------------------- */

header();

/* ------------------- Slider ------------------- */

slider(slideSideWords);

/* ------------------- Main content ------------------- */

renderSidebarContent()

renderMainContent(mainContentProducts, mainSection, slideSideWords);

/* ------------------- Modal ------------------- */

renderModal(modalBackground, sidebar, (sortedData) => {
	mainContentProducts = sortedData
	renderMainContent(mainContentProducts, mainSection, slideSideWords)
}, mainContentProducts)

/* ------------------- Cart ------------------- */

renderCart(mainSection, modalBackground)

/* ------------------- Burger menu ------------------- */

document.querySelector(".burgerMenu").addEventListener("click", () => {
	[sidebar, modalBackground].forEach((el) => {
		el.classList.add("open");
	});
});

/* ------------------- Main content mobile ------------------- */

// document.addEventListener("DOMContentLoaded", () => {
// 	document.querySelector(".sideTextMobile").innerHTML = slideSideWords
// 		.map((word, index) => {
// 			return `<span>${word}</span> ${
// 				index < slideSideWords.length - 1 ? `<img src="assets/img/Ellipse 47.svg"/>` : ""
// 			}`;
// 		})
// 		.join("");
// });
