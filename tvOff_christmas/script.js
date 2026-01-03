document.getElementById("startBtn").addEventListener("click", () => {
    const song = document.getElementById("song");
    const shadow = document.getElementById("shadow");
    const shadow1 = document.getElementById("shadow1");
    const shadow2 = document.getElementById("shadow2");
    const kdot = document.getElementById("kdot");
    const kdot1 = document.getElementById("kdot1");
    const khead = document.getElementById("khead");
    const khead1 = document.getElementById("khead1");
    const kleg11 = document.getElementById("kleg11");
    const kleg21 = document.getElementById("kleg21");
    const khand11 = document.getElementById("khand11");
    const khand2 = document.getElementById("khand2");
    const mustard = document.getElementById("mustard");
    const mhead = document.getElementById("mhead");
    const sza = document.getElementById("sza");
    const box = document.getElementById("box");
    const reds = document.querySelectorAll(".red");
    const blues = document.querySelectorAll(".blue");
    const greens = document.querySelectorAll(".green");
    const yellows = document.querySelectorAll(".yellow");
    const pinks = document.querySelectorAll(".pink");
    const purples = document.querySelectorAll(".purple");

    song.play();

    setTimeout(() => {
    sza.classList.add("smove");
}, 0);

setTimeout(() => {
    shadow.classList.add("shadowmove");
}, 6000);

setTimeout(() => {
    shadow1.classList.remove("hidden");

    box.classList.remove("box");
    box.classList.add("box1");
    mustard.classList.remove("hidden");
}, 7000);

    setTimeout(() => {
    shadow1.classList.add("shadowmove1");
}, 7500);

    setTimeout(() => {
    sza.classList.remove("smove");
    sza.classList.add("smove1");
    sza.classList.add("flip");
}, 8000);

setTimeout(() => {
    shadow1.classList.add("hidden");
    shadow2.classList.remove("hidden");
}, 8500);

    setTimeout(() => {
    kdot.classList.add("kshow");
    khead.classList.add("kheadbig");

    shadow2.classList.add("hidden");

    mhead.classList.add("mheadmove");
    }, 9000);

    setTimeout(() => {
    khead1.classList.remove("hidden");
    }, 10000);

    setTimeout(() => {
    kdot.classList.add("hidden");
    khead1.classList.add("hidden");
    kdot1.classList.remove("hidden");
    }, 14000);

    setTimeout(() => {
    kdot1.classList.add("kmove");
    kleg11.classList.add("kleg1move");
    kleg21.classList.add("kleg2move");
    }, 13000);

    setTimeout(() => {
    kdot1.classList.remove("kmove");
    kdot1.classList.add("kmove1");
    kdot1.classList.add("flip");
    }, 15500);

    setTimeout(() => {
    kdot1.classList.add("kmove");
    kdot1.classList.remove("kmove1");
    kdot1.classList.remove("flip");
    }, 18000);

    setTimeout(() => {
    kdot1.classList.remove("kmove");
    kdot1.classList.add("kmove1");
    kdot1.classList.add("flip");
    }, 20500);

    setTimeout(() => {
    kdot1.classList.add("kmove");
    kdot1.classList.remove("kmove1");
    kdot1.classList.remove("flip");
    }, 23000);

    setTimeout(() => {
    kdot1.classList.remove("kmove");
    kdot1.classList.add("kmove1");
    kdot1.classList.add("flip");
    }, 25500);

    setTimeout(() => {
    kdot1.classList.add("kmove");
    kdot1.classList.remove("kmove1");
    kdot1.classList.remove("flip");
    }, 28000);

    reds.forEach(red => {
        red.classList.add("glow");
    });

    blues.forEach(blue => {
        blue.classList.add("glow");
    });

    greens.forEach(green => {
        green.classList.add("glow");
    });

    yellows.forEach(yellow => {
        yellow.classList.add("glow");
    });

    pinks.forEach(pink => {
        pink.classList.add("glow");
    });

    purples.forEach(purple => {
        purple.classList.add("glow");
    });

    setTimeout(() => {
    reds.forEach(red => {
        red.classList.add("glitch");
        red.classList.remove("glow");
    });

    blues.forEach(blue => {
        blue.classList.add("glitch");
        blue.classList.remove("glow");
    });

    greens.forEach(green => {
        green.classList.add("glitch");
        green.classList.remove("glow");
    });

    yellows.forEach(yellow => {
        yellow.classList.add("glitch");
        yellow.classList.remove("glow");
    });

    pinks.forEach(pink => {
        pink.classList.add("glitch");
        pink.classList.remove("glow");
    });

    purples.forEach(purple => {
        purple.classList.add("glitch");
        purple.classList.remove("glow");
    });
}, 6000);

setTimeout(() => {
    khand11.classList.add("hidden");
    khand2.classList.remove("hidden");
    }, 18500);
setTimeout(() => {
    khand11.classList.remove("hidden");
    khand2.classList.add("hidden");
    }, 20500);
setTimeout(() => {
    khand11.classList.add("hidden");
    khand2.classList.remove("hidden");
    }, 21000);
setTimeout(() => {
    khand11.classList.remove("hidden");
    khand2.classList.add("hidden");
    }, 22500);
setTimeout(() => {
    khand11.classList.add("hidden");
    khand2.classList.remove("hidden");
    }, 23500);
setTimeout(() => {
    khand11.classList.remove("hidden");
    khand2.classList.add("hidden");
    }, 25000);
setTimeout(() => {
    khand11.classList.add("hidden");
    khand2.classList.remove("hidden");
    }, 25500);
setTimeout(() => {
    khand11.classList.remove("hidden");
    khand2.classList.add("hidden");
    }, 27500);

});