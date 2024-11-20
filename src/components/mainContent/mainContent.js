import "./mainContent.css"

// const sidebarSliderWords = [
// 	"новинки",
// 	"есть в наличии",
// 	"контрактные",
// 	"эксклюзивные",
// 	"распродажа",
// ];

// export const mainContent = () => {
//   document.querySelector(".sidebarToggleContent").innerHTML = sidebarSliderWords
// 	.map((word, index) => {
// 		return `<div class="sidebarSliderItem">
// 				<input type="checkbox" id="toggle${index}" class="toggle"/>
// 				<label for="toggle${index}"><span class="toggleWord">${word}</span></label>
// 			</div>`;
// 	})
// 	.join("");

// }
export function renderMainContent(products, mainSection) {
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

// export const renderSidebarContent = () => {
// 	document.querySelector(".sidebarToggleContent").innerHTML = sidebarSliderWords
// 	.map((word, index) => {
// 		return `<div class="sidebarSliderItem">
// 				<input type="checkbox" id="toggle${index}" class="toggle"/>
// 				<label for="toggle${index}"><span class="toggleWord">${word}</span></label>
// 			</div>`;
// 	})
// 	.join("");
// }