console.log("Hello js!");
const navButton = document.querySelector("#menu-button");
const menuList = document.querySelector(".menu-list");

navButton.addEventListener("click", () => {
  menuList.toggleAttribute("visible");
});
