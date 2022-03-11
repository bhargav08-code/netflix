document
  .querySelector(".menu-btn")
  .addEventListener("click", () =>
    document.querySelector(".main-menu").classList.toggle("show")
  );
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});
