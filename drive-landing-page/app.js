const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-menus");
const navLinks = document.querySelectorAll(".nav-menus li");

const navSide = () => {
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        // console.log(index);
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });

    burger.classList.toggle("toggle");
  });
};

navSide();
