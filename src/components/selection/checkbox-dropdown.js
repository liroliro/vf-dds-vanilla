document
	.getElementById('vf_dropdown_checkbox')
	?.addEventListener('click', () => {
		const activator = document.querySelector('#vf_dropdown_checkbox')
		activator.classList.toggle('open')

		const list = document.querySelector('.vf-dropdown-list')
		list.classList.toggle('active')
	})

const inputs = document.querySelectorAll('#vf-dropdown__checkbox')

let containerText = 0

Array.from(inputs).forEach((el) => {
	const label = document.querySelector('#vf_label')
	el.addEventListener('click', () => {
		if (el.checked) {
			containerText++
		} else {
			containerText--
		}

		if (containerText === 0) {
			return
		}

		if (containerText === 1) {
			label.textContent = el.value
		}

		if (containerText > 1 && containerText !== inputs.length) {
			label.textContent = `${containerText} Selected`
		}

		if (containerText === inputs.length) {
			label.textContent = 'All Selected'
		}
	})
})
