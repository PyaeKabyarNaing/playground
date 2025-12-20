document.getElementById("startBtn").addEventListener("click", () => {
const notesContainer = document.querySelector('.notes');

const symbols = ['♪', '♫', '♩'];

function createNote() {
  const note = document.createElement('div');
  note.className = 'note';
  note.textContent = symbols[Math.floor(Math.random() * symbols.length)];

  const xDrift = Math.random() * 40 - 20; // left/right
  note.style.setProperty('--x', `${xDrift}px`);

  notesContainer.appendChild(note);

  setTimeout(() => {
    note.remove();
  }, 2500);

  setTimeout(() => {
    notesContainer.remove();
  }, 102000);
}

setInterval(createNote, 400);

    const kfull = document.getElementById("kfull");
    const kbody = document.getElementById("kbody");
    const kbody1 = document.getElementById("kbody1");
    const khand1 = document.getElementById("khand1");
    const khand2 = document.getElementById("khand2");
    const kleg1 = document.getElementById("kleg1");
    const kleg2 = document.getElementById("kleg2");
    const khead = document.getElementById("khead");
    const kmic = document.getElementById("kmicHold");
    const kmicHold = document.getElementById("kmicHold");
    const dhand1 = document.getElementById("dhand1");
    const dmicHold = document.getElementById("dmicHold");
    const wheels = document.querySelectorAll(".wheel");
    const dhead = document.getElementById("dhead");
    const dhead2 = document.getElementById("dhead2");
    const dhand2 = document.getElementById("dhand2");
    const jCole = document.getElementById("jCole");
    const jCole1 = document.getElementById("jCole1");
    const jCole2 = document.getElementById("jCole2");
    const scream = document.getElementById("scream");
    const scene = document.getElementById("scene");
    const scene1 = document.getElementById("scene1");
    const scene2 = document.getElementById("scene2");
    const kdot = document.getElementById("kdot");
    const drake = document.getElementById("drake");
    const intro = document.getElementById("intro");
    const mic = document.getElementById("mic");
    const control = document.getElementById("control");
    const push_ups = document.getElementById("push_ups");
    const bum1 = document.getElementById("bum1");
    const bike = document.getElementById("bike");
    const bum2 = document.getElementById("bum2");
    const taylor = document.getElementById("taylor");
    const braids = document.getElementById("braids");
    const drop = document.getElementById("drop");
    const la = document.getElementById("la");
    const choir = document.getElementById("choir");
    const minor = document.getElementById("minor");
    const NUL = document.getElementById("NUL");
    const free = document.getElementById("free");
    const glitch = document.getElementById("glitch");
    const MTG = document.getElementById("MTG");

    setTimeout(() => {
        scene1.classList.add("hidden");
        scene.classList.remove("hidden");
        khand1.classList.remove("khand1");
        khand1.classList.add("khand1sing");
        kmicHold.classList.remove("kmic-hold");
        kmicHold.classList.add("kmic-sing");
        intro.volume = 1;
        intro.play();
    }, 0);

    setTimeout(() => {
        scene1.classList.add("hidden");
        scene.classList.remove("hidden");

        khand1.classList.add("khand1");
        khand1.classList.remove("khand1sing");
        kmicHold.classList.add("kmic-hold");
        kmicHold.classList.remove("kmic-sing");
        // mic.volume = 1;
        mic.play();
    }, 1000);

    setTimeout(() => {
        kdot.classList.add("kmove");
        kdot.classList.remove("reverse");
        scene1.classList.add("hidden");
        scene.classList.remove("hidden");
        khand1.classList.remove("khand1");
        khand1.classList.add("khand1sing");
        kmicHold.classList.remove("kmic-hold");
        kmicHold.classList.add("kmic-sing");
        control.volume = 0.8;
        control.play();
    }, 3000);

    setTimeout(() => {
        drake.classList.add("dmove");
        drake.classList.remove("reverse");
        scene1.classList.add("hidden");
        scene.classList.remove("hidden");

        khand1.classList.add("khand1");
        khand1.classList.remove("khand1sing");
        kmicHold.classList.add("kmic-hold");
        kmicHold.classList.remove("kmic-sing");

        dhand1.classList.remove("dhand1");
        dhand1.classList.add("dhand1sing");
        dmicHold.classList.remove("dmic-hold");
        dmicHold.classList.add("dmic-sing");
        push_ups.play();
    }, 17000);

    setTimeout(() => {
        scene1.classList.add("hidden");
        scene.classList.remove("hidden");

        khand1.classList.remove("khand1");
        khand1.classList.add("khand1sing");
        kmicHold.classList.remove("kmic-hold");
        kmicHold.classList.add("kmic-sing");

        dhand1.classList.add("dhand1");
        dhand1.classList.remove("dhand1sing");
        dmicHold.classList.add("dmic-hold");
        dmicHold.classList.remove("dmic-sing");
        bum1.play();
    }, 28000);

    setTimeout(() => {
        scene.classList.add("hidden");
        scene1.classList.remove("hidden");
        bike.play();
    }, 32000);

    setTimeout(() => {
        scene1.classList.add("hidden");
        scene.classList.remove("hidden");
        khand1.classList.remove("khand1");
        khand1.classList.add("khand1sing");
        kmicHold.classList.remove("kmic-hold");
        kmicHold.classList.add("kmic-sing");
        bum2.play();
    }, 44000);

    setTimeout(() => {
        scene1.classList.add("hidden");
        scene.classList.remove("hidden");

        khand1.classList.add("khand1");
        khand1.classList.remove("khand1sing");
        kmicHold.classList.add("kmic-hold");
        kmicHold.classList.remove("kmic-sing");

        dhand1.classList.remove("dhand1");
        dhand1.classList.add("dhand1sing");
        dmicHold.classList.remove("dmic-hold");
        dmicHold.classList.add("dmic-sing");
        taylor.play();
    }, 49000);

    setTimeout(() => {
        scene1.classList.add("hidden");
        scene.classList.remove("hidden");

        khand1.classList.remove("khand1");
        khand1.classList.add("khand1sing");
        kmicHold.classList.remove("kmic-hold");
        kmicHold.classList.add("kmic-sing");

        dhand1.classList.add("dhand1");
        dhand1.classList.remove("dhand1sing");
        dmicHold.classList.add("dmic-hold");
        dmicHold.classList.remove("dmic-sing");
        braids.play();
    }, 61000);

    setTimeout(() => {
        khand1.classList.add("khand1");
        khand1.classList.remove("khand1sing");
        kmicHold.classList.add("kmic-hold");
        kmicHold.classList.remove("kmic-sing");

        dhand1.classList.remove("dhand1");
        dhand1.classList.add("dhand1sing");
        dmicHold.classList.remove("dmic-hold");
        dmicHold.classList.add("dmic-sing");
        drop.play();
    }, 79000);

    setTimeout(() => {
        scene1.classList.remove("hidden");

        dhand1.classList.add("dhand1");
        dhand1.classList.remove("dhand1sing");
        dmicHold.classList.add("dmic-hold");
        dmicHold.classList.remove("dmic-sing");
        scene.classList.add("hidden");
        choir.play();
    }, 94000);

    setTimeout(() => {
        scene1.classList.remove("hidden");
        scene.classList.add("hidden");
        scream.classList.remove("hidden");
        wheels.forEach(wheel => {
        wheel.classList.remove("wheelRoll");
    });
        minor.play();
    }, 102000);

    setTimeout(() => {
    jhead.classList.add("hidden");
    jback.classList.remove("hidden");
}, 103000);

setTimeout(() => {
    jhead.classList.add("hidden");
    jback.classList.add("hidden");
    jside.classList.remove("hidden");
}, 103500);


    setTimeout(() => {
        jhead.classList.remove("hidden");
        jback.classList.add("hidden");
        jside.classList.add("hidden");
    wheels.forEach(wheel => {
        wheel.classList.add("wheelRoll1");
        jCole.classList.add("coleMove");
    });
    }, 105500);

    setTimeout(() => {
        scene1.classList.add("hidden");
        scene.classList.remove("hidden");

        khand1.classList.remove("khand1");
        khand1.classList.add("khand1sing");
        kmicHold.classList.remove("kmic-hold");
        kmicHold.classList.add("kmic-sing");

        dhand1.classList.add("dhand1");
        dhand1.classList.remove("dhand1sing");
        dmicHold.classList.add("dmic-hold");
        dmicHold.classList.remove("dmic-sing");
        la.volume = 0.5;
        la.play();
    }, 107000);

    setTimeout(() => {
        scene1.classList.add("hidden");
        scene.classList.remove("hidden");
        
        khand1.classList.add("khand1");
        khand1.classList.remove("khand1sing");
        kmicHold.classList.add("kmic-hold");
        kmicHold.classList.remove("kmic-sing");

        dhand1.classList.remove("dhand1");
        dhand1.classList.add("dhand1sing");
        dmicHold.classList.remove("dmic-hold");
        dmicHold.classList.add("dmic-sing");
    }, 123000);

    setTimeout(() => {
        scene1.classList.add("hidden");
        scene.classList.remove("hidden");

        khand1.classList.remove("khand1");
        khand1.classList.add("khand1sing");
        kmicHold.classList.remove("kmic-hold");
        kmicHold.classList.add("kmic-sing");

        dhand1.classList.remove("dhand1");
        dhand1.classList.add("dhand1sing");
        dmicHold.classList.remove("dmic-hold");
        dmicHold.classList.add("dmic-sing");
        free.volume = 0.9;
        free.play();
    }, 107000);

    setTimeout(() => {
        scene1.classList.add("hidden");
        scene.classList.remove("hidden");
        
        dhead.classList.add("hidden");
        dhead2.classList.remove("hidden");
        drake.classList.remove("dmove");
        dhand2.classList.remove("dhandmove");

        dhand1.classList.add("dhand1");
        dhand1.classList.remove("dhand1sing");
        dmicHold.classList.add("dmic-hold");
        dmicHold.classList.remove("dmic-sing");

        kdot.classList.add("glitch");
        kfull.classList.add("hidden");
        khead.classList.add("headFall");
        khand1.classList.add("hand1Fall");
        khand2.classList.add("hand2Fall");
        kbody.classList.add("bodyFall");
        kbody1.classList.add("body1Fall");
        kleg1.classList.add("leg1Fall");
        kleg2.classList.add("leg2Fall");
        kmic.classList.add("headFall");
        glitch.play();
    }, 125000);

    setTimeout(() => {
        khead.classList.remove("headFall");
        khand1.classList.remove("hand1Fall");
        khand2.classList.remove("hand2Fall");
        kbody.classList.remove("bodyFall");
        kbody1.classList.remove("body1Fall");
        kleg1.classList.remove("leg1Fall");
        kleg2.classList.remove("leg2Fall");
        kmic.classList.remove("headFall");

        khead.classList.add("headBuild");
        khand1.classList.add("hand1Build");
        khand2.classList.add("hand2Build");
        kbody.classList.add("bodyBuild");
        kbody1.classList.add("body1Build");
        kleg1.classList.add("leg1Build");
        kleg2.classList.add("leg2Build");
        kmic.classList.add("headBuild");
    }, 134000);

    setTimeout(() => {
        kfull.classList.remove("hidden");
        khead.classList.remove("headBuild");
        khand1.classList.remove("hand1Build");
        khand2.classList.remove("hand2Build");
        kbody.classList.remove("bodyBuild");
        kbody1.classList.remove("body1Build");
        kleg1.classList.remove("leg1Build");
        kleg2.classList.remove("leg2Build");
        kmic.classList.remove("headBuild");
    }, 144000);

    setTimeout(() => {
        kdot.classList.add("big");
        kfull.classList.add("big");
        khead.classList.add("big");
        khead.classList.add("headLeft");
        khead.classList.add("headTop");
        kbody.classList.add("big");
        kbody1.classList.add("big");
        khand1.classList.add("big");
        khand1.classList.add("hand1Left");
        khand1.classList.add("hand1Top");
        khand2.classList.add("big");
        khand2.classList.add("hand2Left");
        khand2.classList.add("hand2Top");
        kleg1.classList.add("big");
        kleg2.classList.add("big");
        kmic.classList.add("big");
        kmic.classList.add("micRotate");
    }, 145000);

    setTimeout(() => {
        scene1.classList.add("hidden");
        scene.classList.add("hidden");
        scene2.classList.add("hidden");
    }, 147000);

    setTimeout(() => {
        scene1.classList.add("hidden");
        scene.classList.add("hidden");
        scene2.classList.remove("hidden");
        jCole1.classList.remove("hidden");
        MTG.play();
    }, 151000);

    setTimeout(() => {
        jCole2.classList.remove("hidden");
        jCole1.classList.add("hidden");
    }, 152000);

});