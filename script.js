let hamburger = document.querySelector("#hamburger-icon");
let sidebar = document.querySelector("#sidebar")

hamburger.addEventListener("click", () => {
    sidebar.classList.toggle(`show`)
})