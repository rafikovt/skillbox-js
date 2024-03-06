

const list = document.querySelector('.courses__list')
const template = document.querySelector('.template-project-card')?.content;
const cardItem = template?.querySelector('[data-template]');
const renderCard = (item) => {

	const card = cardItem.cloneNode(true);
	const label = card.querySelector('.product-card__label');
	const title = card.querySelector('.product-card__title');
	const img = card.querySelector('.product-card__img');
	const productCard = card.querySelector('.product-card');
	const date = card.querySelector('.product-card__date');
	const link = card.querySelector('.product-card__shadow-link');

	productCard.classList.add(item.classes)

	label.textContent = item.label;
	title.textContent = item.title;
	img.src = item.src;
	img.alt = item.alt;
	date.textContent = item.date;
	link.href = item.href;

	if (!item.hit) {
		card.querySelector('.product-card__hit').remove()
	}

	list.appendChild(card)
}

export const getItems = async () => {
	const res = await fetch('projects.json');
	const items = await res.json();
	const filteredItems = items.filter(e => {
		if (window.location.hash && window.location.hash !== '#all') {
			return e.tags.includes(window.location.hash)
		}

		return e;
	})

	list.innerHTML = '';
	filteredItems.forEach(item => renderCard(item))
	list.classList.add('is-active')
}
