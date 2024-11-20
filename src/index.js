import { header } from "./components/header/header.js";
import { fetchProducts } from "./utils/api.js";
import "./normalize.css";
import "./styles.css";
import { slider } from "./components/slider/slider.js";
import { renderMainContent } from "./components/mainContent/mainContent.js";
import { renderSidebarContent } from "./components/sidebar/sidebar.js";

const slideSideWords = ["главная", "продукты", "краски"];
const modalOptionsData = [
	{ text: "сначала дорогие", sortValue: "highPriceFirst" },
	{ text: "сначала недорогие", sortValue: "lowPriceFirst" },
	{ text: "сначала популярные", sortValue: "popularFirst" },
	{ text: "сначала новые", sortValue: "newFirst" },
];

let cartItemsData = [];
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
	openModalButton,
	modal,
	modalOptions,
	modalBackground,
	cart,
	sidebar,
	renderCartContentItems,
} = {
	mainSection: document.querySelector(".mainSection"),
	openModalButton: document.getElementById("sortTextButton"),
	modal: document.getElementById("modal"),
	modalOptions: document.getElementById("modalOptions"),
	modalBackground: document.getElementById("modalBackground"),
	cart: document.getElementById("cart"),
	sidebar: document.querySelector(".sidebar"),
	renderCartContentItems: document.getElementById("cartContentItems"),
};

/* ------------------- Get products from API ------------------- */

// fetchProducts().then((result) => {
// 	mainContentProducts = result
// 	renderMainContent(mainContentProducts, mainSection)
// })

/* ------------------- Header ------------------- */

header();

/* ------------------- Slider ------------------- */

slider();

/* ------------------- Main content ------------------- */

renderSidebarContent()

renderMainContent(mainContentProducts, mainSection);

/* ------------------- Modal ------------------- */

let sortValue;

modalOptions.innerHTML = modalOptionsData
	.map((option) => {
		return `<li class="modalOption" data-sortValue="${option.sortValue}">${option.text}</li>`;
	})
	.join("");

function modalHandler(action, payload) {
	if (action === "open") {
		[modal, modalBackground].forEach((el) => el.classList.add("open"));
	} else if (action === "close") {
		if (payload) {
			sortValue = payload.target.getAttribute("data-sortValue");
			const optionName = payload.target.textContent;
			sort(sortValue, optionName);
		}
		[modal, modalBackground, cart, sidebar].forEach((el) => {
			el.classList.remove("open");
		});
	}
}


openModalButton.addEventListener("click", () => modalHandler("open"));
modalOptions.addEventListener("click", (event) => modalHandler("close", event));
modalBackground.addEventListener("click", () => modalHandler("close"));

/* ------------------- Sort ------------------- */

function sort(sortValue, optionName) {
	renderMainContent(
		[...mainContentProducts].sort((a, b) =>
			sortValue === "highPriceFirst" ? b.price - a.price : a.price - b.price
		),
		mainSection
	);

	openModalButton.innerHTML = `${optionName}<img src="assets/img/Frame 10.svg" />`;
}


/* ------------------- Cart ------------------- */

document.getElementById("openCart").addEventListener("click", () => {
	[cart, modalBackground].forEach((el) => {
		el.classList.add("open");
	});
});

document.getElementById("openCartMobile").addEventListener("click", () => {
	cart.classList.add("openMobile");
	modalBackground.classList.add("open");
	document.documentElement.style.overflow = "hidden";
});

document.getElementById("closeCartButton").addEventListener("click", () => {
	[cart, modalBackground].forEach((el) => {
		el.classList.remove("open", "openMobile");
	});
	document.documentElement.style.overflow = "auto";
});

function cartFunction() {
	totalCardItemsQuantity();
	totalCartAmount();

	renderCartContentItems.innerHTML = cartItemsData
		.map((item) => {
			const isMinusDisabled = item.quantity == 1 && "disabled";
			return `<li class="cartItem" data-id="${item.id}">
				<img class="cartItemImage" src="${item.image}" alt="item" />
				<div class="cartItemInfo">
					<p class="cartItemName">${item.name}</p>
					<p class="cartItemPrice">${item.price}</p>
				</div>
				<div class="cartItemCount">
					<button class="cartItemCountMinus ${isMinusDisabled}">
						<img src="assets/img/minus.svg" alt="minus" />
					</button>
					<p class="cartItemCountQuantity">${item.quantity}</p>
					<button class="cartItemCountPlus">
						<img src="assets/img/plus.svg" alt="plus" />
					</button>
				</div>
				<button class="cartItemDelete">
					<img src="assets/img/x.svg" alt="delete" />
				</button>
			</li>`;
		})
		.join("");
}

