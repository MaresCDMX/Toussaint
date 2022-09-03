/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== ACCORDION SKILLS ====================*/

const skillsContent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;
  console.log(itemClass);

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillsHeader.forEach((s) => s.addEventListener("click", toggleSkills));

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContent = document.querySelectorAll("[data-content]");

tabs.forEach((tab) =>
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContent.forEach((tabContent) =>
      tabContent.classList.remove("qualification__active")
    );
    target.classList.add("qualification__active");

    tabs.forEach((tab) => tab.classList.remove("qualification__active"));
    tab.classList.add("qualification__active");
  })
);

/*==================== SERVICES MODAL ====================*/

const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalClose = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalClose.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) =>
      modalView.classList.remove("active-modal")
    );
  });
});

/*==================== PORTFOLIO SWIPER  ====================*/

let swiper = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true, // loop mode
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*==================== TESTIMONIAL ====================*/

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/

function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/

function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*==================== DARK LIGHT THEME ====================*/

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*==================== Change Language ====================*/

const $checkbox = document.querySelector(".check");

$checkbox.addEventListener("click", change);

function change() {
  let traductor = $checkbox.checked;

  if (traductor == true) {
    location.href = "/es/index.html";
  } else {
    location.href = "../index.html";
  }
}

/*==================== Form  ====================*/

/*const $form = document.querySelector("#form");
const $buttonMailto = document.querySelector("#trucazo");

$form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = new FormData(this);
  $buttonMailto.setAttribute(
    "href",
    `mailto:jesusmares82@gmail.com?subject= ${form.get(
      "project"
    )}&body= Name: ${form.get("name")} Email: ${form.get(
      "email"
    )}  Message: ${form.get("message")}`
  );
  $buttonMailto.click();
}*/

const $checkbox2 = document.querySelector(".check");
const $form = document.querySelector("#form");

$form.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();
  const form = new FormData(this);
  if (
    form.get("project") === "" ||
    form.get("name") === "" ||
    form.get("email") === "" ||
    form.get("message") === ""
  ) {
    let traductor = $checkbox.checked;

    if (traductor == true) {
      swal({
        title: "Error!",
        text: "Los campos del formulario deben llenarse!",
        icon: "warning",
      });
    } else {
      swal({
        title: "Are you sure?",
        text: "Form fields must be filled!",
        icon: "warning",
      });
    }
  } else {
    const response = await fetch(this.action, {
      method: this.method,
      body: form,
      headers: {
        Accept: "application/json",
      },
    });
    if (response.ok) {
      this.reset();
      let traductor = $checkbox.checked;
      if (traductor == true) {
        swal({
          title: "Gracias!",
          text: "Tu mensaje ha sido enviado!",
          icon: "success",
        });
      } else {
        swal({
          title: "Success!",
          text: "Thanks for your message!",
          icon: "success",
        });
      }
    }
  }
}

/*==================== SPLITTING JS  ====================*/
Splitting();

/*==================== VanillaTilt  ====================*/
VanillaTilt.init(document.querySelectorAll(".about__img"), {
  max: 25,
  speed: 400,
  glare: true,
  "max-glare": 1,
});

/*==================== GSAP ANIMATIONS  ====================*/

const buttons = document.querySelectorAll(".card-buttons button");
const sectiones = document.querySelectorAll(".card-section");
const card = document.querySelector(".card");

const handleButtonClick = (e) => {
  const targetSection = e.target.getAttribute("data-section");
  const section = document.querySelector(targetSection);
  console.log(section);
  console.log(targetSection);
  targetSection != "#aboutme"
    ? card.classList.add("is-active")
    : card.classList.remove("is-active");
  card.setAttribute("data-state", targetSection);
  sectiones.forEach((s) => s.classList.remove("is-active"));
  buttons.forEach((b) => b.classList.remove("is-active"));
  e.target.classList.add("is-active");
  section.classList.add("is-active");
};

buttons.forEach((btn) => {
  btn.addEventListener("click", handleButtonClick);
});
