import "./sidebar.css"

const sidebarSliderWords = [
	"новинки",
	"есть в наличии",
	"контрактные",
	"эксклюзивные",
	"распродажа",
];

export const renderSidebarContent = () => {
	document.querySelector(".sidebarToggleContent").innerHTML = sidebarSliderWords
	.map((word, index) => {
		return `<div class="sidebarSliderItem">
				<input type="checkbox" id="toggle${index}" class="toggle"/>
				<label for="toggle${index}"><span class="toggleWord">${word}</span></label>
			</div>`;
	})
	.join("");
}