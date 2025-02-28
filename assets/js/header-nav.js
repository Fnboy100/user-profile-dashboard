document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search-bar input");

    searchInput.addEventListener("focus", function () {
        this.style.border = "1px solid #000";
    });

    searchInput.addEventListener("blur", function () {
        this.style.border = "1px solid #ddd";
    });
});
