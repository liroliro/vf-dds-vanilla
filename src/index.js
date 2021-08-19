import _ from 'lodash'
import './style/style.scss'

function component() {
	const element = document.createElement('div')

	element.innerHTML = _.join(['Hello', 'webpack'], ' ')
	element.classList.add('vf-badge')

	return element
}

document.body.appendChild(component())

module.exports = component
