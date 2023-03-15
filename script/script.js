window.addEventListener('scroll', () => {
	if (window.scrollY > 1200) {
		document.querySelector('.toUp').style.display = 'block'
	} else {
		document.querySelector('.toUp').style.display = 'none'
	}
})
document.querySelector('.toUp').addEventListener('click', () => {
	window.scrollTo(0, 0)
})

function zoomImg(
	imgBoxSelector,
	imgSelector,
	boxSelector,
	imgAciveClass,
	boxActiveClass
) {
	const imgBox = document.querySelectorAll(imgBoxSelector),
		img = document.querySelectorAll(imgSelector),
		box = document.querySelectorAll(boxSelector)
	imgBox.forEach((element, i) => {
		element.addEventListener('mouseover', () => {
			img[i].classList.add(imgAciveClass)
			box[i].classList.add(boxActiveClass)
		})
		element.addEventListener('mouseleave', () => {
			img[i].classList.remove(imgAciveClass)
			box[i].classList.remove(boxActiveClass)
		})
	})
}
zoomImg(
	'.history__box__img',
	'.history__box__img img',
	'.history__box__img__links',
	'zoomedImg',
	'zoomedBox'
)
zoomImg(
	'.event__image',
	'.event__image>img',
	'.event__image__box',
	'zoomedImg',
	'zoomedBox'
)

function openMenu(openTrigger, closeTrigger, menuSelector, activeClass) {
	const open = document.querySelector(openTrigger),
		close = document.querySelector(closeTrigger),
		menu = document.querySelector(menuSelector)
	open.addEventListener('click', () => {
		menu.classList.add(activeClass)
	})
	close.addEventListener('click', () => {
		menu.classList.remove(activeClass)
	})
}
openMenu('.navbar__hamburger', '.menu i', '.menu', 'menu__active')


function disableLabel(inputsSelectors, labelSelectors, event) {
	const inputs = document.querySelectorAll(inputsSelectors),
		labels = document.querySelectorAll(labelSelectors)
	inputs.forEach((el, i) => {
		el.addEventListener(event, (e) => {
			if (event === 'input') {
				if (e.target.tagName == 'TEXTAREA') {
					if (el.value.length > 0) {
						labels[2].style.display = 'none'
					} else {
						labels[2].style.display = 'block'
					}
				} else {
					if (el.value.length > 0) {
						labels[i].style.display = 'none'
					} else {
						labels[i].style.display = 'block'
					}
				}
			} else if (event === 'focus') {
				if (e.target.tagName == 'TEXTAREA') {
					labels[2].style.top = '0'
				} else {
					labels[i].style.top = '0'
				}
			} else if (event === 'focusout') {
				labels.forEach((label) => {
					label.style.top = '15px'
				})
			}
		})
	})
}
disableLabel(
	'.membership__form form>div>input',
	'.membership__form form>div>label',
	'input'
)
disableLabel(
	'.membership__form form>div>textarea',
	'.membership__form form>div>label',
	'input'
)

disableLabel(
	'.membership__form form>div>input',
	'.membership__form form>div>label',
	'focus'
)
disableLabel(
	'.membership__form form>div>textarea',
	'.membership__form form>div>label',
	'focus'
)
disableLabel(
	'.membership__form form>div>input',
	'.membership__form form>div>label',
	'focusout'
)
disableLabel(
	'.membership__form form>div>textarea',
	'.membership__form form>div>label',
	'focusout'
)
