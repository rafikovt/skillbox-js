const initPageMenu = () => {
	const ESC_CODE = 27;
	const burgerBtn = document.querySelector('[data-sandwich]');
	const navList = document.querySelector('[data-main-nav]');
	const navItems = Array.from(navList.querySelectorAll('[data-nav-item]'));
	const logo = document.querySelector('[data-header-logo]')

	const toggleItem = (item) => {
		item.classList.toggle('is-active');
	}

	const toggleMenu = () => {
		burgerBtn.classList.toggle('is-active');
		navList.classList.toggle('is-active');
		logo.classList.toggle('is-menu')
		navItems.forEach((item, index) => {
			setTimeout(() => toggleItem(item), 150 * index++)
		})
		document.body.classList.toggle('scroll-lock');
	}

	const closeMenu = () => {
		burgerBtn.classList.remove('is-active');
		navList.classList.remove('is-active');
		logo.classList.remove('is-menu')
		navItems.forEach((item) => {
			item.classList.remove('is-active')
		})
		document.body.classList.remove('scroll-lock');
	}

	burgerBtn.addEventListener('click', toggleMenu)
	window.addEventListener('keydown', (evt) => {
		if (evt.keyCode === ESC_CODE) {
			closeMenu()
		}
	})
	const resizeObserver = new ResizeObserver((entries) => {
		for (let entry of entries) {
			const { target } = entry;
			if (Number(target.clientWidth) >= 1024) {
				closeMenu()
			}
		}
	});

	resizeObserver.observe(document.body);
}

export { initPageMenu }
