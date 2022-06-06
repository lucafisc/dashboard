
//change search icon color
const searchIcon = document.getElementById("s-icon");
const searchBar = document.getElementById("search");
searchBar.addEventListener("focus", () => {
    searchIcon.classList.add("active");
})
searchBar.addEventListener("focusout", () => {
    searchIcon.classList.remove("active");
})

//theme toggle
const root = document.documentElement;
const moonBtn = document.getElementById("moon-btn")
const sunBtn = document.getElementById("sun-btn")
moonBtn.addEventListener("click", () => {
    toggleTheme(sunBtn, moonBtn);
})
sunBtn.addEventListener("click", () => {
    toggleTheme(moonBtn, sunBtn);
})

function toggleTheme(btnShow, btnHide) {
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;
    btnHide.style.display = "none"
    btnShow.style.display = "block"
}