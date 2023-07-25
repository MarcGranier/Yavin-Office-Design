function userScroll() {
	const navbar = document.querySelector('.navbar')

	window.addEventListener('scroll', () => {
		if (window.scrollY > 50) {
			navbar.classList.add('navbar-sticky')
		} else {
			navbar.classList.remove('navbar-sticky')
		}
	})
}

// Event Listeners
document.addEventListener('DOMContentLoaded', userScroll)
