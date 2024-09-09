
document.getElementById('startbutton').addEventListener('click', function() {
    window.location.href = "index.html";
});

window.history.pushState(null, null, window.location.href);
window.onpopstate = function () {
    window.history.go(1);
};
