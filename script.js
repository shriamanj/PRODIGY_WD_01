const navbar = document.querySelector(".menu");

window.addEventListener("scroll", function () {
  if (window.scrollY) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const menuItems = document.querySelectorAll(".menu-item a");

menuItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.opacity = "0.5";
  });

  item.addEventListener("mouseout", () => {
    item.style.opacity = "1";
  });
});