renderCartContentItems.addEventListener("click", (event) => {
	const cartItemDelete = event.target.closest(".cartItemDelete");
	const cartProductId = event.target.closest(".cartItem").dataset.id;

	if (event.target.closest(".cartItemCountMinus")) {
		updateProductQuantity(cartProductId, -1);
	} else if (event.target.closest(".cartItemCountPlus")) {
		updateProductQuantity(cartProductId, +1);
	} else if (cartItemDelete) {
		const findedIndex = cartItemsData.findIndex((item) => item.id === cartProductId);
		if (cartItemDelete && findedIndex !== -1) {
			cartItemsData.splice(findedIndex, 1);
		}
	}
	cartFunction();
});

function updateProductQuantity(productId, amount) {
	const existingProduct = cartItemsData.find((item) => item.id === productId);

	if (existingProduct) {
		const newQuantity = parseInt(existingProduct.quantity) + parseInt(amount);
		if (newQuantity > 0) {
			existingProduct.quantity = newQuantity.toString();
		} else {
			existingProduct.quantity = "1";
		}
	}
}

mainSection.addEventListener("click", (event) => {
	const button = event.target.closest(".addProduct");

	if (button) {
		const productCard = button.closest(".productCart");
		const productId = productCard.dataset.id;
		const productQuantity = parseInt(productCard.dataset.quantity);
		const productName = productCard.querySelector(".productName").textContent;
		const productPrice = productCard.querySelector(".productPrice").textContent;
		const productImage = productCard.querySelector(".productImage").src;

		const existingProduct = cartItemsData.find((item) => item.id === productId);

		if (existingProduct) {
			updateProductQuantity(productId, productQuantity);
		} else {
			const selectedProduct = {
				id: productId,
				name: productName,
				price: productPrice,
				image: productImage,
				quantity: productQuantity.toString(),
			};
			cartItemsData.push(selectedProduct);
		}
		cartFunction();
	}
});

document.getElementById("itemsCountDelete").addEventListener("click", () => {
	cartItemsData = [];
	cartFunction();
});

function totalCardItemsQuantity() {
	const totalQuantity = cartItemsData.reduce(
		(total, item) => parseInt(total) + parseInt(item.quantity),
		0
	);

	const quantityText = (quantity) => {
		const lastDigit = quantity % 10;
		if (lastDigit === 1 && quantity !== 11) {
			return `${quantity} товар`;
		} else if (lastDigit >= 2 && lastDigit <= 4 && (quantity < 10 || quantity > 20)) {
			return `${quantity} товара`;
		} else {
			return `${quantity} товаров`;
		}
	};

	document.getElementById("itemsCount").innerText = quantityText(totalQuantity);
	document.getElementById("openCart").innerText = totalQuantity;
	document.getElementById("openCartMobile").innerText = totalQuantity;
}

function totalCartAmount() {
	const totalAmount = cartItemsData.reduce(
		(total, item) => total + parseFloat(item.price) * parseInt(item.quantity),
		0
	);
	const formattedTotalAmount = new Intl.NumberFormat("ru-RU").format(totalAmount);
	document.getElementById("cartTotalPrice").innerText = `${formattedTotalAmount} ₽`;
}

/* ------------------- Burger menu ------------------- */

document.querySelector(".burgerMenu").addEventListener("click", () => {
	[sidebar, modalBackground].forEach((el) => {
		el.classList.add("open");
	});
});

/* ------------------- Main content mobile ------------------- */

document.addEventListener("DOMContentLoaded", () => {
	document.querySelector(".sideTextMobile").innerHTML = slideSideWords
		.map((word, index) => {
			return `<span>${word}</span> ${
				index < slideSideWords.length - 1 ? `<img src="assets/img/Ellipse 47.svg"/>` : ""
			}`;
		})
		.join("");
});
