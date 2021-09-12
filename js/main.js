const collapsibles = document.querySelectorAll(".callapsible");

collapsibles.forEach((item) => 
    item.addEventListener("click", function () {
        this.classList.toggle("collapsible--expanded");
    })
);