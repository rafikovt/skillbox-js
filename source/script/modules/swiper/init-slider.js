import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

let swiper = null;

const initSwiper = () => {
	if (!swiper) {
		swiper = new Swiper('.products__swiper', {
			loop: true,
			wrapperClass: 'products__list',
			slideClass: 'products__item',
			spaceBetween: 10,
			modules: [Navigation],
			navigation: {
				nextEl: '.products__nav-button--next',
				prevEl: '.products__nav-button--prev'
			},
			breakpoints: {
				768: {
					slidesPerView: 1,
				},
				1024: {
					slidesPerView: 2,
				},
				1340: {
					slidesPerView: 3,
				}
			}
		});
	}
}

const destroySwiper = () => {
	if (swiper) {
		swiper.destroy();
		swiper = null;
	}
}




export const startSwiper = () => {
	const resizeObserver = new ResizeObserver((entries) => {
		for (let entry of entries) {
			const { target } = entry;
			if (Number(target.clientWidth) < 768) {
				destroySwiper()
			} else {
				initSwiper()
			}
		}
	});

	resizeObserver.observe(document.body);
}

