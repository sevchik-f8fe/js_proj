let buttonReset = document.getElementById('button-reset');
let buttonCount = document.getElementById('button-count');
let dateView = document.getElementById('data-view');
let inputStartDate = document.getElementById('input-start');
let inputEndDate = document.getElementById('input-end');
let pInfo = document.getElementById('date-info');

buttonReset.onclick = reset;

buttonCount.onclick = countDays;

function reset() {
    inputStartDate.value = null;
    inputEndDate.value = null;
    pInfo.textContent = " дней";
    dateView.textContent = "0";
}

function countDays() {
    pInfo.textContent = " дней";
    dateView.textContent = "0";

    let startDate = inputStartDate.value;
    let endDate = inputEndDate.value;

    if (endDate < startDate) {
        reset();
        alert("Введите правильную дату");
        return;
    }

    startDate = Date.parse(startDate);
    endDate = Date.parse(endDate);

    let diffarence = endDate - startDate;
    diffarence = (diffarence / (1000 * 60 * 60 * 24));

    if (diffarence == 1) pInfo.textContent = " день";
    else if (diffarence >= 2 && diffarence <= 4) pInfo.textContent = " дня";

    if (isNaN(diffarence)) {
        alert("Введите все даты");
        return;
    } else {
        dateView.textContent = diffarence;
    }
}
