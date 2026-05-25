document.getElementById("curtain").addEventListener("click", () => {
    const curtainLeft = document.getElementById("curtain-left");
    const curtainRight = document.getElementById("curtain-right");
    const curtain = document.getElementById("curtain");
    const audio = document.getElementById("audio");

    curtainLeft.classList.add("curtainLeft");
    curtainRight.classList.add("curtainRight");
    audio.play();

    setTimeout(() => {
        curtainLeft.classList.add("hidden");
        curtainRight.classList.add("hidden");
        curtain.classList.add("hidden");
    }, 1000);
});

for (let i = 0; i < 20; i++) {
    const snow = document.createElement("div");
    snow.classList.add("snow");

    snow.style.left = Math.random() * 100 + "%";
    snow.style.animationDuration = 5 + Math.random() * 10 + "s";
    snow.style.width = snow.style.height = 2 + Math.random() * 8 + "px";

    scene.appendChild(snow);
}

document.getElementById("btn-winter").addEventListener("click", () => {
    const scene = document.getElementById("scene");
    const scene1 = document.getElementById("scene1");

    scene.classList.add("hidden");
    scene1.classList.remove("hidden");
});

document.getElementById("btn-spring").addEventListener("click", () => {
    const scene1 = document.getElementById("scene1");
    const scene2 = document.getElementById("scene2");

    scene1.classList.add("hidden");
    scene2.classList.remove("hidden");
});

document.getElementById("btn-summer").addEventListener("click", () => {
    const scene2 = document.getElementById("scene2");
    const scene3 = document.getElementById("scene3");

    scene2.classList.add("hidden");
    scene3.classList.remove("hidden");
});

document.getElementById("btn-autumn").addEventListener("click", () => {
    const scene3 = document.getElementById("scene3");
    const scene4 = document.getElementById("scene4");

    scene3.classList.add("hidden");
    scene4.classList.remove("hidden");
});

document.getElementById("btn-img").addEventListener("click", () => {
    const scene4 = document.getElementById("scene4");   
    const scene = document.getElementById("scene");

    scene4.classList.add("hidden");
    scene.classList.remove("hidden");
});