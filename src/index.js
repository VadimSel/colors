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
let mainContentProducts

const {
	mainSection,
	modalBackground,
	sidebar,
} = {
	mainSection: document.querySelector(".mainSection"),
	modalBackground: document.getElementById("modalBackground"),
	sidebar: document.querySelector(".sidebar"),
};

fetchProducts().then((result) => {
	mainContentProducts = result
	renderMainContent(mainContentProducts, mainSection)
})

header();
slider(slideSideWords);
renderSidebarContent(sidebar, modalBackground)
renderMainContent(mainContentProducts, mainSection, slideSideWords);
renderModal(modalBackground, sidebar, (sortedData) => {
	mainContentProducts = sortedData
	renderMainContent(mainContentProducts, mainSection, slideSideWords)
}, mainContentProducts)
renderCart(mainSection, modalBackground)
