const score = document.querySelector("#score");
const timer = document.querySelector("#timer");
const question = document.querySelector("#question");
const submitButton = document.querySelector("#submit-answer");
const answerInput = document.querySelector("#answer");
const nextQuestionButton = document.querySelector("#next-question");
const skipped = document.querySelector("#skipped");
const wrong = document.querySelector("#wrong");
const celebration = document.querySelector(".celebration");
const crying = document.querySelector(".crying");



let totalTime = localStorage.getItem('totalTime') ? parseInt(localStorage.getItem('totalTime'), 10) : 120; // 5 minutes in seconds

let scoreValue = localStorage.getItem('scoreValue') ? parseInt(localStorage.getItem('scoreValue'), 10) : 0;

let skipValue = localStorage.getItem('skipValue') ? parseInt(localStorage.getItem('skipValue'), 10) : 0;

let wrongValue = localStorage.getItem('wrongValue') ? parseInt(localStorage.getItem('wrongValue'), 10) : 0;

let interval;

function resetGame() {
    totalTime = 120;
    scoreValue = 0;
    score.textContent = `${scoreValue}`;
    localStorage.removeItem('totalTime');
    localStorage.removeItem('scoreValue');
    startTimer();
    loadNewQuestion();
}

// window.addEventListener('unload', function () {
//     localStorage.removeItem('totalTime');
//     localStorage.removeItem('scoreValue');
// });

function startTimer() {
    clearInterval(interval);
    interval = setInterval(function () {
        totalTime--;
        const minutes = Math.floor(totalTime / 60);
        const seconds = totalTime % 60;
        timer.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        if (totalTime <= 0) {
            clearInterval(interval);
            alert("Time's up!");
            submitButton.disabled = true;
            nextQuestionButton.disabled = true;
            window.location.href = 'gameover.html'; // Redirect to game over page
           
        }
    }, 1000);
}

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 20) + 2;
    const num2 = Math.floor(Math.random() * 10) + 2;
    return {
        question: `What is ${num1} x ${num2}?`,
        answer: num1 * num2
    };
}

function loadNewQuestion() {
    const newQuestion = generateQuestion();
    question.textContent = newQuestion.question;
    answerInput.value = '';
    answerInput.dataset.correctAnswer = newQuestion.answer;
}

submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    const userAnswer = parseInt(answerInput.value, 10);
    const correctAnswer = parseInt(answerInput.dataset.correctAnswer, 10);
    if (userAnswer === correctAnswer) {
        scoreValue++;
        score.textContent = `${scoreValue}`;
        localStorage.setItem('scoreValue', scoreValue);
        celebration.classList.remove('hidden');
        crying.classList.add('hidden');
    }
    else {
        wrongValue++;
        wrong.textContent = `${wrongValue}`;
        localStorage.setItem('wrongValue', wrongValue);
        crying.classList.remove('hidden');
        celebration.classList.add('hidden');
    }
    loadNewQuestion();
});


nextQuestionButton.addEventListener('click', function () {
    skipValue++;
    skipped.textContent = `${skipValue}`;
    localStorage.setItem('skipValue', skipValue);
    loadNewQuestion();
});

window.addEventListener('load', function () {
    scoreValue = 0;
    wrongValue = 0;
    skipValue = 0;
    score.textContent = `${scoreValue}`;
    if (totalTime > 0) {
        startTimer();
    }
    loadNewQuestion();
});
