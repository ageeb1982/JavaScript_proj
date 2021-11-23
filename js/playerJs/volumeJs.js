class Volume {
    constructor() {
        this.myFiles = document.getElementById("myFiles");
        var volume = document.getElementById("volume");
        this.myFiles.volume = 50 / 100;
        volume.addEventListener("change", () => {
            this.myFiles.volume = volume.value / 100;
        });
    }
}
onload = new Volume();