document
	.querySelector('#vf-notification__btn')
	.addEventListener('click', () => {
		document
			.querySelector('#vf-notification__body')
			.classList.toggle('vf-notification--show')
	})
