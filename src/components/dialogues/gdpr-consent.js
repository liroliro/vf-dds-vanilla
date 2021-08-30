document.getElementById('expand-button').addEventListener('click', () => {
	const el = document.getElementsByClassName('vf-gdpr-consent__details-content')
	el[0].classList.toggle('vf-gdpr-consent__hidden')
})
