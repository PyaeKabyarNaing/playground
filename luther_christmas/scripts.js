document.getElementById("startBtn").addEventListener("click", () => {

    function fadeOutAudio(audio, duration = 1000) {
  const step = 50;
  const volumeStep = audio.volume / (duration / step);

  const fade = setInterval(() => {
    if (audio.volume > volumeStep) {
      audio.volume -= volumeStep;
    } else {
      audio.volume = 0;
      audio.pause();
      clearInterval(fade);
    }
  }, step);
}

const song = document.getElementById("song");
const sza = document.getElementById("sza");
const sleg1 = document.getElementById("sleg1");
const sleg11 = document.getElementById("sleg11");
const sleg2 = document.getElementById("sleg2");
const kdot = document.getElementById("kdot");
const kdothand1 = document.getElementById("kdothand1");
const khead = document.getElementById("khead");
const hoodHead = document.getElementById("hoodHead");
const jhand1 = document.getElementById("jhand1");
const jhand2 = document.getElementById("jhand2");

    setTimeout(() => {
        kdot.classList.add("kslide");

        jhand1.classList.add("jhandwave");
        jhand2.classList.add("jhandwave");
        song.play();
    }, 0);

    setTimeout(() => {
        kdot.classList.add("kplace");
    }, 4000);

    setTimeout(() => {
        hoodHead.classList.add("hidden");
        khead.classList.remove("hidden");
    }, 13000);

    setTimeout(() => {
        kdothand1.classList.remove("khandwave");
        kdothand1.classList.add("ksing");
        khead.classList.add("knod");

        sza.classList.add("sslide");
    }, 13500);

    setTimeout(() => {
        sza.classList.add("splace");
    }, 17000);

    //fa
    setTimeout(() => {
        sleg11.classList.add("hidden");
        sleg1.classList.remove("hidden");
    }, 26000);
    setTimeout(() => {
        sleg11.classList.remove("hidden");
        sleg1.classList.add("hidden");
    }, 26200);

    setTimeout(() => {
        sleg11.classList.add("hidden");
        sleg1.classList.remove("hidden");
    }, 27500);
    setTimeout(() => {
        sleg11.classList.remove("hidden");
        sleg1.classList.add("hidden");
    }, 27700);
    setTimeout(() => {
        sleg11.classList.add("hidden");
        sleg1.classList.remove("hidden");
    }, 28000);
    setTimeout(() => {
        sleg11.classList.remove("hidden");
        sleg1.classList.add("hidden");
    }, 28200);

    setTimeout(() => {
        sleg11.classList.add("hidden");
        sleg1.classList.remove("hidden");
    }, 29000);
    setTimeout(() => {
        sleg11.classList.remove("hidden");
        sleg1.classList.add("hidden");
    }, 29200);
    setTimeout(() => {
        sleg11.classList.add("hidden");
        sleg1.classList.remove("hidden");
    }, 29400);

    setTimeout(() => {
        sleg11.classList.remove("hidden");
        sleg1.classList.add("hidden");
    }, 30500);
    setTimeout(() => {
        sleg11.classList.add("hidden");
        sleg1.classList.remove("hidden");
    }, 30700);
    setTimeout(() => {
        sleg11.classList.remove("hidden");
        sleg1.classList.add("hidden");
    }, 31000);
    setTimeout(() => {
        sleg11.classList.add("hidden");
        sleg1.classList.remove("hidden");
    }, 31200);

    setTimeout(() => {
        sleg11.classList.remove("hidden");
        sleg1.classList.add("hidden");
    }, 32550);

    setTimeout(() => {
        setTimeout(() => {
        fadeOutAudio(song, 1500);
    }, 0);
    }, 36000);

});