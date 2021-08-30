document.getElementById('vf_number_input').addEventListener('blur', (el) => {
	const foundEl = document.getElementById('vf_number_label')
	el.target.value
		? foundEl.classList.add('has-value')
		: foundEl.classList.remove('has-value')
})

document
	.getElementById('vf_number_input--up')
	.addEventListener('click', (el) => {
		const foundEl = document.getElementById('vf_number_input')

		foundEl.value++

		if (foundEl.value !== 0) {
			const newFoundEl = document.getElementById('vf_number_label')
			newFoundEl.classList.add('has-value')
		}
	})

document
	.getElementById('vf_number_input--down')
	.addEventListener('click', (el) => {
		const foundEl = document.getElementById('vf_number_input')

		foundEl.value--

		if (foundEl.value !== 0) {
			const newFoundEl = document.getElementById('vf_number_label')
			newFoundEl.classList.add('has-value')
		}
	})
