document
	.querySelector('#vf-header-menu-icon')
	?.addEventListener('click', (el) => {
		document
			.querySelectorAll('.vf-header__search-box')
			.forEach((searchIcon) => searchIcon.classList.remove('active'))
		document
			.querySelectorAll('.active-search-box')
			.forEach((el) => el.classList.remove('active-search-box'))

		const menu = document.querySelector('.vf-header__menu-list')
		if (el.target.classList.contains('vf-icon-menu')) {
			el.target.classList.remove('vf-icon-menu')
			el.target.classList.add('vf-icon-close')
			menu.classList.add('active')
		} else {
			el.target.classList.add('vf-icon-menu')
			el.target.classList.remove('vf-icon-close')
			menu.classList.remove('active')
		}
	})

document.querySelectorAll('#vf_header_level_1')?.forEach((headerLevelOne) => {
	const menuLevel2 = headerLevelOne.nextElementSibling

	headerLevelOne.addEventListener('click', (el) => {
		if (window.innerWidth > 1024) {
			document
				.querySelectorAll('.vf-header__menu-level-2.active')
				.forEach((el) => el.classList.remove('active'))
		}

		const symbol = document
			.querySelector('#vf_header_level_1')
			.getElementsByTagName('span')

		if (!menuLevel2.classList.contains('active')) {
			menuLevel2.classList.add('active')
			symbol[0].classList.remove('vf-icon-more')
			symbol[0].classList.add('vf-icon-less-info')
		} else {
			menuLevel2.classList.remove('active')
			symbol[0].classList.add('vf-icon-more')
			symbol[0].classList.remove('vf-icon-less-info')
		}
	})
})

document.querySelectorAll('#vf_header_level_2')?.forEach((headerLevelTwo) => {
	const menuLevel3 = headerLevelTwo.nextElementSibling

	headerLevelTwo.addEventListener('click', (el) => {
		if (window.innerWidth > 1024) {
			document
				.querySelectorAll('.vf-header__menu-level-3.active')
				.forEach((el) => el.classList.remove('active'))
		}

		menuLevel3.classList.toggle('active')

		document.querySelectorAll('.arrow')?.forEach((el) => el.remove())

		const arrow = document.createElement('span')

		arrow.classList.add('arrow')

		headerLevelTwo.appendChild(arrow)
	})
})

document.querySelectorAll('.vf-icon-search').forEach((searchIcon) =>
	searchIcon.addEventListener('click', (el) => {
		const searchEl = document.querySelector('.vf-header__search-box')
		el.target.classList.toggle('active-search-box')
		const menu = document.querySelector('#vf-header-menu-icon')

		if (!searchEl.classList.contains('active')) {
			document
				.querySelectorAll('.active')
				.forEach((el) => el.classList.remove('active'))

			searchEl.classList.add('active')
		} else {
			document
				.querySelectorAll('.active')
				.forEach((el) => el.classList.remove('active'))
		}

		if (window.innerWidth < 1024) {
			menu.classList.add('vf-icon-menu')
			menu.classList.remove('vf-icon-close')
		}
	})
)

document
	.querySelector('.vf-header__icon-close-desktop')
	?.addEventListener('click', () => {
		document.querySelector('.vf-header__search-box').classList.remove('active')
	})
