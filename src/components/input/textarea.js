document.getElementById('vf_textarea_input').addEventListener('blur', (el) => {
	const foundEl = document.getElementById('vf_standard_label')
	el.target.value
		? foundEl.classList.add('has-value')
		: foundEl.classList.remove('has-value')
})
