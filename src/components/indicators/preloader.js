console.log('allo')

const updateArrayOffset = (el, percentage) => {
	el.style.strokeDasharray = percentage * 2.3876 + ',238.76'
}

const preloaders = document.getElementsByClassName('vf-preloader')

console.log(preloaders)

Array.from(preloaders).map((el, index) => {
	let vfSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
	vfSvg.setAttributeNS(null, 'class', 'vf-preloader-svg')

	let vfSvgPath = document.createElementNS('http://www.w3.org/2000/svg', 'path')
	let vfSvgPathElement = vfSvg.appendChild(vfSvgPath)
	vfSvgPathElement.setAttributeNS(null, 'class', 'vf-preloader-circle')
	vfSvgPathElement.setAttributeNS(
		null,
		'd',
		'M40 2 a 38 38 0 0 1 0 76 a 38 38 0 0 1 0 -76'
	)

	let vfSvgText = document.createElementNS('http://www.w3.org/2000/svg', 'text')
	let vfSvgTextElement = vfSvg.appendChild(vfSvgText)
	vfSvgTextElement.setAttributeNS(null, 'class', 'vf-preloader-percentage')
	vfSvgTextElement.setAttributeNS(null, 'x', '50%')
	vfSvgTextElement.setAttributeNS(null, 'y', '50%')

	el.appendChild(vfSvg)

	let displayPercentage = el.getAttribute('data-vf-preloader-percentage')

	if (!displayPercentage) {
		displayPercentage = 0
	}

	el
		.getElementsByTagName('svg')[0]
		.getElementsByTagName('text')[0].textContent = `${displayPercentage}%`

	updateArrayOffset(
		el.getElementsByClassName('vf-preloader-circle')[0],
		displayPercentage
	)

	const config = { attributes: true }

	const callback = (mutationsList, observer) => {
		mutationsList.map((mutation) => {
			if (mutation.type == 'attributes') {
				if (mutation.attributeName == 'data-vf-preloader-percentage') {
					mutation.target
						.getElementsByTagName('svg')[0]
						.getElementsByTagName('text')[0].textContent =
						mutation.target.getAttribute('data-vf-preloader-percentage') + '%'
					updateArrayOffset(
						mutation.target.getElementsByClassName('vf-preloader-circle')[0],
						mutation.target.getAttribute('data-vf-preloader-percentage')
					)
				}
			}
		})
	}

	// Create an observer instance linked to the callback function
	const observer = new MutationObserver(callback)

	// Start observing the target node for configured mutations
	observer.observe(el, config)
})
