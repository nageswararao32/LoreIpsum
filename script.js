function toggleNav() {
    var links = document.getElementsByClassName("navLink");
    for (var i = 0; i < links.length; i++) {
        links[i].classList.toggle("show");
    }
}