document.querySelectorAll(".history__box__img").forEach((el, i) => {

   el.addEventListener("mouseover", () => {
      document.querySelectorAll(".history__box__img__links")[i].classList.add("history__box__img__links__active");
      document.querySelectorAll(".history__box__img img")[i].classList.add("history__box__img__active")
   }, {capture: true})
   el.addEventListener("mouseleave", () => {
      document.querySelectorAll(".history__box__img__links")[i].classList.remove("history__box__img__links__active");
      document.querySelectorAll(".history__box__img img")[i].classList.remove("history__box__img__active")
   }, {capture: true})
})