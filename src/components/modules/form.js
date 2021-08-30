const inputs = document.querySelectorAll('.vf-input')

Array.from(inputs).forEach((el, index) => {
	const foundEl = document.querySelector(`#vf_standard_label_${index}`)
	console.log(index, foundEl)

	el.addEventListener('blur', (input) => {
		input.target.value
			? foundEl.classList?.add('has-value')
			: foundEl.classList?.remove('has-value')
	})
})
