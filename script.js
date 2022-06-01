
//change search icon color
const searchIcon = document.getElementById("s-icon");
const searchBar = document.getElementById("search");
searchBar.addEventListener("focus", () => {
    searchIcon.classList.add("active");
})
searchBar.addEventListener("focusout", () => {
    searchIcon.classList.remove("active");
})