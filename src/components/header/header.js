import "./header.css";

const textLinks = ["продукты", "цвета", "вдохновение", "советы", "найти магазин"];

const Icons = [
	{ label: "Поиск", src: "assets/img/search.svg", alt: "search" },
	{ label: "Профиль", src: "assets/img/profile.svg", alt: "profile" },
	{ label: "Избранное", src: "assets/img/heart.svg", alt: "heart" },
];

export const header = () => {
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
};
