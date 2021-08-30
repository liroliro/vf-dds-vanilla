document.querySelectorAll('.vf-dropdown-list-item')?.forEach((listItem) => {
	listItem.addEventListener('click', () => {
		const label = document.querySelector('#vf_label')

		if (label) {
			label.innerHTML = listItem.textContent
		}

		Array.from(listItem.children, (el) => {
			if (el.nodeName === 'SPAN') {
				document
					.querySelectorAll('.checked')
					.forEach((el) => el.classList.remove('checked'))

				el.classList.add('checked')
			}
		})
	})
})
