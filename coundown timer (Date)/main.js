let buttonReset = document.getElementById('button-reset');
let buttonStart = document.getElementById('button-start');
let timeRemaining = document.getElementById('data-view');
let inputs = document.querySelectorAll('input');
let body = document.querySelector('body')

function resetTime() {
    inputs.forEach(input => {
        input.value = null;
    });

    timeRemaining.textContent = "00:00:00:00";
    buttonStart.style.display = "block";
    buttonReset.textContent = "Сбросить";
}

function addZeros(num) {
    return (num < 10) ? "0" + num : num;
}

inputs.forEach(input => {
    input.onkeypress = () => false;
});

buttonReset.onclick = resetTime;
buttonStart.onclick = startCountdown;

function startCountdown() {
    let daysInput = document.getElementById("input-days").value;
    let hoursInput = document.getElementById("input-hours").value;
    let minutesInput = document.getElementById("input-minutes").value;
    let secondsInput = document.getElementById("input-seconds").value;

    (!daysInput) ? daysInput = "0" : daysInput = daysInput;
    (!hoursInput) ? hoursInput = "0" : hoursInput = hoursInput;
    (!minutesInput) ? minutesInput = "0" : minutesInput = minutesInput;
    (!secondsInput) ? secondsInput = "0" : secondsInput = secondsInput;
    
    buttonReset.textContent = "Отмена";
    buttonStart.style.display = "none";

    let days = parseInt(daysInput);
    let hours = parseInt(hoursInput);
    let minutes = parseInt(minutesInput);
    let seconds = parseInt(secondsInput);
    
    const now = new Date().getTime();
    
    const endTime = now + days * 86400000 + hours * 3600000 + minutes * 60000 + seconds * 1000 + 1000;
    
    const countdownInterval = setInterval(function() {
        const current = new Date().getTime();

        const difference = endTime - current;

        let daysRemaining = Math.floor(difference / (1000 * 60 * 60 * 24));
        let hoursRemaining = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutesRemaining = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        let secondsRemaining = Math.floor((difference % (1000 * 60)) / 1000);

        timeRemaining.textContent = addZeros(daysRemaining) + ":" + addZeros(hoursRemaining) + ":" + addZeros(minutesRemaining) + ":" + addZeros(secondsRemaining);

        if (difference < 0) {
            clearInterval(countdownInterval);
            buttonReset.textContent = "Сбросить";
            body.style.background = 'linear-gradient(90deg, rgba(195,54,54,1) 0%, rgba(65,19,58,1) 100%)';
            timeRemaining.style.color = 'rgba(195,54,54,1)';
            timeRemaining.textContent = "ВРЕМЯ ИСТЕКЛО";
        }

        buttonReset.addEventListener('click', function() {
            clearInterval(countdownInterval);
            resetTime();
            body.style.background = 'linear-gradient(90deg, rgba(57,208,137,1) 0%, rgba(28,164,200,1) 100%)';
            timeRemaining.style.color = '#cee5e3';
            buttonStart.style.display = "block";
        });
    }, 1);
}