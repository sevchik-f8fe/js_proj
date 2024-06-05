let dateView = document.getElementById('data-view');

window.addEventListener('DOMContentLoaded', function() {
    let container = document.getElementById('container');

    setInterval(function() {
        let now = new Date().toLocaleString();

        dateView.textContent = now;
    }, 1);

    setTimeout(fade(container), 1000);
});

function fade(element) {
    element.style.opacity = 1;
    element.style.top = '300px';
}