const number = parseInt(Math.random() * 100 + 1);
const submitBtn = document.querySelector('#bt');
const userNum = document.querySelector('#num');
const arr = document.querySelector('#arr');
const res = document.querySelector('#res');
const last = document.querySelector('#last')

let inputVal;
let chances = 5;
let prevGuess = [];

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    inputVal = userNum.value;
    validateNumber(inputVal);
})

function validateNumber(inputVal) {
    if (inputVal > 100 || inputVal<1) {
        res.innerHTML = `Number out of range. RANGE: (1-100)`;
        res.style.background = "skyblue";
    }
    else if (isNaN(inputVal)) {
        res.innerHTML = `Invalid Input. Enter a Number.`;
        res.style.background = "skyblue";
    }
    else {
        res.innerHTML = " ";
        res.style.background = "white";
        checkNumber(inputVal);
    }
}

function checkNumber(inputVal) {
    if (inputVal == number) {
        res.style.background = "green";
        res.style.color = "white";
        res.innerHTML = `<h2>Horrayyy! You Won:) <br> Number = ${number}</h2>`;
        arr.innerHTML = " ";
        last.innerHTML = " ";
        last.style.background = "white";
        arr.style.background = "white";
    }
    else {
        userNum.value = " ";
        prevGuess.push(inputVal);
        arr.innerHTML = `Previous Guesses : ${prevGuess}`;
        chances = chances - 1;
        last.innerHTML = `Chances Left : ${chances}`;

        if (chances == 0) 
        {
            res.innerHTML = `<h2>OOPS! Out of moves.<br>Better Luck Next Time:) <br> Number = ${number}</h2>`;
            res.style.background = "red";
            res.style.color = "white";
            prevGuess = [];
            userNum.disabled = true;
            arr.innerHTML = " ";
            last.innerHTML = " ";
            last.style.background = "white";
            arr.style.background = "white";
        }
    }
}
