function openDrawableMenu() {
    document.getElementById("drawableMenu").style.width="10%"
    document.getElementById("backdropMenu").style.display="block"
    document.getElementById("openIcon").style.display = "none";
    document.getElementById("menuCloseIcon").style.display = "inline";
}

function closeDrawableMenu() {
    document.getElementById("drawableMenu").style.width="0%"
    document.getElementById("backdropMenu").style.display="none"
    document.getElementById("openIcon").style.display = "inline";
    document.getElementById("menuCloseIcon").style.display = "none";
}