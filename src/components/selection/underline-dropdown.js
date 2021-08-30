document
	.getElementById('vf_dropdown_underline')
	?.addEventListener('click', () => {
		const activator = document.querySelector('#vf_dropdown_underline')
		activator.classList.toggle('open')

		const list = document.querySelector('.vf-dropdown-list')
		list.classList.toggle('active')
	})
