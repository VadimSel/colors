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
	{ src: "assets/img/Rectangle 645.png", alt: "slide" },
	{ src: "assets/img/Rectangle 645.png", alt: "slide" },
	{ src: "assets/img/Rectangle 645.png", alt: "slide" },
	{ src: "assets/img/Rectangle 645.png", alt: "slide" },
	{ src: "assets/img/Rectangle 645.png", alt: "slide" },
	{ src: "assets/img/Rectangle 645.png", alt: "slide" },
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

/* ------------------- Get products from API ------------------- */

const fetchProducts = async () => {
	try {
		const response = await fetch("https://673470a4a042ab85d11a2d4a.mockapi.io/products");
		mainContentProducts = await response.json();
		renderMainContent(mainContentProducts);
	} catch (error) {
		console.log("Ошибка при получении данных", error);
	}
};

fetchProducts();

/* ------------------- Header ------------------- */

const renderTextLinks = document.querySelector(".textLinks");
renderTextLinks.innerHTML = textLinks
	.map((link) => {
		return `<li>
      <a href="#">${link}</a>
    </li>`;
	})
	.join("");

const renderIconLinks = document.querySelector(".iconLinks");
renderIconLinks.innerHTML = Icons.map((icon) => {
	return `<li><img aria-label="${icon.label}" src="${icon.src}" alt="${icon.alt}" /></li>`;
}).join("");

/* ------------------- Slider ------------------- */

const renderSlider = document.querySelector(".slider");
renderSlider.innerHTML = sliderImages
	.map((slide) => {
		return `<img class="sliderSlide" src="${slide.src}" alt="${slide.alt}" />`;
	})
	.join("");

const renderSliderButtons = document.querySelector(".arrowContainer");
renderSliderButtons.innerHTML = sliderButtons
	.map((button) => {
		return `<button class="sliderButton"><img class="slide" src="${button.src}" alt="${button.alt}" /></button>`;
	})
	.join("");

const leftButton = document.querySelector(".arrowContainer .sliderButton:nth-child(1)");
const rightButton = document.querySelector(".arrowContainer .sliderButton:nth-child(2)");
let currentSlide = 0;

function updateDots() {
	const dots = document.querySelectorAll(".dot");
	dots.forEach((dot, index) => {
		dot.classList.toggle("active", index === currentSlide);
	});
}

function showSlide(index) {
	const slides = document.querySelectorAll(".sliderSlide");
	const slider = document.querySelector(".slider");
	const totalSlides = slides.length;

	if (index < 0) index = totalSlides - 1;
	if (index >= totalSlides) index = 0;

	slider.style.transform = `translateX(-${index * 100}%)`;
	currentSlide = index;

	updateDots();
}

leftButton.addEventListener("click", () => {
	showSlide(currentSlide - 1);
});
rightButton.addEventListener("click", () => {
	showSlide(currentSlide + 1);
});

const renderPagination = document.querySelector(".pagination");
renderPagination.innerHTML = sliderImages
	.map((_, index) => {
		return `<img class="dot ${index === currentSlide && "active"}" src="${
			dots[0].src
		}" alt="dot" />`;
	})
	.join("");

const renderSlideSideWords = document.querySelector(".slideSideText");
renderSlideSideWords.innerHTML = slideSideWords
	.map((word, index) => {
		return `<span>${word}</span> ${
			index < slideSideWords.length - 1 ? `<img src="assets/img/Ellipse 264.svg"/>` : ""
		}`;
	})
	.join("");

/* ------------------- Main content ------------------- */

const renderSidebarSlider = document.querySelector(".sidebarToggleContent");
renderSidebarSlider.innerHTML = sidebarSliderWords
	.map((word, index) => {
		return `<div class="sidebarSliderItem">
				<input type="checkbox" id="toggle${index}" class="toggle"/>
				<label for="toggle${index}"><span class="toggleWord">${word}</span></label>
			</div>`;
	})
	.join("");

const mainSection = document.querySelector(".mainSection");

const renderMainContent = (products) => {
	mainSection.innerHTML = products
		.map((product) => {
			return `<div class="productCart" data-id="${product.id}" data-quantity="${product.quantity}">
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
		</div>`;
		})
		.join("");
};

/* ------------------- Modal ------------------- */

let sortValue;

const renderModalOptions = document.getElementById("modalOptions");
renderModalOptions.innerHTML = modalOptionsData
	.map((option) => {
		return `<li class="modalOption" data-sortValue="${option.sortValue}">${option.text}</li>`;
	})
	.join("");

const openModalButton = document.getElementById("sortTextButton");
const modal = document.getElementById("modal");
const modalOptions = document.getElementById("modalOptions");
const modalBackground = document.getElementById("modalBackground");

