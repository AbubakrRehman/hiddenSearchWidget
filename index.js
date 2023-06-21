const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");
let searchInputVisible = false;

searchBtn.addEventListener("click", (e) => {
    searchInputVisible = !searchInputVisible;


    if (searchInputVisible) {
        searchInput.classList.add("visible");
        searchInput.focus();
    } else {
        searchInput.classList.remove("visible");
    }




})