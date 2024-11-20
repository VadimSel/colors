import "./mainContent.css";

export function renderMainContent(products, mainSection, slideSideWords) {
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

	document.addEventListener("DOMContentLoaded", () => {
		document.querySelector(".sideTextMobile").innerHTML = slideSideWords
			.map((word, index) => {
				return `<span>${word}</span> ${
					index < slideSideWords.length - 1
						? `<img src="assets/img/Ellipse 47.svg"/>`
						: ""
				}`;
			})
			.join("");
	});
}
