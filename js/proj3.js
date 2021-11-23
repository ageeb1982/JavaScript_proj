let text = "Mohamed Ageeb";
let sp1 = document.getElementById("sp1");
let sp2 = document.getElementById("sp2");
let radio1 = document.getElementById("radio1");
let radio2 = document.getElementById("radio2");
sp1.addEventListener("click", selectRadio);
sp2.addEventListener("click", selectRadio);
let textarea = document.getElementById("text");
let result = document.getElementById("result");

textarea.addEventListener("input", () => {
    make_result();
});

radio1.addEventListener("change", (ee) => {
    make_result();
    console.log(ee);
});
radio2.addEventListener("change", (ee) => {
    make_result();
    console.log(ee);

});

function selectRadio(oe) {
    //var oe.target
    const myId = oe.target.id;

    if (myId == "sp1") {
        // radio1.setAttribute("checked", "checked");
        radio1.click();
        console.log(`myId= ${myId} , chk Radio1`);
    }
    if (myId == "sp2") {
        radio2.click();
        // radio2.setAttribute("checked", "checked");
        console.log(`myId= ${myId} , chk Radio2`);
    }

}

function make_result() {
    let myProcess = document.querySelector('input[name="process"]:checked');
    try {
        if (myProcess.value == "decode") {
            //فك التشفير
            result.value = window.atob(textarea.value);
        } else {
            //تشفير
            result.value = window.btoa(textarea.value);
        }
    } catch (error) {
        if (myProcess.value == "decode") {
            result.value = "لا يمكن فك تشفير هذا النص لوجود خطأ";
        } else {
            result.value = "لا يمكن تشفير هذا النص لوجود خطأ";
        }

    }
}