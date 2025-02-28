document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach(item => {
        item.addEventListener("mouseenter", function () {
            this.style.backgroundColor = "#CCC";
        });

        item.addEventListener("mouseleave", function () {
            this.style.backgroundColor = "#DDD";
        });
    });
});
