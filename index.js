const burgerMenu = document.querySelector(".burger-menu-btn");
const navbarMenu = document.querySelector(".navbar-menu");

let open = false;

burgerMenu.onclick = () => {
  if (!open) {
    open = !open;
    navbarMenu.style.display = "block";
  } else {
    open = !open;
    navbarMenu.style.display = "none";
  }
};
