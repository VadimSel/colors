import "./modal.css";

const modalOptionsData = [
	{ text: "сначала дорогие", sortValue: "highPriceFirst" },
	{ text: "сначала недорогие", sortValue: "lowPriceFirst" },
	{ text: "сначала популярные", sortValue: "popularFirst" },
	{ text: "сначала новые", sortValue: "newFirst" },
];

const { openModalButton, modal, modalOptions } = {
	openModalButton: document.getElementById("sortTextButton"),
	modal: document.getElementById("modal"),
	modalOptions: document.getElementById("modalOptions"),
};

let sortValue;

export const renderModal = (modalBackground, sidebar, onSortChange, mainContentProducts) => {
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
		onSortChange(
			[...mainContentProducts].sort((a, b) =>
				sortValue === "highPriceFirst" ? b.price - a.price : a.price - b.price
			)
		);

		openModalButton.innerHTML = `${optionName}<img src="assets/img/Frame 10.svg" />`;
	}
};
