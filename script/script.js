function zoomImg(
	imgBoxSelector,
	imgSelector,
	boxSelector,
	imgAciveClass,
	boxActiveClass
) {
	const imgBox = document.querySelectorAll(imgBoxSelector),
		img = document.querySelectorAll(imgSelector),
		box = document.querySelectorAll(boxSelector);
	imgBox.forEach((element, i) => {
		element.addEventListener('mouseover', () => {
			img[i].classList.add(imgAciveClass)
			box[i].classList.add(boxActiveClass)
		});
		element.addEventListener('mouseleave', () => {
			img[i].classList.remove(imgAciveClass)
			box[i].classList.remove(boxActiveClass)
		});
	});
};
zoomImg(
	'.history__box__img',
	'.history__box__img img',
	'.history__box__img__links',
	'zoomedImg',
	'zoomedBox'
);
zoomImg(
	'.event__image',
	'.event__image>img',
	'.event__image__box',
	'zoomedImg',
	'zoomedBox'
);




window.addEventListener("scroll", () => {
   if(window.scrollY>1200) {
      document.querySelector('.toUp').style.display="block"
   } else {
      document.querySelector('.toUp').style.display="none"
   }
});
document.querySelector('.toUp').addEventListener("click", () => {
   window.scrollTo(0, 0)
});
  
document.querySelector(".navbar__hamburger").addEventListener("click", () => {
   document.querySelector('.menu').classList.add("menu__active")
});
document.querySelector(".menu i").addEventListener("click", () => {
   document.querySelector('.menu').classList.remove("menu__active")
});