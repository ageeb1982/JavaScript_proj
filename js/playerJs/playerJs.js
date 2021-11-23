class Player {
    constructor() {

        this.myFiles = document.getElementById("myFiles");
        this.isPlayed;

        this.play = document.getElementById("play");
        this.play.addEventListener("click", () => {
            this.play_pause();
        });

        this.audios = [];
        this.names = [];
        this.names[0] = "إذاعة القران الكريم";
        this.audios[0] = "https://qurango.net/radio/tarateel";

        this.names[1] = "إذاعة السنة";
        this.audios[1] = "https://radiosunna.radioca.st/stream";

        this.names[2] = "إذاعة ميراث الانبياء - الرئيسية";
        this.audios[2] = "https://radio.al7eah.net/8010/stream";


        this.names[3] = "إذاعة القران - المغرب";
        this.audios[3] = "http://92.222.103.13:8005/;stream.nsv";

        this.names[4] = "إذاعة الشيخ محمد بن هادي المدخلي";
        this.audios[4] = "http://node-34.zeno.fm/gpm8qh09tv8uv?rj-ttl=5&rj-tok=AAABfUxtiMAAQKjf0UqoPTdfVQ";;

        this.names[5] = "إذاعة النهج الواضح - الأولى";
        this.audios[5] = "http://178.33.122.39:8000/stream";

        this.names[6] = "إذاعة النهج الواضح - الثانية";
        this.audios[6] = "http://178.33.122.39:8001/stream";

        this.names[7] = "إذاعة النهج الواضح - الثالثة";
        this.audios[7] = "http://178.33.122.39:8002/stream";

        this.names[8] = "mp3Quran إذاعة الفتاوى";
        this.audios[8] = "http://live.mp3quran.net:8014/";

        this.names[9] = "mp3Quran الإذاعة العامة - متنوعة لمختلف القراء";
        this.audios[9] = "http://live.mp3quran.net:8006/";

        this.names[10] = "mp3Quran تلاوات خاشعة";
        this.audios[10] = "http://live.mp3quran.net:9992/";

        this.names[11] = "mp3Quran إذاعة بصوت الشيخ عبدالله خياط";
        this.audios[11] = "http://live.mp3quran.net:9948";

        this.names[12] = "mp3Quran إذاعة بصوت الشيخ محمد ايوب";
        this.audios[12] = "http://live.mp3quran.net:9960/";

        this.names[13] = "mp3Quran إذاعة بصوت الشيخ عبدالرحمن السديس";
        this.audios[13] = "http://live.mp3quran.net:9988";

        this.names[14] = "mp3Quran إذاعة بصوت الشيخ سعود الشريم";
        this.audios[14] = "http://live.mp3quran.net:9986/";

        this.names[15] = "mp3Quran إذاعة بصوت الشيخ علي جابر";
        this.audios[15] = "http://live.mp3quran.net:9964";

        this.names[16] = "mp3Quran إذاعة بصوت الشيخ ماهر المعيقلي";
        this.audios[16] = "http://live.mp3quran.net:8002/";

        this.names[17] = "mp3Quran إذاعة بصوت الشيخ ياسر الدوسري";
        this.audios[17] = "http://live.mp3quran.net:9984/";

        this.names[18] = "mp3Quran إذاعة بصوت الشيخ عبدالودود حنيف";
        this.audios[18] = "http://live.mp3quran.net:9848/";

        this.names[19] = "mp3Quran إذاعة بصوت الشيخ عبدالله عواد الجهني";
        this.audios[19] = "http://live.mp3quran.net:9944";

        this.names[20] = "mp3Quran إذاعة بصوت الشيخ فارس عباد";
        this.audios[20] = "http://live.mp3quran.net:9972";

        this.names[21] = "mp3Quran إذاعة بصوت الشيخ ادريس ابكر";
        this.audios[21] = "http://live.mp3quran.net:9968";

        this.names[22] = "mp3Quran إذاعة بصوت الشيخ الزين محمد احمد";
        this.audios[22] = "http://live.mp3quran.net:9914";

        this.names[23] = "mp3Quran إذاعة بصوت الشيخ علي بن عبدالرحمن الحذيفي";
        this.audios[23] = "http://live.mp3quran.net:9844";

        this.names[24] = "mp3Quran إذاعة بصوت الشيخ سعد الغامدي";
        this.audios[24] = "http://live.mp3quran.net:8004";

        this.names[25] = "mp3Quran إذاعة بصوت الشيخ صلاح البدير";
        this.audios[25] = "http://live.mp3quran.net:9982";

        this.names[26] = "mp3Quran إذاعة بصوت الشيخ نبيل الرفاعي";
        this.audios[26] = "http://live.mp3quran.net:9784";

        this.names[27] = "mp3Quran إذاعة بصوت الشيخ ناصر القطامي";
        this.audios[27] = "http://live.mp3quran.net:9994";


        this.numberAudio = 0;

        this.next = document.getElementById("next");
        this.next.addEventListener("click", () => {
            this.next_audio();
        });

        this.back = document.getElementById("back");
        this.back.addEventListener("click", () => {
            this.back_audio();
        });
        this.setSource();
    }

    play_pause() {
        if (this.isPlayed == false) {
            this.play.src = "./img/playerImg/pause.png";
            this.myFiles.play();
            this.isPlayed = true;
        } else {
            this.play.src = "./img/playerImg/play.png";
            this.myFiles.pause();
            this.isPlayed = false;
        }
    }

    next_audio() {
        if (this.numberAudio < this.audios.length - 1) {
            ++this.numberAudio;
            this.isPlayed = false;
        } else {
            this.numberAudio = 0;
        }
        this.setSource();
    }
    back_audio() {
        if (this.numberAudio > 0) {
            --this.numberAudio;
            this.isPlayed = false;
        } else {
            this.numberAudio = this.audios.length - 1;
        }
        this.setSource();
    }


    setSource() {
        let caption = this.names[this.numberAudio]
        let link = this.audios[this.numberAudio]
        document.getElementById("radio-title").innerHTML = `<a target="_blank" href='${link}'>${caption}</a>`;
        document.getElementById("myFiles").src = link;

        this.play_pause();
    }

}
onload = new Player();