const modalHandler = (action, payload) => {
	switch (action) {
		case "open":
			modal.style.height = "192px";
			modalBackground.style.opacity = "1";
			modalBackground.style.zIndex = "15";
			break;
		case "close":
			if (payload) {
				sortValue = payload.target.getAttribute("data-sortValue");
				optionName = payload.target.textContent;
			}
			modal.style.height = "";
			modalBackground.style.opacity = "0";
			modalBackground.style.zIndex = "-1";
			cart.style.width = "0px";
			sidebar.style.height = "0px"
			sort(sortValue, optionName);
			break;
	}
};

openModalButton.addEventListener("click", () => modalHandler("open"));
modalOptions.addEventListener("click", (event) => modalHandler("close", event));
modalBackground.addEventListener("click", () => modalHandler("close"));

/* ------------------- Sort ------------------- */

const sort = (sortValue, optionName) => {
	switch (sortValue) {
		case "highPriceFirst":
			renderMainContent([...mainContentProducts].sort((a, b) => b.price - a.price));
			break;
		case "lowPriceFirst":
			renderMainContent([...mainContentProducts].sort((a, b) => a.price - b.price));
			break;
	}
	openModalButton.innerHTML = `${optionName}<img src="assets/img/Frame 10.svg" />`;
};

/* ------------------- Cart ------------------- */

const openCartButton = document.getElementById("openCart");
const cart = document.getElementById("cart");
const addProduct = document.querySelector(".addProduct");
const itemsCount = document.getElementById("itemsCount");
const closeCartButton = document.getElementById("closeCartButton");

openCartButton.addEventListener("click", () => {
	cart.style.width = "600px";
	modalBackground.style.opacity = "1";
	modalBackground.style.zIndex = "15";
});

closeCartButton.addEventListener("click", () => {
	cart.style.width = "0px";
	modalBackground.style.opacity = "0";
	modalBackground.style.zIndex = "-1";
});

const renderCartContentItems = document.getElementById("cartContentItems");

const cartFunction = () => {
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
};

renderCartContentItems.addEventListener("click", (event) => {
	const cartButtonMinus = event.target.closest(".cartItemCountMinus");
	const cartButtonPlus = event.target.closest(".cartItemCountPlus");
	const cartItemDelete = event.target.closest(".cartItemDelete");
	const cartProductId = event.target.closest(".cartItem").dataset.id;

	if (cartButtonMinus) {
		updateProductQuantity(cartProductId, -1);
	} else if (cartButtonPlus) {
		updateProductQuantity(cartProductId, +1);
	} else if (cartItemDelete) {
		const findedIndex = cartItemsData.findIndex((item) => item.id === cartProductId);
		if (cartItemDelete && findedIndex !== -1) {
			cartItemsData.splice(findedIndex, 1);
		}
	}
	cartFunction();
});

const updateProductQuantity = (productId, amount) => {
	const existingProduct = cartItemsData.find((item) => item.id === productId);

	if (existingProduct) {
		const newQuantity = parseInt(existingProduct.quantity) + parseInt(amount);
		if (newQuantity > 0) {
			existingProduct.quantity = newQuantity.toString();
		} else {
			existingProduct.quantity = "1";
		}
	}
};

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

const itemsCountDelete = document.getElementById("itemsCountDelete");

itemsCountDelete.addEventListener("click", () => {
	cartItemsData = [];
	cartFunction();
});

const totalCardItemsQuantity = () => {
	const itemsCount = document.getElementById("itemsCount");
	const totalQuantity = cartItemsData.reduce(
		(total, item) => parseInt(total) + parseInt(item.quantity),
		0
	);
	const openCartNumber = document.getElementById("openCart");

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

	itemsCount.innerText = quantityText(totalQuantity);
	openCartNumber.innerText = totalQuantity;
};

const totalCartAmount = () => {
	const cartTotalPrice = document.getElementById("cartTotalPrice");
	const totalAmount = cartItemsData.reduce(
		(total, item) => total + parseFloat(item.price) * parseInt(item.quantity),
		0
	);
	const formattedTotalAmount = new Intl.NumberFormat("ru-RU").format(totalAmount);
	cartTotalPrice.innerText = `${formattedTotalAmount} ₽`;
};


/* ------------------- Burger menu ------------------- */

const burgerMenu = document.querySelector(".burgerMenu")
const sidebar = document.querySelector(".sidebar")

burgerMenu.addEventListener("click", () => {
	sidebar.style.height = "318px"
	modalBackground.style.opacity = "1";
	modalBackground.style.zIndex = "15";
})