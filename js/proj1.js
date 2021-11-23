let txtCode = document.getElementById("textCode");
let runCode = document.getElementById("runCode");
let removeCode = document.getElementById("removeCode");
let myResult = document.getElementById("myResult");

runCode.onclick = () => {
    myResult.innerHTML = txtCode.value;
    localStorage.setItem("myResult", txtCode.value);
};
removeCode.onclick = () => {
    myResult.innerHTML = "";
}

onload = () => {
    txtCode.value = localStorage.getItem("myResult");
    myResult.innerHTML = txtCode.value;
}