import _ from 'lodash'

function component() {
	const element = document.createElement('div')

	element.innerHTML = _.join(['Hello', 'webpack'], ' ')
	element.classList.add('vf-badge')

	return element
}

document.body.appendChild(component())

module.exports = component
