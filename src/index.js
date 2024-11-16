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
// const mainContentProducts = [
// 	{
// 		image: "https://i.imgur.com/vDHdJGH.png",
// 		name: "Краска Wallquest, Brownsone MS90102",
// 		price: "6000",
// 	},
// 	{
// 		image: "https://i.imgur.com/ffNIfiC.png",
// 		name: "Краска Wallquest, Brownsone MS90102",
// 		price: "4800",
// 	},
// 	{
// 		image: "https://i.imgur.com/hGbofoG.png",
// 		name: "Краска Wallquest, Brownsone MS90102",
// 		price: "5290",
// 	},
// 	{
// 		image: "https://i.imgur.com/0Qjxqsj.png",
// 		name: "Краска Wallquest, Brownsone MS90102",
// 		price: "2800",
// 	},
// 	{
// 		image: "https://i.imgur.com/ek5Unoy.png",
// 		name: "Краска Wallquest, Brownsone MS90102",
// 		price: "3400",
// 	},
// 	{
// 		image: "https://i.imgur.com/H9IjbAy.png",
// 		name: "Краска Wallquest, Brownsone MS90102",
// 		price: "6000",
// 	},
// 	{
// 		image: "https://i.imgur.com/AMxSUSK.png",
// 		name: "Краска Wallquest, Brownsone MS90102",
// 		price: "4800",
// 	},
// 	{
// 		image: "https://i.imgur.com/ZptWpr9.png",
// 		name: "Краска Wallquest, Brownsone MS90102",
// 		price: "5290",
// 	},
// 	{
// 		image: "https://i.imgur.com/ESuBEau.png",
// 		name: "Краска Wallquest, Brownsone MS90102",
// 		price: "2800",
// 	},
// 	{
// 		image: "https://i.imgur.com/nQbVy1m.png",
// 		name: "Краска Wallquest, Brownsone MS90102",
// 		price: "3400",
// 	},
// 	{
// 		image: "https://i.imgur.com/ce75abf.png",
// 		name: "Краска Wallquest, Brownsone MS90102",
// 		price: "6000",
// 	},
// 	{
// 		image: "https://i.imgur.com/5N6YkX4.png",
// 		name: "Краска Wallquest, Brownsone MS90102",
// 		price: "4800",
// 	},
// 	{
// 		image: "https://i.imgur.com/Tn4jdjT.png",
// 		name: "Краска Wallquest, Brownsone MS90102",
// 		price: "5290",
// 	},
// 	{
// 		image: "https://i.imgur.com/MFmkUIa.png",
// 		name: "Краска Wallquest, Brownsone MS90102",
// 		price: "2800",
// 	},
// 	{
// 		image: "https://i.imgur.com/i38xYLt.png",
// 		name: "Краска Wallquest, Brownsone MS90102",
// 		price: "3400",
// 	},
// ];

const cartItemsData = [
	{
		image: "https://i.imgur.com/ffNIfiC.png",
		name: "Краска Wallquest, Brownsone MS90102",
		price: "9600",
		count: "2"
	},
	{
		image: "https://i.imgur.com/ffNIfiC.png",
		name: "Краска Wallquest, Brownsone MS90102",
		price: "9600",
		count: "2"
	},
	// {
	// 	image: "https://i.imgur.com/ffNIfiC.png",
	// 	name: "Краска Wallquest, Brownsone MS90102",
	// 	price: "9600",
	// 	count: "2"
	// },
	// {
	// 	image: "https://i.imgur.com/ffNIfiC.png",
	// 	name: "Краска Wallquest, Brownsone MS90102",
	// 	price: "9600",
	// 	count: "2"
	// },
	// {
	// 	image: "https://i.imgur.com/ffNIfiC.png",
	// 	name: "Краска Wallquest, Brownsone MS90102",
	// 	price: "9600",
	// 	count: "2"
	// },
	// {
	// 	image: "https://i.imgur.com/ffNIfiC.png",
	// 	name: "Краска Wallquest, Brownsone MS90102",
	// 	price: "9600",
	// 	count: "2"
	// },
]

let mainContentProducts;

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

const renderSidebarSlider = document.querySelector(".sidebarToggleContent");
renderSidebarSlider.innerHTML = sidebarSliderWords
	.map((word, index) => {
		return `<div class="sidebarSliderItem">
				<input type="checkbox" id="toggle${index}" class="toggle"/>
				<label for="toggle${index}"><span class="toggleWord">${word}</span></label>
			</div>`;
	})
	.join("");

const renderMainContent = (products) => {
	const renderMainContent = document.querySelector(".mainSection");
	renderMainContent.innerHTML = products
		.map((product) => {
			return `<div class="productCart">
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
			cart.style.width = "0px"
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

const openCartButton = document.getElementById("openCart")
const cart = document.getElementById("cart")

openCartButton.addEventListener("click", () => {
	cart.style.width = "600px"
	modalBackground.style.opacity = "1";
	modalBackground.style.zIndex = "15";
})

const cartContentItems = document.getElementById("cartContentItems")

cartContentItems.innerHTML = cartItemsData.map((item) => {
	return (
		`<li class="cartItem">
			<img class="cartItemImage" src="${item.image}" alt="item" />
			<div class="cartItemInfo">
				<p class="cartItemName">${item.name}</p>
				<p class="cartItemPrice">${item.price}</p>
			</div>
			<div class="cartItemCount">
				<button class="cartItemCountMinus">-</button>
				<p class="cartItemCountQuantity">${item.count}</p>
				<button class="cartItemCountPlus">+</button>
			</div>
			<button class="cartItemDelete">
				<img src="assets/img/x.svg" alt="delete" />
			</button>
		</li>`
	)
}).join("")