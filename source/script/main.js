import "../scss/style.scss"
import "./utils/prism.js";
import {iosVhFix} from "./utils/ios-vh-fix.js";
import {initPageMenu} from './modules/header/init-page-menu.js';
import {initFilters} from './modules/filter/init-filter.js';
import {getItems} from './modules/filter/load-list.js';
import {startSwiper} from './modules/swiper/init-slider.js';

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();

  window.addEventListener('load', async () => {
      initPageMenu();

	  // я бы разные скрипты сделал для страниц конечно лучше
	  if (window.location.pathname === '/data.html') {
		  initFilters()
		  await getItems()
	  }

	  const swiperContainer = document.querySelector('[data-card-slider]')
	  if (swiperContainer) {
		  startSwiper()
	  }
  });
});
