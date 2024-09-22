const navbar = document.querySelector(".navbar");
const navbarToggleButton = document.querySelector("header .btn");
const buttonIcons = document.querySelectorAll("header .btn .bi");

navbarToggleButton.addEventListener("click", () => {
  navbar.classList.toggle("visible");
  Array.from(buttonIcons).forEach((icon) => {
    icon.classList.toggle("display-none");
  });
});
