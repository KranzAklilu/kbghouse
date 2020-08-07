const view = {
  header: document.querySelector(".header"),
  hamburger: document.querySelector(".hamburger"),
  nav: document.querySelector(".nav"),
  navList: document.querySelector(".nav__list"),
  landingPageImgContainer: document.querySelector(
    ".landing-page__img-container"
  ),
  checkIn: document.querySelector("#check-in"),
  checkOut: document.querySelector("#check-out"),
  galleryImgContainer: document.querySelector(".gallery__img-container"),
  galleryIcons: document.querySelector(".gallery__slider"),
  galleryImg: document.querySelectorAll(".gallery__img"),
  landingImg: document.querySelectorAll(".landing-page__img"),
  landingPageIcon: document.querySelector(".landing-page__icon"),
  descLink: document.querySelectorAll(".description__link"),
  card: document.querySelectorAll(".description__card"),
};

window.onscroll = () => {
  if (window.scrollY >= 30) {
    view.header.classList.add("fixed");
  } else {
    view.header.classList.remove("fixed");
  }
};

view.hamburger.addEventListener("click", () => {
  view.hamburger.classList.toggle("hamburger--active");
  view.navList.classList.toggle("nav__list--active");

  view.nav.classList.toggle("nav--active");
});
view.checkIn.addEventListener("click", () => {
  view.checkIn.max = view.checkOut.value;
});
view.checkOut.addEventListener("click", () => {
  view.checkOut.min = view.checkIn.value;
});

view.landingPageIcon.addEventListener("click", (e) => {
  const img = [...view.landingImg];
  const activeImg = img.find((img) =>
    img.classList.contains("landing-page__img--active")
  );

  if (e.target.classList.contains("left")) {
    activeImg.classList.remove("landing-page__img--active");
    let current =
      activeImg.previousElementSibling ||
      view.landingPageImgContainer.lastElementChild;
    current.classList.add("landing-page__img--active");
  } else if (e.target.classList.contains("right")) {
    activeImg.classList.remove("landing-page__img--active");
    let current =
      activeImg.nextElementSibling ||
      view.landingPageImgContainer.firstElementChild;
    current.classList.add("landing-page__img--active");
  }
});
view.galleryIcons.addEventListener("click", (e) => {
  const img = [...view.galleryImg];
  const activeImg = img.filter((img) =>
    img.classList.contains("gallery__img--active")
  );

  if (e.target.classList.contains("left")) {
    activeImg[0].classList.remove("gallery__img--active");
    const available = img.filter(
      (child) => !child.classList.contains("gallery__img--active")
    );
    activeImg.splice(0, 1);
    available.push(activeImg[0]);
    const firstChild = available[1];
    firstChild.classList.add("gallery__img--active");
    available.splice(0, 1);
    activeImg.push(firstChild);
  }
  console.log(activeImg);
  // const current =
  //   activeImg[0].previousElementSibling ||
  //   view.galleryImgContainer.lastElementChild;
});
view.descLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const allLinks = [...view.descLink];
    const activeLink = allLinks.find((item) =>
      item.classList.contains("description__link--active")
    );
    activeLink.classList.remove("description__link--active");
    e.target.classList.add("description__link--active");

    const id = e.target.dataset.id;
    const card = [...view.card];
    const activeCard = card.find((item) => item.dataset.id === id);
    if (!activeCard.classList.contains("description__card--active")) {
      card.forEach((card) => {
        card.classList.remove("description__card--active");
      });
      activeCard.classList.add("description__card--active");
    }
  });
});
