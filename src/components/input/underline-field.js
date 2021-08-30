document.getElementById('vf_underline_input').addEventListener('blur', (el) => {
	const foundEl = document.getElementById('vf_underline_label')
	el.target.value
		? foundEl.classList.add('has-value')
		: foundEl.classList.remove('has-value')
})
