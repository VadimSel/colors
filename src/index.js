const textLinks = ["продукты", "цвета", "вдохновение", "советы", "найти магазин"];
const slideSideWords = ["главная", "продукты", "краски"];
const sidebarSliderWords = [
	"новинки",
	"есть в наличии",
	"контрактные",
	"эксклюзивные",
	"распродажа",
];
const Icons = [
	{ label: "Поиск", src: "assets/img/search.svg", alt: "search" },
	{ label: "Профиль", src: "assets/img/profile.svg", alt: "profile" },
	{ label: "Избранное", src: "assets/img/heart.svg", alt: "heart" },
];
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
const modalOptionsData = [
	{ text: "сначала дорогие", sortValue: "highPriceFirst" },
	{ text: "сначала недорогие", sortValue: "lowPriceFirst" },
	{ text: "сначала популярные", sortValue: "popularFirst" },
	{ text: "сначала новые", sortValue: "newFirst" },
];

let cartItemsData = [];
let mainContentProducts;

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

async function fetchProducts() {
	try {
		const response = await fetch("https://673470a4a042ab85d11a2d4a.mockapi.io/products");
		mainContentProducts = await response.json();
		renderMainContent(mainContentProducts);
	} catch (error) {
		console.log("Ошибка при получении данных", error);
	}
}

fetchProducts();

/* ------------------- Header ------------------- */

document.querySelector(".textLinks").innerHTML = textLinks
	.map((link) => {
		return `<li>
      <a href="#">${link}</a>
    </li>`;
	})
	.join("");

document.querySelector(".iconLinks").innerHTML = Icons.map((icon) => {
	return `<li>
			<img aria-label="${icon.label}"
				src="${icon.src}"
				alt="${icon.alt}" />
			</li>`;
}).join("");

/* ------------------- Slider ------------------- */

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

/* ------------------- Main content ------------------- */

document.querySelector(".sidebarToggleContent").innerHTML = sidebarSliderWords
	.map((word, index) => {
		return `<div class="sidebarSliderItem">
				<input type="checkbox" id="toggle${index}" class="toggle"/>
				<label for="toggle${index}"><span class="toggleWord">${word}</span></label>
			</div>`;
	})
	.join("");

function renderMainContent(products) {
	mainSection.innerHTML = products
		.map((product) => {
			return `<div class="productCartContainer">
			<div class="productCart" data-id="${product.id}" data-quantity="${product.quantity}">
				<div class="productImageContainer">
					<img class="productImage" src="${product.image}" alt="${product.name}" />
				</div>
				<div class="productInfo">
					<h3 class="productName">${product.name}</h3>
					<div class="priceAndButton">
						<p class="productPrice">${product.price} ₽</p>
						<button class="addProduct">
							<img src="assets/img/plus.svg" alt="plus"/>
						</button>
					</div>
				</div>
			</div>
		</div>`;
		})
		.join("");
}

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
			optionName = payload.target.textContent;
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
		)
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
