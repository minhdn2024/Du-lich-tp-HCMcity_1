
/* ==============================
   MOBILE MENU
============================== */

const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

menuButton.addEventListener("click", function () {

    navigation.classList.toggle("show");

    if (navigation.classList.contains("show")) {
        menuButton.textContent = "✕";
        menuButton.setAttribute("aria-expanded", "true");
    } else {
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-expanded", "false");
    }

});


/* ==============================
   SEARCH FUNCTION
============================== */

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

const searchableItems = document.querySelectorAll(".searchable");


function searchContent() {

    const keyword = searchInput.value
        .trim()
        .toLocaleLowerCase("vi");

    searchableItems.forEach(function (item) {

        const name = item.dataset.name
            .toLocaleLowerCase("vi");

        if (name.includes(keyword)) {

            item.classList.remove("hidden");

        } else {

            item.classList.add("hidden");

        }

    });

}


/* SEARCH WHEN TYPING */

searchInput.addEventListener("input", searchContent);


/* SEARCH WHEN CLICKING BUTTON */

searchButton.addEventListener("click", searchContent);


/* SEARCH WHEN PRESSING ENTER */

searchInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        searchContent();

    }

});


/* ==============================
   CLOSE MOBILE MENU
============================== */

const navigationLinks = navigation.querySelectorAll("a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navigation.classList.remove("show");

        menuButton.textContent = "☰";

        menuButton.setAttribute("aria-expanded", "false");

    });

});
