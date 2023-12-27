const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");

const body = document.querySelector("body");
const headerBurgerBtn = document.querySelector(".header-burger__btn-open");
const imgBurgerOpen = document.querySelector(".header-burger__img-open");
const imgBurgerClose = document.querySelector(".header-burger__img-close");
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

const openCloseBurgerMenu = (e) => {
  const imgTag = e.target;
  if (!imgTag.classList.contains("none")) {
    imgBurgerOpen.classList.add("none");
    imgBurgerClose.classList.remove("none");
    navigateHeader.classList.add("open");
    body.style.overflow = "hidden";
  }
  if (!imgTag.classList.contains("none")) {
    imgBurgerOpen.classList.remove("none");
    imgBurgerClose.classList.add("none");
    navigateHeader.classList.remove("open");
    body.style.overflow = "auto";
  }
};

headerBurgerBtn.addEventListener("click", openCloseBurgerMenu);

const swiper = new Swiper(".reviews-swiper", {
  loop: true,
  // slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".reviews__swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    280: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    500: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 3,
    },
  },
});
