const navSide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-menus");
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
};

navSide();
