const burgerMenu = document.querySelector(".burger-menu-btn");
const navbarMenu = document.querySelector(".navbar-menu");
const container = document.querySelector(".container");
let open = false;

burgerMenu.onclick = () => {
  if (!open) {
    open = !open;
    navbarMenu.style.display = "block";
    container.style.height = "80%";
  } else {
    open = !open;
    navbarMenu.style.display = "none";
    container.style.height = "84%";
  }
};

window.onresize = () => {
  if (window.innerWidth > 800) {
    navbarMenu.style.display = "block";
    container.style.height = "84%";
  } else {
    container.style.height = "84%";
    navbarMenu.style.display = "none";
  }
};
