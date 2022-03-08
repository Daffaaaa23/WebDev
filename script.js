const nav = document.querySelector(".overlay"),
  menuBtn = document.querySelector("#menu-btn"),
  closeBtn = document.querySelector("#close-btn");

menuBtn.addEventListener("click", () => {
  nav.classList.add("active");
});
