const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");

const body = document.querySelector('body');
const btnBurgerOpen = document.querySelector(".header-burger__btn-open");
const btnBurgerClose = document.querySelector(".header-burger__btn-close");
const navigateHeader = document.querySelector(".nav");

tabsBtn.forEach(onTabClick);

function onTabClick(currentBtn) {
  currentBtn.addEventListener("click", function () {
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.getElementById(tabId);

    if (!currentBtn.classList.contains("active")) {
      tabsBtn.forEach(function (item) {
        item.classList.remove("active");
      });

      tabsItems.forEach(function (item) {
        item.classList.remove("active");
      });

      currentBtn.classList.add("active");
      currentTab.classList.add("active");
    }
  });
}

const openBurger = () => {
  btnBurgerOpen.classList.add("none");
  btnBurgerClose.classList.remove("none");
  navigateHeader.classList.add("open");
  body.style.overflow = 'hidden';
};

const closeBurger = () => {
  btnBurgerClose.classList.add("none");
  btnBurgerOpen.classList.remove("none");
  navigateHeader.classList.remove("open");
  body.style.overflow = 'auto';
};

btnBurgerOpen.addEventListener("click", openBurger);
btnBurgerClose.addEventListener("click", closeBurger);

const swiper = new Swiper(".reviews-swiper", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".reviews__swiper-pagination",
    clickable: true,
  },
});
