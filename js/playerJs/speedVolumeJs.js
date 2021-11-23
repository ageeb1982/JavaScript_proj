class Speed_Volume {
    constructor() {
        this.myFiles = document.getElementById("myFiles");

        var speed = document.getElementById("speed");
        speed.addEventListener("change", () => {
            this.myFiles.playbackRate = speed.value / 100;
        });

    }

}
onload = new Speed_Volume();