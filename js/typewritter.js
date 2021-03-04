var app = document.getElementById('dev');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Developer Node.js')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('Python')
    .pauseFor(2500)
    .deleteChars(6)
    .typeString('Backend')
    .pauseFor(2500)
    .start();