import {getItems} from './load-list.js';

const list = document.querySelector('.courses__list')

const setActiveFilter = () => {
	Array.from(document.querySelectorAll('.courses__filter-link')).forEach(link => {
		link.classList.remove('is-active')
		if (link.href === window.location.href) {
			link.classList.add('is-active')
		}
	})
}

export const initFilters = () => {
	if (window.location.hash) {
		setActiveFilter();
	}

	window.addEventListener('hashchange', async (e) => {
		setActiveFilter()
		list.classList.remove('is-active')
		await getItems()
	});
}

