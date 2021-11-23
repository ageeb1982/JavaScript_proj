setInterval(() => {
    var width = screen.width;
    var height = screen.height;

    if (width <= 768) {

        document.getElementById("myPlayer").style.width = width + "px";
        document.getElementById("myPlayer").style.height = height + "px";

    }
});