document.getElementById('instruction_button').addEventListener('click', function() {
    window.location.href = "instruction.html";
});

document.getElementById('game_button').addEventListener('click', function() {
    window.location.href = "questions.html";
});

document.getElementById('credits_button').addEventListener('click', function() {
    window.location.href = "credits.html";
});

window.history.pushState(null, null, window.location.href);
window.onpopstate = function () {
    window.history.go(1);
};