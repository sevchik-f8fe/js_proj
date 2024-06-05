let navElements = document.querySelectorAll('.navigation-elemenet');
let calcContainers = document.querySelectorAll('.calc-container');
let div;

navElements.forEach(navElement => {
    navElement.onclick = () => {
        for (let i = 0; i < navElements.length; i++) {
            navElements[i].classList.remove('active-window');
        }

        navElement.classList.add('active-window');

        for (let i = 0; i < navElements.length; i++) {
            calcContainers[i].classList.remove('active-window');

            if (navElements[i].classList.contains('active-window')) {
                calcContainers[i].classList.add('active-window');
            }
        }
    }
});

function reset() {
    let m = document.querySelectorAll('.resultContainer');

    numberOfClick = 0;
    linesNumber = 0;
    columnsNumber = 0;
    document.getElementById('lines-number-1').value = null;
    document.getElementById('columns-number-1').value = null;

    if (m[0] === undefined){
        return;
    } else {
        m[0].parentNode.removeChild(m[0]);
    }

    if (m[1] === undefined){
        return;
    } else {
        m[1].parentNode.removeChild(m[1]);
    }

    return;
}

function createArray(lines, columns) {
    let arr = [];

    for (let i = 0; i < lines; i++) {
        arr[i] = [];
        for (let j = 0; j < columns; j++) {
            arr[i].push("0");
        }
    }

    return arr;
}

function fadeOut(element) {
    element.style.opacity = 1;
}

function createEmptyMatrixDOM(arr) {
    div = document.createElement('div');
    div.style.margin = "1em 0";
    div.classList.add('resultContainer');
    document.querySelector('.set-size-container').append(div);

    let p = document.createElement('p');
    p.textContent = "Введите значения элементов матрицы:";
    div.append(p);

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            let input = document.createElement('input');
            input.setAttribute('type','number');
            input.setAttribute('placeholder','0');
            input.value = Number(arr[i][j]);
            input.style.width = "2.5em";
            input.classList.add('matrixValue');
            div.append(input);
        }

        let br = document.createElement('br');
        div.append(br);
    }
}

let numberOfClick = 0;


document.getElementById('set-size-button-1').onclick = () => {
    if (numberOfClick > 0) {
        return;
    }    
    
    numberOfClick++;

    let linesNumber = Number(document.getElementById('lines-number-1').value);
    let columnsNumber = Number(document.getElementById('columns-number-1').value);

    createEmptyMatrixDOM(createArray(linesNumber, columnsNumber));

    let getResult1 = document.createElement('Button');
    getResult1.textContent = "Решить";
    getResult1.style.margin = "1em 0";
    div.append(getResult1);

    getResult1.onclick = changeSing;

    document.getElementById('reset-button-1').onclick = reset;

    function createMatrixDOM(arr) {
        div = document.createElement('div');
        div.classList.add('resultContainer');
        div.style.margin = "1em 0";
        document.querySelector('.set-size-container').append(div);
    
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                let input = document.createElement('input');
                input.setAttribute('type','number');
                input.setAttribute('placeholder','0');
                input.value = Number(arr[i][j]);
                input.style.width = "2.5em";
                input.classList.add('matrixResult');
                div.append(input);
            }
    
            let br = document.createElement('br');
            div.append(br);
        }
    }

    function changeSing() {
        let inputs = document.querySelectorAll('.matrixValue');
        let matrixElements = [];

        for (let i = 0; i < inputs.length; i++) {
            matrixElements[i] = [];
            for (let j = 0; j < columnsNumber; j++) {
                matrixElements[i].push(Number(inputs[i]));
            }
        }

        for (let i = 0; i < linesNumber; i++) {
            for (let j = 0; j < columnsNumber; j++) {
                matrixElements[i][j] *= -1;
            }
        }

        createMatrixDOM(matrixElements);

        inputs = document.querySelectorAll('.matrixResult');

        for (let i = 0; i < inputs.length; i++) {
            for (let j = 0; j <= columnsNumber; j++) {
                inputs[i].setAttribute('disabled', 'true');
            }
        }
    }
}

