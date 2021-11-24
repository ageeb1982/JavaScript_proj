var col = document.getElementById("setColor");
col.addEventListener("change", getColor);

function updateDate() {
    var date = new Date();
    var setTime = document.getElementById("setTime");
    var hour = date.getHours();
    var Hzero = hour.toString().length == 1 ? "0" : "";
    hour = Hzero + hour;
    var minute = date.getMinutes();
    var Mzero = minute.toString().length == 1 ? "0" : "";
    minute = Mzero + minute;
    var second = date.getSeconds();
    var Szero = second.toString().length == 1 ? "0" : "";
    second = Szero + second;
    setTime.innerHTML = hour + ":" + minute + ":" + second;
    var setDate = document.getElementById("setDate");
    setDate.innerHTML = date.getFullYear() + "/" + parseInt(date.getMonth() + 1) + "/" + date.getDate();
}
setInterval(updateDate, 100);
onload = updateDate();

function getColor(oe) {
    console.log("color1=" + oe.target.value);
    var newColor = document.getElementById("setColor").value;
    console.log("color2=" + newColor);
    localStorage.setItem("Color", newColor);
    setColor();
}

function setColor() {
    var saveColor = localStorage.getItem("Color");
    if (saveColor == null) {

        saveColor = "blue";
        localStorage.setItem("Color", saveColor);

    }
    var nColor = `linear-gradient(to right, ${saveColor},white)`;
    // document.getElementById("setColor").value = saveColor;
    document.getElementById("time").style.backgroundImage = nColor;
    document.getElementById("body").style.backgroundImage = nColor;

}
var saveColor = localStorage.getItem("Color");

document.getElementById("setColor").value = saveColor;
setInterval(setColor, 100);