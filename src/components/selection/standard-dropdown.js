document
	.getElementById('vf_dropdown_standard')
	?.addEventListener('click', () => {
		const activator = document.querySelector('#vf_dropdown_standard')
		activator.classList.toggle('open')

		const list = document.querySelector('.vf-dropdown-list')
		list.classList.toggle('active')
	})
