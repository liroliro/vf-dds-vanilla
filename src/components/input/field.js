document.getElementById('vf_standard_input').addEventListener('blur', (el) => {
	const foundEl = document.getElementById('vf_standard_label')
	console.log(el.target.value)
	el.target.value
		? foundEl.classList.add('has-value')
		: foundEl.classList.remove('has-value')
})
