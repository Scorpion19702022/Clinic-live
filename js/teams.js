const nav = document.querySelector('.navbar')
const links = document.querySelectorAll('.navbar__link')

const burgerBtn = document.querySelector('.burger')
const bars = document.querySelector('.fa-bars')
const cross = document.querySelector('.fa-xmark')

const handleBtn = () => {
	nav.classList.toggle('actionnav')
	bars.classList.toggle('hide')
	cross.classList.toggle('hide')
	links.forEach(el => {
		el.addEventListener('click', () => {
			nav.classList.remove('actionnav')
			bars.classList.remove('hide')
			cross.classList.add('hide')
		})
	})
}

burgerBtn.addEventListener('click', handleBtn)