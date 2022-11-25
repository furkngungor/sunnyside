const hamburgerButton = document.querySelector("#hamburger-button");
const headerNav = document.querySelector(".Header-nav"); 

hamburgerButton.onclick = () => {
  if (headerNav.classList.value === "Header-nav") {
    headerNav.classList.add("show");
  } else {
    headerNav.classList.remove("show");
  }
}