let imgContainer = document.getElementById('img');
let textHover = document.getElementById('text-hover');
let info = document.getElementById('info');

window.addEventListener('DOMContentLoaded', function() {
    textHover.onmouseover = () => {
        info.style.opacity = 1;
        info.style.marginLeft = "5rem";
    } 
    
    textHover.onmouseout = () => {
        info.style.opacity = 0;
        info.style.marginLeft = "0rem";
    }
});
