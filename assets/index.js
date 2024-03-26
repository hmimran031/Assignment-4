document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const menu = document.getElementById("menu");

  menuIcon.addEventListener("click", () => {
    console.log("Menu icon clicked");
    menu.classList.toggle("hidden");
  });
});
